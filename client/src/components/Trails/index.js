import React from "react";
const axios = require("axios")

class Trails extends React.Component {

    state = {
        posts: []
    }

    async componentDidMount() {
        axios({
            "method":"GET",
            "url":"https://trailapi-trailapi.p.rapidapi.com/trails/explore/",
            "headers":{
            "content-type":"application/octet-stream",
            "x-rapidapi-host":"trailapi-trailapi.p.rapidapi.com",
            "x-rapidapi-key":"e60eeecd26msh7858828104aa1fbp16c2d9jsn16ade6057027",
            "useQueryString":true
            },"params":{
            "radius":"20",
            "lat":"28.5421109",
            "lon":"-81.3790304"
            }
            })
            .then((response)=>{
              console.log(response.data.data)
              this.setState({ posts: response.data.data})
            })
            .catch((error)=>{
              console.log(error)
            })
    }
    render() {
        return (
            <div>
               {this.state.posts.map(post =>
               <div key={post.location_id} >{post.name}{post.city}{post.description}</div>
                )}
            </div>
        )
    }
}

export default Trails