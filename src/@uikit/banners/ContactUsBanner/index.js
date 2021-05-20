import { Button } from 'antd';
import GoogleMapReact from 'google-map-react';
import React from 'react';
import MyMarker from './MyMarker';
import { ContactUsBannerStyles } from './styles';

const ContactUsBanner = () => {
  const center = {
    lat: 40.748,
    lng: -73.946,
  };
  const zoom = 14;

  return (
    <div style={{ minHeight: '100%', height: 350, width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.GATSBY_GOOGLE_API }}
        defaultCenter={center}
        defaultZoom={zoom}
        yesIWantToUseGoogleMapApiInternals={false}
      >
        <MyMarker lat={40.74899231436546} lng={-73.93879721570343} />
        <ContactUsBannerStyles>
          <div className="size-1001">
            <div className="content-container">
              <div className="content">
                <p>Any questions?</p>
                <p>Contact us</p>
                <Button type="primary" className="message-us-btn">
                  Message us
                </Button>
              </div>
            </div>
          </div>
        </ContactUsBannerStyles>
      </GoogleMapReact>
    </div>
  );
};

export default ContactUsBanner;
