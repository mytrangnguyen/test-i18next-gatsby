import React from "react";
import { Col } from "antd";
import { useTranslation } from "gatsby-plugin-react-i18next";
import Phone from "images/phone.svg";
import { ContactSectionStyles } from "./styles";

const Contact = () => {
  const { t } = useTranslation();
  return (
    <ContactSectionStyles className="contact">
      <Col md={12} lg={12} sm={16} xs={12} className="contact-content-item">
        <Col md={16} lg={20} sm={16} xs={16} className="right-contact">
          <div className="address">
            <div className="icon-footer">
              <span>{t("contact.address")}</span>
            </div>
            <div className="address-content">
              <span>{t("contact.contactPhoneContent")}</span>
            </div>
          </div>
        </Col>
      </Col>
    </ContactSectionStyles>
  );
};

export default Contact;
