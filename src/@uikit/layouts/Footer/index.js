import React from "react";
import { Row, Col } from "antd";

import { FooterStyles } from "./styles";
import Contact from "./Contact";

const Footer = () => {
  return (
    <FooterStyles className="footer-menu">
      <Row justify="space-between">
        <div className="section-footer">
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
        </div>
      </Row>
    </FooterStyles>
  );
};
Footer.propTypes = {};

export default Footer;
