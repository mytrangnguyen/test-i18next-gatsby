import styled from "styled-components";

const WrapHomeStyles = styled.div`
  height: 100%;
  background: black;
  background-size: cover;
  background-position: 50% 50%;
  background-repeat: no-repeat;

  .content-home {
    height: 365px;
  }

  .container-login {
    width: 100%;
    bottom: 0;
    position: absolute;
    .ant-input {
      width: 240px;
      height: 36px;
    }
    .ant-input:placeholder-shown {
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 20px;
      color: #333333;
    }
    button {
      background: #e84167;
      border: none;
      width: 120px;
      height: 36px;
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 16px;
      text-align: center;
      letter-spacing: 0.02em;
      color: #ffffff;
    }
  }

  .login-content,
  .login-form,
  .login {
    display: flex;
    width: 100%;
  }

  section {
    position: relative;
    margin: 0px;
    padding: 0px;
    width: 100%;
    height: 650px;
    overflow: hidden;
  }

  #wave {
    position: absolute;
    bottom: 0;
    width: 101%;
    // height: 400px;
  }

  .title-login {
    // margin-top: -15px;
    h3 {
      font-style: normal;
      font-weight: bold;
      font-size: 40px;
      line-height: 48px;
      letter-spacing: 0.02em;
      color: #ffffff;
    }
  }

  .animation-div {
    width: 100%;
    height: 408px;
  }

 
  .divider {
    background: #E84167;
    height: 4px;
    width: 55%;
    margin-top: 30px;
  }

  @media only screen and (max-width: 320px) {
    .title-login h3 {
      font-size: 19px !important;
      margin-left: 16px !important;
    }
    .login-form {
      margin-top: 38px;
    }
    .ant-form-item {
      margin-bottom: 7px;
    }
    .divider{
      margin-left: 16px;
      margin-bottom: 6px;
    }
  }

  @media only screen and (max-width: 767px) {
    section {
      svg {
        width: 158% !important;
        left: 0;
        right: 0;
        margin-left: -35%;
      }
    }
  }
  @media only screen and (max-width: 575px) {
    .title-login {
      margin-top: 20px !important;
      h3 {
        font-size: 24px !important;
        // margin-top: 65px;
        margin-left: 16px !important;
      }
      .divider{
        margin-left: 16px;
        margin-top: 20px;
      }
    }
    .ant-input {
      width: 160px !important;
    }
    section {
      svg {
        width: 177% !important;
        left: 0;
        right: 0;
        margin-left: -76%;
      }
    }
  }
  @media only screen and (min-width: 576px) {
    .title-login h3 {
      // margin-top: 70px !important;
    }
    .logo {
      width: 122px;
      height: 32px;
    }
    .phone-number-ic {
      display: block;
      width: 24px;
      height: 24px;
    }
    .phone-number {
      display: none;
    }
  }

  @media only screen and (max-width: 992px) {
    .title-login h3 {
      font-size: 28px;
      margin-top: 50px;
    }

    .ant-input {
      width: 100% !important;
    }
  }

  @media only screen and (max-width: 375px) {
    section {
      svg {
        width: 200% !important;
        left: 0;
        right: 0;
        margin-left: -98%;
      }
    }
  }
`;

export default WrapHomeStyles;
