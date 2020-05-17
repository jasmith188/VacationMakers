import React from 'react';
import axios from 'axios';

class Webcam extends React.Component {
    state = {
        posts: []
    }

    componentDidMount() {
        axios({
            "method":"GET",
            "url":"https://webcamstravel.p.rapidapi.com/webcams/list/nearby=29.2142,-81.0927,500",
            "headers":{
            "content-type":"application/octet-stream",
            "x-rapidapi-host":"webcamstravel.p.rapidapi.com",
            "x-rapidapi-key":"e60eeecd26msh7858828104aa1fbp16c2d9jsn16ade6057027",
            "useQueryString":true
            },"params":{
            "lang":"en",
            "show":"webcams:image%2Clocation"
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
                            {this.state(post =>
                                <li key={post.location_id}>{post.name} <img src={post.photo.images.thumbnail.url} /></li>
                            )}
                        </ul>
                    </div>

                </div>

            </div>
        );
    }
}

export default Webcam