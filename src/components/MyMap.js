import React from "react";
import { MapContainer, TileLayer } from 'react-leaflet'
import Markpos from './Markpos';
import '../App.css'


const MyMap = (props) => {
    return (
        <div className="map">
            {props.address &&
                <MapContainer center={[51.505, -0.09]} zoom={7} scrollWheelZoom={true}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Markpos address = {props.address}/>
                </MapContainer>
            }
        </div>
    )
}

export default MyMap;