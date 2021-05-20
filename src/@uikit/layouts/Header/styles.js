import styled from 'styled-components';

const WrapHeaderStyles = styled.div`
  padding: 15px 23px;
  display: flex;
  .divide {
    height: 2px;
    background: #0D8E8B;
  }
  .logo {
    width: 142px;
    height: 40px;
  }
  .left-header {
    margin-top: 5px;
  }
  .icon-message{
    width: 40px;
    height: 40px;
  }
  .phone-number-ic {
    display: none;
  }
  .phone-number {
    a{
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      color: #0D8E8B;
    }
  }
  .header-logo {
    display: flex;
    justify-content: center;
  }
  .right-header {
    display: flex;
    justify-content: flex-end;
  }
  


  @media only screen and (max-width: 576px) {
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
`;

export default WrapHeaderStyles;