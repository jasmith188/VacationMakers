import React from 'react';
import postData from "./data";
import Card from 'react-bootstrap/Card'
import "./index.css"
import Image from 'react-bootstrap/Image'
import restaurant from "../../images/restaurant.jpg"
import restaurant2 from "../../images/restaurant2.jpg"

class Restaurant extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: postData

        };

        this.onclick = this.onclick.bind(this)
    }

    onclick(event) {
        this.props.onclick(event)

    }

    componentDidMount() {
        // axios({
        //     "method": "GET",
        //     "url": "https://tripadvisor1.p.rapidapi.com/restaurants/list",
        //     "headers": {
        //         "content-type": "application/octet-stream",
        //         "x-rapidapi-host": "tripadvisor1.p.rapidapi.com",
        //         "x-rapidapi-key": "e60eeecd26msh7858828104aa1fbp16c2d9jsn16ade6057027",
        //         "useQueryString": true
        //     }, "params": {
        //         "restaurant_tagcategory_standalone": "10591",
        //         "lunit": "mi",
        //         "restaurant_tagcategory": "10591",
        //         "limit": "5",
        //         "currency": "USD",
        //         "lang": "en_US",
        //         "location_id": "293919"
        //     }
        // })
        // .then((response) => {
        //       console.log(response.data.data)
        //     this.setState({ posts: response.data.data })

        // })
        // .catch((error) => {
        //     console.log(error)
        // })
    }

    render() {

        return (
            <div>
                <Card className="restaurants-card">
                <Image src={restaurant} height="200px" width="280px" />
                    <Card.Header img src="../../component/"as="h4">Restaurants</Card.Header>
                    <Card.Body>
                        <Card.Title>Choose a Restaurant location, name and price</Card.Title>
                        <Card.Text>
                            {this.state.posts.map(post =>

                                <div key={post.location_id} onClick={this.onclick}>  {post.location} | {post.name} | ${post.price}
                                </div>

                            )}
                        </Card.Text>
                    </Card.Body>
                    <Image className="bottom-image" src={restaurant2} height="200px" width="280px" />
                </Card>

            </div>
        );
    }
}

export default Restaurant


