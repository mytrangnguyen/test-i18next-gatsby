import styled from 'styled-components';

export const ContactUsBannerStyles = styled.div`
  .size-1001 {
    max-width: 1001px;
    position: relative;
    right: 35%;
    bottom: 120px;
  }

  .content-container {
    background: rgb(0 0 0 / 75%);
    border-radius: 10px;
    width: 53%;
    height: 247px;
    padding: 30px 0;

    .content {
      margin-left: 40px;
    }

    p {
      margin: 0;
      color: #ffffff;
      font-weight: bold;
      font-size: 32px;
    }

    .message-us-btn {
      background: #0084d0;
      border-radius: 10px;
      color: #ffffff;
      font-weight: bold;
      font-size: 20px;
      width: 163px;
      height: 56px;
      margin-top: 20px;
      border: none;
    }
  }

  @media only screen and (max-width: 992px) {
    .size-1001 {
      width: 100%;
      margin: 0;
    }

    .content-container {
      width: 53%;
      margin-left: 7%;
      position: absolute;
      right: 20%;
    }
  }

  @media (max-width: 576px) {
    .content-container {
      width: 100%;
      margin-left: 0;
    }
  }
`;

export const MyMarkerStyles = styled.div`
  width: 31px;
  height: 31px;
  background: #ffffff;
  border-radius: 50%;

  .blue-dot {
    position: relative;
    top: 7px;
    left: 7px;
    background: #005483;
    width: 17px;
    height: 17px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    border-radius: 50%;
  }
`;
