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
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
        >
            {/* <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
            /> */}
        </GoogleMapReact>
        </div>
    )
}

export default Mapview
