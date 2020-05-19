import React from 'react';
// import axios from 'axios';
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
                <div className="card-body">
                    <div className="card">
                        <ul>
                            {this.state.posts.map(post =>
                                <h5 key={post.location_id}>{post.location} | {post.name} | {post.date} | ${post.price}  </h5>
                            )}
                        </ul>
                    </div>

                </div>

            </div>
        );
    }
}

export default Flight