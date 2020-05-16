import React from 'react';
import axios from 'axios';

class HotelAPI extends React.Component {
    state = {
        posts: []
    }

    componentDidMount() {
        axios({
            "method": "GET",
            "url": "https://tripadvisor1.p.rapidapi.com/hotels/list",
            "headers": {
                "content-type": "application/octet-stream",
                "x-rapidapi-host": "tripadvisor1.p.rapidapi.com",
                "x-rapidapi-key": "171c3c8117mshbf6d7c09e712895p1c58b7jsnd365c766c8b8",
                "useQueryString": true
            }, "params": {
                "offset": "0",
                "currency": "USD",
                "limit": "30",
                "order": "asc",
                "lang": "en_US",
                "sort": "recommended",
                "nights": "2",
                "location_id": "293919",
                "adults": "1",
                "rooms": "1"
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
                {/* <h1>{`/locations/${this.props.tripadvisor}`}</h1> */}
                <ul>
                    {this.state.posts.map(post =>
                        <li key={post.location_id}>{post.name} <img src={post.photo.images.thumbnail.url} /></li>
                    )}
                </ul>
            </div>
        );
    }
}

export default HotelAPI