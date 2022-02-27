import React from 'react';
import {MapContainer, TileLayer} from "react-leaflet";
import 'leaflet/dist/leaflet.css';

const center = [-7.966191787069085, 112.610438311038];

export default function OpenMap() {
  return (
    <MapContainer
    center={center}
    zoom={11}
    style={{width: "100%", height: "100%"}}
    >
    </MapContainer>
  )
}