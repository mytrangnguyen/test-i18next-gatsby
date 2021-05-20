import { createGlobalStyle } from "styled-components"
import { CSS_RESET, CSS_COMMON } from "utils/css"
import theme from "./theme.json"

const GlobalStyle = createGlobalStyle`
${CSS_RESET}
${CSS_COMMON}
  html {
    scroll-behavior: smooth;
  }
  div {
    scroll-behavior: smooth;
  }
  body {
    scroll-behavior: smooth;
  }
  .ant-layout,.ant-layout-content {
    max-width: 100vw;
    overflow-x: hidden;
  }
  body {
    color: #1B1B1B;
    padding:0px;
    margin:0px;
  }

  * {
    font-family: 'Myriad Pro';
    letter-spacing: 0.6px;
  }

  b, strong {
    font-weight: 600;
  }
  a {
    color: #000;
    & :hover {
      color: ${theme.palette.primary};
    }
  }
  .title {
    line-height: 1em;
    &.salon-title {
      letter-spacing: 0;
    }
  }

  .txt-center {
    text-align:center;
  }

  .description {
    font-size: 20px;
  }

  button {
    font-family: Quicksand;
  }

  .ant-drawer-header {
    border: none;
  }
  .ant-drawer-title {
    text-align:center;
  }

  .salon-title {
    font-family: Quicksand;
    font-weight: 500;
    font-size: 30px;
    * {
      font-family: Quicksand;
    }
  }

  .description, .feature-text, .title {
    p {
      margin-bottom: 0;
    }
  }
  .feature-text {
    padding-bottom: 1em;
  }
  .sub-title {
    p {
      margin-bottom: 0;
    }
    img {
      width: 100%;
      object-fit: contain;
    }
    iframe {
      height: 400px;
      width: 100%;
    }
  }

  button {
    font-family: Quicksand;
  }

  .title, .sub-title {
    color: black;
  }

  .sub-title {
    font-weight: 400;
  }

  .zesttee-text {
    color: ${theme.palette.primary};
  }

  .title-underline {
    border-bottom: 3px solid ${theme.palette.primary};
  }

  .container {
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
  }

  .reverse {
    flex-direction: row-reverse;
  }
  .radio-group{
    width: 100%;
    .radio {
      display: flex;
      align-items: center;
      flex-flow: row-reverse;
      justify-content: space-between;
    }
  }
  .bold {
    font-weight: 600;
  }

  #checkout-3ds-modal {
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    z-index: 99;
    background: white;
    position: fixed;
  }

  .ant-drawer-header {
    .ant-drawer-title {
      text-transform: uppercase;
      font-weight: 700;
      font-size: 22px;
    }
  }

  .ant-drawer-body {
    padding: 10px 0;
    .drawer-title-item {
      padding: 10px 24px;
      font-weight: 700;
    }
    .menu-item {
      margin: 0;
      padding: 10px 24px;
    }
  }

  @media (min-width: 576px) {
    .container {
      max-width: 540px;
    }
    .page {
      .content {
        min-height: 300px;
      }
    }
  }

  @media (max-width: 768px) {
    .container {
      max-width: 720px;
    }
  }

  @media (max-width: 992px) {
    .container {
      max-width: 960px;
    }
  }

  @media (max-width: 1200px) {
    .container {
      max-width: 1140px;
    }
  }
  @media (min-width: 1201px) {
    .container {
      max-width: 1140px;
    }
  }
  .ant-form-item-label > label.ant-form-item-required:not(.ant-form-item-required-mark-optional)::after {
    display: inline-block;
    margin-right: 4px;
    color: #ff4d4f;
    font-size: 14px;
    font-family: SimSun, sans-serif;
    line-height: 1;
    content: '*';
  }
  .ant-form-item-label > label.ant-form-item-required:not(.ant-form-item-required-mark-optional)::before {
    display: none;
  }
  .brand-name {
    font-family: Quicksand;
    font-style: normal;
    font-weight: 500;
    font-size: 28px;
    line-height: 35px;
    /* identical to box height */
    color: #1B1B1B;
  }

  .highlight {
    color: ${({ theme }) => theme.palette.primary};
  }

  .description {
    font-size: 14px;
    color: ${({ theme }) => theme.text.description};
  }

`

export default GlobalStyle
