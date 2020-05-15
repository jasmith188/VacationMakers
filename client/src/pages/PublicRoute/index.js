import React from 'react'
// import { Container, Header, Divider, Embed, } from "semantic-ui-react";
// import OurLoader from "../../components/Loader/index";


/* This is a very simple component.. it probably doesn't need to be a smart component at this point but you never know what's goingto happen in the future */

class PublicRoute extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
        };
    }
    componentDidMount() {
        fetch("https://tripadvisor1.p.rapidapi.com/locations/search?location_id=1&limit=30&sort=relevance&offset=0&lang=en_US&currency=USD&units=mi&query=orlando", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "tripadvisor1.p.rapidapi.com",
                "x-rapidapi-key": "171c3c8117mshbf6d7c09e712895p1c58b7jsnd365c766c8b8"
            }
        })
            .then(function (response) { return response.json() })
            .then(data => console.log(data))
            .catch(err => {
                console.log(err);
            });
    }

    create(e) {
        // add entity - POST
        e.preventDefault();
    }
    update(e) {
        // update entity - PUT
        e.preventDefault();
    }
    delete(e) {
        // delete entity - DELETE
        e.preventDefault();
    }
    handleChange(changeObject) {
        this.setState(changeObject)
    }


    render() {
        return (
            <div>
                <h1>This is a view created by a class component</h1>
            </div>
        );
    }
}

export default PublicRoute