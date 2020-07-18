import React from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import { geolocated } from "react-geolocated";
import "./MapPage.css";

const DEFAULT_LONGITUDE = -123;
const DEFAULT_LATITUDE = 48;

class MapPage extends React.Component {
  render() {
    const latitude = this.props.coords
      ? this.props.coords.latitude
      : DEFAULT_LATITUDE;

    const longitude = this.props.coords
      ? this.props.coords.longitude
      : DEFAULT_LONGITUDE;

    return (
      <Map center={[latitude, longitude]} zoom={16}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {!this.props.coords ? (
          <div className="loading">Loading</div>
        ) : (
          <Marker position={[latitude, longitude]}>
              <Popup>You are here!</Popup>
          </Marker>
        )}
      </Map>
    );
  }
}

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: 5000,
})(MapPage);
