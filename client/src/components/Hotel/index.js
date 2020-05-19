import React from 'react';
// import axios from 'axios';
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
                <div className="card-body">
                    <div className="card">
                        <ul>
                            {this.state.posts.map(post =>
                                <h5 key={post.location_id}>{post.location} | {post.name} | ${post.price}  </h5>
                            )}
                        </ul>
                    </div>

                </div>

            </div>
        );
    }
}

export default HotelAPI