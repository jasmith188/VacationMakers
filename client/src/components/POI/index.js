import React from "react"

class POI extends React.Component {
    

    componentDidMount() {
        fetch("https://tripadvisor1.p.rapidapi.com/attractions/list-in-boundary?currency=USD&limit=15&lunit=mi&lang=en_US&tr_longitude=-81.46581978&tr_latitude=30.62352148&bl_longitude=-81.86132759&bl_latitude=25.26854405", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "tripadvisor1.p.rapidapi.com",
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
            <div>Thiis is data</div>
        )
    }
}

export default POI

