import styled from "styled-components"
import { Modal } from "antd"

const ReadMoreStyles = styled.div`
  .read-more__button {
    display: inline;
    background-color: transparent;
    outline: none;
    border: 0;
    padding: 0;
    margin: 0;
    cursor: pointer;
    color: ${({ theme }) => theme.palette.primary};
    font-size: inherit;
    font-weight: bold;
    text-decoration: underline;
  }

  .read-more__button:hover {
    text-decoration: underline;
  }

  .read-more__text--hide {
    max-height: 0;
    font-size: 0;
    opacity: 0;
    display: none;
  }

  .read-more__text--show {
    max-height: 10em;
    opacity: 1;
    font-size: inherit;
  }

  .read-more__text--remaining {
    transition: opacity 240ms ease;
  }
`

export default ReadMoreStyles

export const ModalShowAllStyles = styled(Modal)`
  .ant-modal-header {
    padding: 0;
    margin: 16px 24px;
  }

  .ant-modal-body {
    padding: 0;
    margin: 24px;
  }
`
