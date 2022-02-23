import 'mapbox-gl/dist/mapbox-gl.css';
import { useState } from 'react';
import ReactMapGL from 'react-map-gl';

export default function Map() {

  const [viewport, setViewport] = useState({
      width: '100%',
      height: '100%',
      latitude: -8.65005329672947,
      longitude: 115.1503028125758,
      zoom: 11,
  });

  return (
    <ReactMapGL
    mapStyle='mapbox://styles/diydiyydiyyy/ckzz01f33002815oiq1uxejcn'
    mapboxApiAccessToken={process.env.mapbox_key}
    {...viewport}
    onViewportChange={setViewport}
    ></ReactMapGL>
  )
}