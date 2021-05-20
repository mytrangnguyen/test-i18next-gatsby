import styled from 'styled-components';

const WrapContainerStyles = styled.div`
  // box-sizing: content-box;
  // margin-left: auto;
  // margin-right: auto;
  // max-width: 1000px;
  // padding-left: 30px;
  // padding-right: 30px;
  width: 1000%;
  position: relative;
  // width: calc(100% - 60px);

  @media only screen and (max-width: 425px) {
    width: calc(100% - 60px);
    padding-left: 20px;
    padding-right: 20px;
  }
`;

export default WrapContainerStyles;
