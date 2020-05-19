import React from 'react';
// import axios from 'axios';
import postData from "./data"

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

export default Attractions