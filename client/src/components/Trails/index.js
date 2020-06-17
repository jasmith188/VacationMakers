import React from "react"

class Trails extends React.Component {
    componentDidMount() {
        fetch("https://trailapi-trailapi.p.rapidapi.com/trails/explore/?radius=100&lat=28.5421109&lon=-81.3790304", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "trailapi-trailapi.p.rapidapi.com",
		"x-rapidapi-key": "e60eeecd26msh7858828104aa1fbp16c2d9jsn16ade6057027"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.log(err);
});
    }
render() {
    return(
        <div>Trails Data</div>
    )
}
}