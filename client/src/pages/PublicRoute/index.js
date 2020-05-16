import React from 'react';
import axios from 'axios';

class PublicRoute extends React.Component {
  state = {
    posts: []
  }

  componentDidMount() {
    axios({
        "method":"GET",
        "url":"https://tripadvisor1.p.rapidapi.com/locations/auto-complete",
        "headers":{
        "content-type":"application/octet-stream",
        "x-rapidapi-host":"tripadvisor1.p.rapidapi.com",
        "x-rapidapi-key":"e60eeecd26msh7858828104aa1fbp16c2d9jsn16ade6057027",
        "useQueryString":true
        },"params":{
        "lang":"en_US",
        "units":"km",
        "query":"orlando"
        }
        })
        .then((response)=>{
          console.log(response)
        })
        .catch((error)=>{
          console.log(error)
        })
  }

  render() {
    return (
      <div>
        <h1>{`/locations/${this.props.tripadvisor}`}</h1>
        <ul>
          {this.state.posts.map(post =>
            <li key={post.id}>{post.title}</li>
          )}
        </ul>
      </div>
    );
  }
}

export default PublicRoute