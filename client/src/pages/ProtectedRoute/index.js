import React, { useEffect, useContext } from 'react'
import Card from "../../components/Card"
import { UserContext } from "../../utils/UserContext";



/* This is a very simple component.. it probably doesn't need to be a smart component at this point but you never know what's goingto happen in the future */

function ProtectedRoute() {

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

    return (
        <div className="container">
            <div className="alert alert-success" role="alert">
                Success, You are logged in
				</div>
            <Card title="Welcome.">
                <p>You are logged in.</p>
            </Card>
            <div className="row">
                <div className="col-lg-4">
                    <div className="chat-popup" id="myForm">
                        <form action="/action_page.php" class="form-container">
                            <h1>Chat</h1>

                            <label for="msg"><b>Message</b></label>
                            <textarea placeholder="Type message.." name="msg" required></textarea>

                            <button type="submit" class="btn">Send</button>
                            <button type="button" class="btn cancel" onclick="closeForm()">Close</button>
                        </form>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div id="kayakSearchWidgetContainer"></div>
                </div>

                <div className="col-lg-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Itinerary</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4">
                    <div className="card">
                        <div className="card-body">the spot
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="card">
                        <div className="card-body">this is a spot
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="card">
                        <div className="card-body">hello
                        </div>
                    </div>
                </div>
            </div>
           
    
</div>

    )

}

export default ProtectedRoute