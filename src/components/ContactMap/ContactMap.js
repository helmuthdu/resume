import React from 'react';
import { GoogleMap, Marker, withGoogleMap, withScriptjs } from 'react-google-maps';
import { connect } from 'react-redux';
import { compose, withProps } from 'recompose';

export const ContactMap = compose(
  withProps({
    googleMapURL: 'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places',
    loadingElement: <div style={{ height: `100%` }}/>,
    containerElement: <div style={{ height: `400px` }}/>,
    mapElement: <div style={{ height: `100%` }}/>
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  <GoogleMap
    defaultZoom={12}
    defaultCenter={{ lng: -47.882048, lat: -15.792571 }}>
    {props.isMarkerShown && <Marker position={{ lng: -47.882048, lat: -15.792571 }}/>}
  </GoogleMap>
);

export default connect()(ContactMap);