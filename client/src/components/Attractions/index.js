import React from 'react';

import Card from 'react-bootstrap/Card'
import postData from "./data"
import "./index.css"
import Image from 'react-bootstrap/Image'
import castle from "../../images/castle.jpg"
import attraction from "../../images/attraction.jpg"
const axios = require("axios");

class Attractions extends React.Component {
    state = {
        posts: []
    }

    componentDidMount() {
        axios({
            "method":"GET",
            "url":"https://tripadvisor1.p.rapidapi.com/attractions/list-by-latlng",
            "headers":{
            "content-type":"application/octet-stream",
            "x-rapidapi-host":"tripadvisor1.p.rapidapi.com",
            "x-rapidapi-key":"e60eeecd26msh7858828104aa1fbp16c2d9jsn16ade6057027",
            "useQueryString":true
            },"params":{
            "lunit":"mi",
            "currency":"USD",
            "limit":"10",
            "distance":"25",
            "lang":"en_US",
            "longitude":"-81.3790304",
            "latitude":"28.5421109"
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
                <Card className="attractions-card">
                <Image src={castle} height="200px" width="280px" />
                    <Card.Header as="h4">Atrractions and Things to do</Card.Header>
                    <Card.Body>
                        <Card.Title>Pick an activity to do, location and price</Card.Title>
                        <Card.Text>
                            {this.state.posts.map(post =>

                                <div key={post.location_id} onClick={this.onclick}>  {post.location} | {post.name} | {post.ranking_subcategory}
                                </div>

                            )}
                        </Card.Text>
                    </Card.Body>
                </Card>

            </div>
        );
    }
}

export default Attractions




















