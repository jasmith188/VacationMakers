import React from "react"
import Card from 'react-bootstrap/Card'
const axios = require("axios")

class Webcam extends React.Component {
    

        state = {
            posts: []
        }
    
    componentDidMount() {


        axios({
            "method":"GET",
            "url":"https://webcamstravel.p.rapidapi.com/webcams/list/nearby=28.5421109,-81.3790304,200",
            "headers":{
            "content-type":"application/octet-stream",
            "x-rapidapi-host":"webcamstravel.p.rapidapi.com",
            "x-rapidapi-key":"e60eeecd26msh7858828104aa1fbp16c2d9jsn16ade6057027",
            "useQueryString":true
            },"params":{
            "lang":"en",
            "show":"webcams%3Aimage%2Clocation"
            }
            })
            .then((response)=>{
              console.log(response)
              this.setState({ posts: response.data.data })
            })
            .catch((error)=>{
              console.log(error)
            })
        }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default Webcam