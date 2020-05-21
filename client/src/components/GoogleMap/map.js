import React, { Component } from "react";
import "./mapStyle.css";
import { Map, InfoWindow, GoogleApiWrapper, Marker } from "google-maps-react";

class GoogleMap extends Component {
    render() {
        return (
            <div className="google-map">

                <Map google={this.props.google} zoom={14}>

                    <Marker onClick={this.onMarkerClick}
                        name={'Current location'} />

                    <InfoWindow onClose={this.onInfoWindowClose}>
                        {/* <div>
                            <h1>{this.state.selectedPlace.name}</h1>
                        </div> */}
                    </InfoWindow>
                </Map>


            </div>

        )
    }
}

export default GoogleApiWrapper({
    apiKey: ("AIzaSyD9Ff1tE0-VCQ6xdBVIecM05QkaMPvHlGU")
  })(GoogleMap)