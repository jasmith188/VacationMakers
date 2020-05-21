import React, { useEffect, useContext, useState } from 'react'
import Card from "../../components/Card"
import { UserContext } from "../../utils/UserContext";
import Hotel from "../../components/Hotel/index";
import Restaurant from "../../components/Restaurant"
import Attractions from "../../components/Attractions"
import Flight from "../../components/Flight"
import Budget from "../../components/Budget"
import Footer from "../../components/Footer"
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
        <div className="protected-container">
            <Card title="Choose From A Category Below And Add It To Your Itinerary">
            </Card>

            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        
                        <Restaurant onclick={restaurantOnclick}/>
                    </div>
                    <div className="col-lg-6">
                       
                        <Flight />
                    </div>
                </div >
                <br />
                <div className="row">
                   
                    <div className="col-lg-6">
                      
                        <Attractions />
                    </div>
                    <div className="col-lg-6">
                        
                        <Hotel />
                    </div>

                </div>
                <div className="row">
                    <div>
                        <br/>
                        <Budget />
                    </div>
                </div>
            </div>
            <Footer />
        </div >


    )

}

export default ProtectedRoute