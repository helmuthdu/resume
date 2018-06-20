import React from 'react';
import { GoogleMap, Marker, withGoogleMap, withScriptjs } from 'react-google-maps';
import { connect } from 'react-redux';
import { compose, withProps } from 'recompose';

const apiKey = 'AIzaSyBUDsKbbMvYm2uGIqKmYn6lxkpPycr5KcY';
const coordinates = { lng: -47.882048, lat: -15.792571 };

export const GMaps = ({ isMarkerShown }) => (
  <GoogleMap defaultZoom={12} defaultCenter={coordinates}>
    {isMarkerShown && <Marker position={coordinates} />}
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

export default connect()(ContactMap);
