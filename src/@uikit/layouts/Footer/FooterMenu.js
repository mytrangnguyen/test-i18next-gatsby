import React from "react";
import { Col, Row } from "antd";
import Contact from "./Contact";
import { FooterMenuStyle } from "./styles";

const FooterMenu = () => {
  return (
    <FooterMenuStyle className="footer-menu">
      <Row justify="space-between">
        <section>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            // width="1280"
            // height="201"
            id="wave"
            viewBox="0 0 1280 201"
            fill="none"
          >
            <path
              opacity="0.7"
              d="M0.0600195 107.475C0.0600195 107.475 225.995 167.471 434.624 140.365C473.363 135.339 460.447 141.732 712.264 78.2346C811.885 58.5638 1021.66 9.19997 1279.63 28.3888V201H0.0599365L0.0600195 107.475Z"
              fill="#078E8C"
            />
            <path
              d="M-0.289917 108.96C-0.289917 108.96 225.645 186.591 434.275 151.548C473.013 145.046 460.097 153.328 711.914 71.1039C811.535 45.6696 1021.53 -18.2112 1279.5 6.63296"
              stroke="#E84267"
              strokeMiterlimit="10"
            />
            <path
              d="M-0.0799561 107.2C-0.0799561 107.2 225.855 166.95 434.484 139.981C473.223 134.975 460.317 141.348 712.124 78.0182C811.765 58.4851 1021.7 9.30815 1279.71 28.438"
              stroke="#E84267"
              strokeMiterlimit="10"
            />
          </svg>
        </section>
        <Col xl={24} className="content-contact">
          {/* <div className="contact-content"> */}
          <Col
            className="footerSection"
            key="contact-section"
            md={24}
            lg={24}
            sm={24}
            xs={24}
          >
            <Contact />
          </Col>
          {/* </div> */}
        </Col>
      </Row>
    </FooterMenuStyle>
  );
};
FooterMenu.propTypes = {};

export default FooterMenu;
