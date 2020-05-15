// import React, { useEffect, useContext } from 'react'
import React from "react"
import { Header, Divider, Embed, Dropdown, Card, Container } from 'semantic-ui-react';
import { COUNTRY_OPTIONS } from "../../data/countries";
import WebcamCard from "../../components/WebcamCard";
// import Card from "../../components/Card";
import OurLoader from "../../components/Loader/index";
// import { UserContext } from "../../utils/UserContext";

/* This is a very simple component.. it probably doesn't need to be a smart component at this point but you never know what's goingto happen in the future */

class ProtectedRoute extends React.Component {
    state = {
        selectedCountry: null,
        webcams: [],
        displayWebcam: null
    }

    componentDidMount() {
        fetch('https://cors-anywhere.herokuapp.com/http://localhost:3001/api/v1/featured')
            .then(res => res.json())
            .then(webcams => this.setState({
                webcams,
                displayWebcam: webcams[Math.floor(Math.random() * webcams.length)]
            }))
    }

    // const[user, dispatch] = useContext(UserContext)
    // console.log(user)

    // useEffect(() => {
    //     fetch('api/users/user', {
    //         credentials: 'include'
    //     })
    //         .then((res) => {
    //             console.log(`response to authenticate ${res}`);
    //             return res.json(res)

    //         })
    //         .then(data => {
    //             console.log(data);
    //             dispatch({
    //                 type: "GET_USER",
    //                 payload: data
    //             })

    //         })
    //         .catch((err) => {
    //             console.log('Error fetching authorized user.');
    //         });

    // },
    render() {
        const { selectedCountry, displayWebcam } = this.state
        return (
            <div>
                <div className="alert alert-success" role="alert">
                    Success, You are logged in
				</div>
                <Card title="Welcome.">
                    <p>You are logged in.</p>
                </Card>
                <div className="row">
                    <div className="col-lg-4">
                        {displayWebcam ?
                            <div className='VideoPadding'>
                                <Embed
                                    active={true}
                                    icon='arrow circle down'
                                    url={displayWebcam.player_url}
                                />
                                <Container><a href={`/${displayWebcam.id}`}>{displayWebcam.title}</a></Container>
                            </div>
                            :
                            <OurLoader />
                        }

                        <div className="col-lg-4">

                            <div className='Search'>
                                <Header as='h3' textAlign='center'>Search a Country!</Header>
                                <Dropdown
                                    onChange={this.handleChange}
                                    placeholder='Select Country'
                                    fluid
                                    search
                                    selection
                                    value={this.state.selectedCountry}
                                    selectOnNavigation={false}
                                    options={COUNTRY_OPTIONS}
                                />
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className='Countries' >
                                <Header as='h2' icon textAlign='center'>
                                    <Header.Content>{selectedCountry === null ? 'Featured:  ' : this.getCountryName(selectedCountry)}</Header.Content>
                                </Header>
                                <Card.Group itemsPerRow={4} size='tiny' >
                                    {this.state.webcams ? this.renderWebcamCards() : <OurLoader />}
                                </Card.Group>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="chat-popup" id="myForm">
                                <form action="/action_page.php" class="form-container">
                                    <h1>Chat</h1>

                                    <label for="msg"><b>Message</b></label>
                                    <textarea placeholder="Type message.." name="msg" required></textarea>

                                    <button type="submit" class="btn">Send</button>
                                    <button type="button" class="btn cancel" onClick="closeForm()">Close</button>
                                </form>
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
            </div>
        )
    }

    getCountryName = (code) => {
        return COUNTRY_OPTIONS.find(country => country.key === code).text
      }
    
      handleChange = (e,data) => {
        this.setState({
          selectedCountry: data.value
        }, () => fetch("http://localhost:3001/api/v1/search", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accepts": "application/json"
          },
          body: JSON.stringify(this.state)
        })
        .then(res => res.json())
        .then(webcams => this.setState({webcams}))
        )
      }

      renderWebcamCards = () => {
        return this.state.webcams.map(webcam => <WebcamCard key={webcam.id} {...webcam}/>)
      }
}


export default ProtectedRoute