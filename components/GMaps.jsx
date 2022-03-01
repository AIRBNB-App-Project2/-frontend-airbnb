import {GoogleMap, withScriptjs, withGoogleMap} from "react-google-maps";

function Map() {
  return (
    <GoogleMap
    defaultZoom={10}
    defaultCenter={{lat: -8.65005329672947, lng: 115.1503028125758}}
    />
  );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default function GMaps() {
  return (
    <div>
      <WrappedMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.gmaps_key}`}
        loadingElement={<div style={{ height: `100%`, width:"624px" }} />}
        containerElement={<div style={{ height: `100%`, width:"624px" }} />}
        mapElement={<div style={{ height: `100%`, width:"624px" }} />}
      />
    </div>
  )
}