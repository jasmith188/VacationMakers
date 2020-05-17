import React from 'react';
import axios from 'axios';

class FlightAPI extends React.Component {
    state = {
        posts: []
    }

    componentDidMount() {
        axios({
            "method": "GET",
            "url": "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/USD/en-US/SFO-sky/JFK-sky/2020-09-01",
            "headers": {
                "content-type": "application/octet-stream",
                "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
                "x-rapidapi-key": "e60eeecd26msh7858828104aa1fbp16c2d9jsn16ade6057027",
                "useQueryString": true
            }, "params": {
                "inboundpartialdate": "2020-12-01"
            }
        })
            .then((response) => {
                console.log(response.data.Carriers[0].Name)
                this.setState({ posts: response.data })
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
                                <li id={post.id}>  /></li>
                            )}
                        </ul>
                    </div>

                </div>

            </div>
        );
    }

}

export default FlightAPI