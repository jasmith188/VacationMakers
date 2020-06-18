import React from 'react';
import postData from "./data";
import Card from 'react-bootstrap/Card'
import "./index.css"
import Image from 'react-bootstrap/Image'
import restaurant from "../../images/restaurant.jpg"
const axios = require("axios");

class Restaurant extends React.Component {
   

        state = {
            posts: []
}

    // onclick(event) {
    //     this.props.onclick(event)

    // }

    componentDidMount() {
        axios({
            "method":"GET",
            "url":"https://tripadvisor1.p.rapidapi.com/restaurants/list-by-latlng",
            "headers":{
            "content-type":"application/octet-stream",
            "x-rapidapi-host":"tripadvisor1.p.rapidapi.com",
            "x-rapidapi-key":"e60eeecd26msh7858828104aa1fbp16c2d9jsn16ade6057027",
            "useQueryString":true
            },"params":{
            "limit":"8",
            "currency":"USD",
            "distance":"10",
            "lunit":"mi",
            "lang":"en_US",
            "latitude":"28.5421109",
            "longitude":"-81.3790304"
            }
        })
        .then((response) => {
              console.log(response.data.data)
            this.setState({ posts: response.data.data })

        })
        .catch((error) => {
            console.log(error)
        })
    }

    render() {

        return (
            <div>
                <Card className="restaurants-card">
                <Image src={restaurant} height="200px" width="280px" />
                    <Card.Header img src="../../component/"as="h4">Restaurants</Card.Header>
                    <Card.Body>
                        <Card.Title>Choose a Restaurant location, name and price</Card.Title>
                        <Card.Text>
                            {this.state.posts.map(post =>

                                <div key={post.location_id} onClick={this.onclick}>  {post.location_string} | {post.name} | ${post.price} | {post.website}
                                </div>

                            )}
                        </Card.Text>
                    </Card.Body>
                </Card>

            </div>
        );
    }
}

export default Restaurant


