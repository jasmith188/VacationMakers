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
            "x-rapidapi-key":"171c3c8117mshbf6d7c09e712895p1c58b7jsnd365c766c8b8",
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
                                <li key={post.location_id}>{post.name}{post.ranking}</li>
                            )}
                        </ul>
                    </div>

                </div>

            </div>
        );
    }
}

export default AttractionsAPI