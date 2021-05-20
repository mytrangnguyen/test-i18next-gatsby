import { createGlobalStyle } from 'styled-components';

const AntOverwriteStyle = createGlobalStyle`
  div::-webkit-scrollbar-thumb {
    border-radius: 3px !important;
    background: ${({ theme }) => theme.scrollbar.thumb} !important;
  }
  div::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.scrollbar.track} !important;
  }
  div::-webkit-scrollbar-thumb:hover {
    border-radius: 3px !important;
    background: ${({ theme }) => theme.scrollbar.thumb} !important;
  }
  div::-webkit-scrollbar {
    width: 6px;
    height: 6px;
    background: ${({ theme }) => theme.scrollbar.track} !important;
  }

  .loading {
    .ant-modal-content {
      background-color: transparent;
      box-shadow: none;
    }
  }
  .ant-slider-track {
    background-color: ${({ theme }) => theme.palette.primary};
  }
  .ant-slider-handle {
    border-color: ${({ theme }) => theme.palette.primary};
  }
  .ant-slider-rail {
    background-color: #e1e1e1 !important;
    height: 5px;
  }
  .ant-slider-handle {
    width: 20px;
    height: 20px;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.palette.primary};
    border-color: ${({ theme }) => theme.palette.primary};
    transform: translate(-50%,-2px) !important;
  }

  @keyframes slideFromBottom {
    from {
      transform: translate(0px,100vh);
    }
    to {
      transform: translate(0px,0px);
    }
  }

  @keyframes noAnim {
    from {
    }
    to {
    }
  }

  @keyframes slideFromTopToBottom {
    from {
      transform: translate(0px,0px);
    }
    to {
      transform: translate(0px,100vh);
    }
  }

  @media (max-width: 768px) {
    .ant-dropdown {
      border-radius: 0px !important;
      top:0px !important;
      left:0px !important;
      right:0px !important;
      bottom:0px !important;
      z-index: 999;
      position:fixed;
      animation-name: slideFromBottom !important;
      animation-duration: 0.3s;
      animation-delay: 0s;
      transform: translate(0px,0px);
      transition: transform 0.3s;
      & >div {
        height:100vh;
        border-radius: 0px !important;
      }
      &.ant-slide-up-enter,&.ant-slide-up-leave-enter {
      animation-name: noAnim !important;
      }
      &.ant-slide-up-leave,&.ant-slide-up-leave-active {
      animation-name: noAnim !important;
      }
    }
    .ant-dropdown-hidden {
      transform: translate(0px,100vh);
      display:block !important;
      animation-name: slideFromTopToBottom !important;
    }
  }
  .ant-modal-header {
    border-bottom: 0px;
    .ant-modal-title {
      font-size:24px;
      font-weight: bold;
    }
  }
  .ant-form-item-label {
    font-weight: bold;
    font-size: 14px;
  }
`;

export default AntOverwriteStyle;
