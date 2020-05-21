import React, { useEffect, useContext, useState } from 'react'
import "../ProtectedRoute/protected.css"
import Card from "../../components/Card"
import { UserContext } from "../../utils/UserContext";
import Hotel from "../../components/Hotel/index";
import Restaurant from "../../components/Restaurant"
import Attractions from "../../components/Attractions"
import Flight from "../../components/Flight"
import Budget from "../../components/Budget"
import "../ProtectedRoute/protected.css"



/* This is a very simple component.. it probably doesn't need to be a smart component at this point but you never know what's goingto happen in the future */

function ProtectedRoute() {
    const [restaurant, setRestaurant] = useState("");

    const [user, dispatch] = useContext(UserContext)
    console.log(user)

    useEffect(() => {
        fetch('api/users/user', {
            credentials: 'include'
        })
            .then((res) => {
                console.log(`response to authenticate ${res}`);
                return res.json(res)

            })
            .then(data => {
                console.log(data);
                dispatch({
                    type: "GET_USER",
                    payload: data
                })

            })
            .catch((err) => {
                console.log('Error fetching authorized user.');
            });

    }, []);

    const restaurantOnclick = (event) => {
        console.log(event.currentTarget.innerText);
      
      
        setRestaurant(event.currentTarget.innerText);
    }

    return (
        <div className="private-container">
            {/* <div className="alert alert-success" role="alert">
                Success, You are logged in
				</div> */}
            <Card title="Choose from a Category below and add it to your itinerary">
            </Card>

            <div className="container">
                <div className="row">


                    <div>
                        <Budget userAddedRestaurant={restaurant}/>
                    </div>
                </div >
                <div className="row">

                    <div className="col-lg-6">
                        <h3>Restaurants</h3>
                        <Restaurant onclick={restaurantOnclick}/>
                    </div>
                    <div className="col-lg-6">
                        <h3>Flights</h3>
                        <Flight />
                    </div>
                </div >
                <div className="row">
                    <div className="col-lg-6">
                        <h3>Attractions</h3>
                        <Attractions />
                    </div>
                    <div className="col-lg-6">
                        <h3>Hotels</h3>
                        <Hotel />
                    </div>

                </div>
                <div className="row">
                    <div>
                        <Budget />
                    </div>
                </div>
            </div>
        </div >


    )

}

export default ProtectedRoute