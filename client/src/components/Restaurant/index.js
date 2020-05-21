import React from 'react';
import axios from 'axios';
import postData from "./data";
import Card from 'react-bootstrap/Card'

class Restaurant extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: postData

        };

        this.onclick = this.onclick.bind(this)
    }

    onclick(event) {
        this.props.onclick(event)

    }

    componentDidMount() {
        // axios({
        //     "method": "GET",
        //     "url": "https://tripadvisor1.p.rapidapi.com/restaurants/list",
        //     "headers": {
        //         "content-type": "application/octet-stream",
        //         "x-rapidapi-host": "tripadvisor1.p.rapidapi.com",
        //         "x-rapidapi-key": "e60eeecd26msh7858828104aa1fbp16c2d9jsn16ade6057027",
        //         "useQueryString": true
        //     }, "params": {
        //         "restaurant_tagcategory_standalone": "10591",
        //         "lunit": "mi",
        //         "restaurant_tagcategory": "10591",
        //         "limit": "5",
        //         "currency": "USD",
        //         "lang": "en_US",
        //         "location_id": "293919"
        //     }
        // })
        // .then((response) => {
        //       console.log(response.data.data)
        //     this.setState({ posts: response.data.data })

        // })
        // .catch((error) => {
        //     console.log(error)
        // })
    }

    render() {

        return (
            <div>
                <Card>
                    <Card.Header as="h5">Restaurants</Card.Header>
                    <Card.Body>
                        <Card.Title>Choose a Restaurant location, name and price</Card.Title>
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

export default Restaurant


