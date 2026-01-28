

import React from "react";
import "./DigitalCard.css";

const DigitalCard = ({
  themeColor,
  name,
  designation,
  phone1,
  phone2,
  address,
  email1,
  email2,
  website,
  logo,
  qrCode,
  footerImage
}) => {
  return (
    <div className="card" style={{ borderColor: themeColor }}>

     
      <div className="card-body">

        <div
          className="left"
          style={{
            background: `linear-gradient(180deg, ${themeColor}, #1b5e20)`
          }}
        >
          <img src={logo} alt="Logo" className="logo" />
          <img src={qrCode} alt="QR Code" className="qr" />
        </div>

    
        <div className="right">
          <h2>{name}</h2>
          <p className="designation">{designation}</p>

          <div className="info">
            <div className="row">
              <span className="icon" style={{ backgroundColor: themeColor }}>
                <i className="fa-solid fa-phone"></i>
              </span>
              <span>{phone1}</span>
            </div>

            <div className="row">
              <span className="icon" style={{ backgroundColor: themeColor }}>
                <i className="fa-solid fa-phone"></i>
              </span>
              <span>{phone2}</span>
            </div>

            <div className="row">
              <span className="icon" style={{ backgroundColor: themeColor }}>
                <i className="fa-solid fa-map-pin"></i>
              </span>
              <span>{address}</span>
            </div>

            <div className="row">
              <span className="icon" style={{ backgroundColor: themeColor }}>
                <i className="fa-solid fa-envelope"></i>
              </span>
              <span>{email1}</span>
            </div>

            <div className="row">
              <span className="icon" style={{ backgroundColor: themeColor }}>
                <i className="fa-solid fa-envelope"></i>
              </span>
              <span>{email2}</span>
            </div>

            <div className="row">
              <span className="icon" style={{ backgroundColor: themeColor }}>
                <i className="fa-solid fa-globe"></i>
              </span>
              <span>{website}</span>
            </div>
          </div>
        </div>
      </div>

      {footerImage && (
        <div className="footer">
          <img src={footerImage} alt="Footer" />
        </div>
      )}
    </div>
  );
};

export default DigitalCard;
