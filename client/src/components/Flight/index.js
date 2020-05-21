import React from 'react';
// import axios from 'axios';
import Card from 'react-bootstrap/Card'
import postData from "./data"

class Flight extends React.Component {
    state = {
        posts: postData
    }

    componentDidMount() {
        // axios({
        //     "method": "GET",
        //     "url": "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/UK/GBP/en-GB/",
        //     "headers": {
        //         "content-type": "application/octet-stream",
        //         "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
        //         "x-rapidapi-key": "e60eeecd26msh7858828104aa1fbp16c2d9jsn16ade6057027",
        //         "useQueryString": true
        //     }, "params": {
        //         "query": "Stockholm"
        //     }
        // })

        //     .then((response) => {
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
                <Card>
                    <Card.Header as="h5">Flight</Card.Header>
                    <Card.Body>
                        <Card.Title>Pick a Flight departure, return and price</Card.Title>
                        <Card.Text>
                            {this.state.posts.map(post =>

                                <div key={post.location_id} onClick={this.onclick}>  {post.location} | {post.name} | ${post.price} {post.date}
                                </div>

                            )}
                        </Card.Text>
                    </Card.Body>
                </Card>

            </div>
        );
    }
}

export default Flight