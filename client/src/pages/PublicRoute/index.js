import React from 'react';
import "../PublicRoute/public.css";


/* This is a very simple component.. it probably doesn't need to be a smart component at this point but you never know what's goingto happen in the future */

function PublicRoute() {

    return (
        <div>
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
                    <div className="form">
                        <form class="example" action="action_page.php">
                            <input type="text" placeholder="Search.." name="search"></input>
                            <button type="submit"><i class="fa fa-search"></i></button>

                        </form>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Itinerary</h5>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>

    )
}


export default PublicRoute