import React from 'react';
import Card from 'react-bootstrap/Card'
import postData from "./data"
import "./index.css"
import Image from 'react-bootstrap/Image'
import hotel from "../../images/hotel.jpg"
import hotel2 from "../../images/hotel2.jpg"
const axios = require("axios");

class HotelAPI extends React.Component {
    state = {
        posts: []
    }

    componentDidMount() {

        axios({
            "method":"GET",
            "url":"https://tripadvisor1.p.rapidapi.com/hotels/list-by-latlng",
            "headers":{
            "content-type":"application/octet-stream",
            "x-rapidapi-host":"tripadvisor1.p.rapidapi.com",
            "x-rapidapi-key":"e60eeecd26msh7858828104aa1fbp16c2d9jsn16ade6057027",
            "useQueryString":true
            },"params":{
            "lang":"en_US",
            "limit":"15",
            "currency":"USD",
            "checkin":"2020%2F09%2F08",
            "subcategory":"hotel%2Cbb%2Cspecialty",
            "nights":"2",
            "radius":"100",
            "latitude":"28.5421109",
            "longitude":"-81.3790304"
            }
            })
            .then((response)=>{
              console.log(response)
              this.setState({ posts: response.data.data })
            })
            .catch((error)=>{
              console.log(error)
            })
    }

    render() {

        return (
            <div>
                <Card className="hotel-card">
                <Image src={hotel} height="200px" width="280px" />
                    <Card.Header as="h4">Hotels</Card.Header>
                    
                    <Card.Body>
                        <Card.Title>Pick a Hotel location, name and price</Card.Title>
                        <Card.Text>
                            {this.state.posts.map(post =>

                                <div key={post.location_id} onClick={this.onclick}>  {post.location} | {post.name} | ${post.price}
                                </div>

                            )}
                        </Card.Text>
                    </Card.Body>
                    
                </Card>

            </div>
        );
    }
}

export default HotelAPI