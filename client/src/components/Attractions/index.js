import React from 'react';
// import axios from 'axios';
import Card from 'react-bootstrap/Card'
import postData from "./data"
import "./index.css"
import Image from 'react-bootstrap/Image'
import castle from "../../images/castle.jpg"
import attraction from "../../images/attraction.jpg"

class Attractions extends React.Component {
    state = {
        posts: postData
    }

    componentDidMount() {
        // axios({
        //     "method":"GET",
        //     "url":"https://tripadvisor1.p.rapidapi.com/attractions/list",
        //     "headers":{
        //     "content-type":"application/octet-stream",
        //     "x-rapidapi-host":"tripadvisor1.p.rapidapi.com",
        //     "x-rapidapi-key":"e60eeecd26msh7858828104aa1fbp16c2d9jsn16ade6057027",
        //     "useQueryString":true
        //     },"params":{
        //     "lang":"en_US",
        //     "currency":"USD",
        //     "sort":"recommended",
        //     "lunit":"km",
        //     "location_id":"<required>"
        //     }
        //     })
        //     .then((response) => {
        //         //   console.log(response.data.data)
        //         //   let lodging = response.data.data.filter((data)=> {
        //         //       return data.result_type === "lodging";
        //         //   })

        //         console.log(response.data.data)
        //         this.setState({ posts: response.data.data })

        //     })
        //     .catch((error) => {
        //         console.log(error)
        //     })
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

                                <div key={post.location_id} onClick={this.onclick}>  {post.location} | {post.name} | ${post.price}
                                </div>

                            )}
                        </Card.Text>
                    </Card.Body>
                    <Image className="bottom-image" src={attraction} height="200px" width="280px" />
                </Card>

            </div>
        );
    }
}

export default Attractions




















