import React from 'react';
// import axios from 'axios';
import Card from 'react-bootstrap/Card'
import postData from "./data"

class HotelAPI extends React.Component {
    state = {
        posts: postData
    }

    componentDidMount() {
    //     axios({
    //         "method": "GET",
    //         "url": "https://tripadvisor1.p.rapidapi.com/hotels/list",
    //         "headers": {
    //             "content-type": "application/octet-stream",
    //             "x-rapidapi-host": "tripadvisor1.p.rapidapi.com",
    //             "x-rapidapi-key": "e60eeecd26msh7858828104aa1fbp16c2d9jsn16ade6057027",
    //             "useQueryString": true
    //         }, "params": {
    //             "offset": "0",
    //             "currency": "USD",
    //             "limit": "5",
    //             "order": "asc",
    //             "lang": "en_US",
    //             "sort": "recommended",
    //             "nights": "2",
    //             "location_id": "293919",
    //             "adults": "2",
    //             "rooms": "1"
    //         }
    //     })
    //         .then((response) => {
    //             console.log(response.data.data)
    //             this.setState({ posts: response.data.data })

    //         })
    //         .catch((error) => {
    //             console.log(error)
    //         })
    }

    render() {

        return (
            <div>
                <Card>
                    <Card.Header as="h5">Hotels</Card.Header>
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