import React from 'react';
import axios from 'axios';

class AttractionsAPI extends React.Component {
    state = {
        posts: []
    }

    componentDidMount() {
        axios({
            "method":"GET",
            "url":"https://tripadvisor1.p.rapidapi.com/attractions/list",
            "headers":{
            "content-type":"application/octet-stream",
            "x-rapidapi-host":"tripadvisor1.p.rapidapi.com",
            "x-rapidapi-key":"e60eeecd26msh7858828104aa1fbp16c2d9jsn16ade6057027",
            "useQueryString":true
            },"params":{
            "lang":"en_US",
            "currency":"USD",
            "sort":"recommended",
            "lunit":"mi",
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
                                <li key={post.location_id}>{post.name} </li>
                            )}
                        </ul>
                    </div>

                </div>

            </div>
        );
    }
}

export default AttractionsAPI