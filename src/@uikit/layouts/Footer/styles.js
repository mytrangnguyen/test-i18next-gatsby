import styled from "styled-components";

export const FooterStyles = styled.div`

  // background: ${({ theme }) => theme.footer.background};
  color: ${({ theme }) => theme.footer.text};
  a {
    color: ${({ theme }) => theme.footer.text};
    font-size: 14px;
  }

  .contact {
    display: flex;
  }
  .right-contact {
    padding-right: 40px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  .contact-content-item {
    width: 100%;
    display: flex;
  }

  .content-contact {
    margin-top: 35px;
    width: 100%;
  }

  .divider-footer {
    width: 58px;
    height: 1px;
    background: #ffffff;
    margin-top: 18px;
    margin-left: -1px;
  }

  .icon-contact {
    width: 36px;
    height: 36px;
  }

  .ant-layout-footer {
    padding: 26px 0 !important;
  }
  
  .icon-footer {
    display: flex;
    .contact-divider {
    }
  }

  .section-footer {
    position: relative;
    margin: 0px;
    padding: 0px;
    width: 100%;
    height: 400px;
    overflow: hidden;
  }

  #wave-footer {
    position: absolute;
    bottom: 0;
    width: 100%;
  }

  .mainFooter {
    background: ${({ theme }) => theme.footer.background};
    transition: all 0.5s linear;
    color: ${({ theme }) => theme.footer.text};
  }
  .title {
    font-size: 18px;
    line-height: 35px;
    font-weight: 800;
    color: ${({ theme }) => theme.footer.text};
  }
  .salon-title {
    margin-bottom: 20px;
  }

  .sub-title-item-footer:not(:last-child) {
    margin-bottom: 10px;
  }
  .btn {
    margin-left: 30px;
    border-radius: 20px;
    border: 1.5px solid #1b1b1b;
    box-sizing: border-box;
    filter: drop-shadow(1px 2px 4px rgba(0, 0, 0, 0.25));
    border-radius: 20px;
    box-shadow: none;
    &:hover {
      color: ${({ theme }) => theme.footer.text};
      box-shadow: 2px 1px 4px 1px rgba(232, 80, 91, 0.45);
    }
  }
  @media only screen and (min-width: 1200px) {
    .content-contact {
      margin-top: 265px; !important;
    }
    
  }

  @media only screen and (max-width: 1200px) {
    .content-contact {
      margin-top: 263px !important;
    }
    #wave-footer {
      width: 120%;
      left: -20%;
    }
  }

  @media only screen and (max-width: 992px) {
    #wave-footer {
      width: 143%;
      left: -43%;
    }
  }

  @media only screen and (max-width: 768px) {
    #wave-footer {
      width: 188%;
      left: -88%;
    }
  }

  @media only screen and (max-width: 576px) {
    #wave-footer {
      width: 250%;
      left: -150%;
    }
    .right-contact {
      padding-right: 30px;
    }
    .box-contact-content {
      width: 230px !important;
    }
    .box-contact{
      .icon-footer {
        margin-right: -10px;
      }
    }
   
  }

  @media only screen and (max-width: 375px) {
    #wave-footer {
      width: 307%;
      left: -207%;
    }
    .right-contact {
      padding-right: 30px;
    }
    .box-contact-content {
      width: 230px !important;
    }
    .icon-footer:last-child {
      margin-right: -10px;
    }
    
  }


  .address {
    margin-bottom: 20px;
    display: flex
  }
  .address-content, .box-contact-content {
    margin-left: 35px;
    width: 220px;
    text-align: right;
    span  {
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      text-align: right;
      color: #FFFFFF;
    }
    .bold-info {
      font-weight: bold;
      font-size: 16px;
      line-height: 19px;
      text-align: right;
      letter-spacing: 0.02em;
      color: #FFFFFF;
    }
  }
  .box-contact {
    border-radius: 10px;
    display: flex;
    align-items: center;
    &:not(:last-child) {
      margin-bottom: 5px;
    }
  .btnSignUp {
    margin-left: 15px;
  }

  .list-icon {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 103px;
    a {
      display: block;
    }
    .anticon {
      font-size: 22px;
    }
  }

  .menuItem {
    color: ${({ theme }) => theme.footer.text};
    padding: 0px 10px;
    &.active {
      font-weight: 500;
    }
  }

  .menuIcon {
    display: none;
    cursor: pointer;
    width: 30px;
    &:hover {
      transform: scale(1.1);
    }
  }
  .mobile-logo {
    display: none;
  }

`;
export const FooterMenuStyle = styled.div`
  .title {
    font-size: 18px;
    line-height: 35px;
    font-weight: 800;
    color: ${({ theme }) => theme.footer.text};
  }
  .salon-title {
    margin-bottom: 20px;
  }
  color: ${({ theme }) => theme.footer.text};
  a {
    color: ${({ theme }) => theme.footer.text};
    font-size: 14px;
  }
  .footerSection {
    padding-bottom: 30px;
  }
  .title {
    font-size: 18px;
    line-height: 35px;
    font-weight: 800;
    color: ${({ theme }) => theme.footer.text};
  }
  .salon-title {
    margin-bottom: 20px;
  }

  .sub-title-item-footer:not(:last-child) {
    margin-bottom: 10px;
  }

  .menuItem {
    color: ${({ theme }) => theme.footer.text};
    padding: 0px 10px;
    &.active {
      font-weight: 500;
    }
  }

  .menuIcon {
    display: none;
    cursor: pointer;
    width: 30px;
    &:hover {
      transform: scale(1.1);
    }
  }
`;

export const ContactSectionStyles = styled.div`
  .address {
    margin-bottom: 20px;
    display: flex;
  }
  .address-content,
  .box-contact-content {
    margin-left: 35px;
    width: 220px;
    text-align: right;
    span {
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      text-align: right;
      color: #ffffff;
    }
    .bold-info {
      font-weight: bold;
      font-size: 16px;
      line-height: 19px;
      text-align: right;
      letter-spacing: 0.02em;
      color: #ffffff;
    }
  }
  .box-contact {
    border-radius: 10px;
    // background: rgba(246, 246, 246, 0.1);
    display: flex;
    align-items: center;
    &:not(:last-child) {
      margin-bottom: 5px;
    }
    .anticon {
      margin-right: 15px;
      color: ${({ theme }) => theme.palette.primary};
    }
  }

  @media only screen and (max-width: 425px) {
    .box-contact {
      // padding: 10px 10px;
    }
  }

  @media (max-width: 520px) {
    .ant-layout-footer {
      padding: 24px 10px;
    }
  }
`;
