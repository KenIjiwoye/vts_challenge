import React from 'react'
import GoogleMapReact from 'google-map-react';

const Mapview = (props:any) => {
    const defaultProps: any = {
        center: {
          lat: 33.7676931,
          lng: -84.4906435
        },
        zoom: 12
      };
    return (
        <div style={{ height: '70vh', width: '100%' }}>
        <GoogleMapReact
            bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API_KEY }}
            center={ props.location ? props.location : defaultProps.center }
            defaultZoom={defaultProps.zoom}
        >
            <PlaceIcon
            lat={ props.location ? props.location.lat : defaultProps.center.lat }
            lng={ props.location ? props.location.lng : defaultProps.center.lng }
            text="My Marker"
            />
        </GoogleMapReact>
        </div>
    )
}

const PlaceIcon = (props:any) => <i className="bi bi-geo-fill" style={{ fontSize: '3em', color:'#ff0000'}} ></i>

export default Mapview
