import React from 'react';
import axios from 'axios';

class RestaurantAPI extends React.Component {
    state = {
        posts: []
    }

    componentDidMount() {
        axios({
            "method":"GET",
            "url":"https://tripadvisor1.p.rapidapi.com/restaurants/list",
            "headers":{
            "content-type":"application/octet-stream",
            "x-rapidapi-host":"tripadvisor1.p.rapidapi.com",
            "x-rapidapi-key":"e60eeecd26msh7858828104aa1fbp16c2d9jsn16ade6057027",
            "useQueryString":true
            },"params":{
            "restaurant_tagcategory_standalone":"10591",
            "lunit":"km",
            "restaurant_tagcategory":"10591",
            "limit":"30",
            "currency":"USD",
            "lang":"en_US",
            "location_id":"293919"
            }
            })
            .then((response) => {
                //   console.log(response.data.data)
                //   let lodging = response.data.data.filter((data)=> {
                //       return data.result_type === "lodging";
                //   })

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
                <div className="card-body">
                    <div className="card">
                        <ul>
                            {this.state.posts.map(post =>
                                <li key={post.location_id}>{post.name}  </li>
                            )}
                        </ul>
                    </div>

                </div>

            </div>
        );
    }
}

export default RestaurantAPI