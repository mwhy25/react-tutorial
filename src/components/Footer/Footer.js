import { Typography } from "@material-ui/core";
import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_left">
        <Typography className="footer_name"></Typography>
      </div>
      <div className="footer_right">
        <Typography className="footer_copyright">
          Design and Developed by{" "}
          <a href="/" target="_blank">
            Muhammad Wahyu
          </a>
          .
          <br />
        </Typography>
      </div>
    </div>
  );
};

export default Footer;
