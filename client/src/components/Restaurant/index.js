import React from 'react';
import axios from 'axios';
import postData from "./data";

class Restaurant extends React.Component {
    state = {
        posts: postData
        
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
                <div className="card-body">
                    <div className="card">
                        <ul>
                            {this.state.posts.map(post =>
                                
                                <h5 key={post.location_id}>{post.location} | {post.name} | ${post.price}  </h5>
                                // <img src= {post.photo.images.small.url }alt=""></img>
                                
                            )}
                        </ul>
                    </div>

                </div>

            </div>
        );
    }
}

export default Restaurant
