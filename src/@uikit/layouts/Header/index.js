import React from "react";
import { Col } from "antd";
import logo from "images/Logo.svg";
import supportChat from "images/supportChat.svg";
import PhoneNumberIcon from "images/ic-phone-number.svg";
import WrapHeaderStyles from "./styles";

const Header = () => {
  return (
    <div>
      <WrapHeaderStyles>
        <header/>
      </WrapHeaderStyles>
      <div className="divide" />
    </div>
  );
};
Header.propTypes = {};

export default Header;
