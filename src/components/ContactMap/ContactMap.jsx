import { GoogleMap, Marker, withGoogleMap, withScriptjs } from 'react-google-maps';
import { compose, withProps } from 'recompose';

const apiKey = 'AIzaSyA2xs-b0kwEebBXrPR6hko3Rb5nzF9hPqA';
const coordinates = { lng: 13.404842, lat: 52.520032 };

export const GMaps = () => (
  <GoogleMap defaultZoom={12} defaultCenter={coordinates}>
    {<Marker position={coordinates} />}
  </GoogleMap>
);

export const ContactMap = compose(
  withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${apiKey}&v=3.exp&libraries=geometry,drawing,places`,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => <GMaps {...props} />);

export default ContactMap;
