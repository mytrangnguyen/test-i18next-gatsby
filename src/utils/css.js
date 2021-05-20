export const toRem = (input, rootSize = 16) => {
  return `${input / rootSize}rem`
}

export const CSS_RESET = `
  html {
    box-sizing: border-box;
  }
  *,
  *::before,
  *::after {
   box-sizing: inherit;
  }
  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  pre,
  blockquote,
  figure,
  img,
  hr {
   margin: 0;
   padding: 0;
  }
  ul {
    margin: 0;
  }
  
  embed,
  iframe,
  img,
  object,
  video {
   display: block;
   max-width: 100%;
  }
  
  table {
   table-layout: fixed;
   width: 100%;
  }
  
  [hidden] {
   display: none;
  }
  
`

export const CSS_COMMON = `

  /*----------------------height----------------------*/
  .h-45 {
    height: 45px;
  }

  .h-full {
    height:100%;
  }

  /*----------------------width----------------------*/
  .w-100 {
    width: 100%;
  }

  .w-full {
    width: 100%;
  }

  /*----------------------font-weight----------------------*/
  .fw-semi-bold {
    font-weight: 600;
  }
  .fw-medium {
    font-weight: 500;
  }

  .fw-bold {
    font-weight: bold;
  }

  .fw-400 {
    font-weight: 400;
  }
  .fw-500 {
    font-weight: 500;
  }
  .fw-600 {
    font-weight: 600;
  }

  /*----------------------font-size----------------------*/

  .size-10 {
    font-size: 10px;
  }

  .size-12 {
    font-size: 12px;
  }
  
  .size-14 {
    font-size: 14px;
  }
  
  .size-16 {
    font-size: 16px;
  }

  .size-18 {
    font-size: 18px;
  }

  .size-20 {
    font-size: 20px;
  }
  
  .size-28 {
    font-size: 28px;
  }

  .size-30 {
    font-size: 28px;
  }

  /*----------------------margin----------------------*/
  .mt-30 {
    margin-top: 30px;
  }
  .mt-20 {
    margin-top: 20px;
  }
  .mt-10 {
    margin-top: 10px;
  }

  .mb-10 {
    margin-bottom:10px;
  }

  .mr-10 {
    margin-right: 10px; 
  }
  .mr-20 {
    margin-right: 20px;
  }
  .mr-40 {
    margin-right: 40px;
  }

  .mb-24 {
    margin-bottom: 24px;
  }

  .mt-24 {
    margin-top: 24px;
  }

  .mb-20 {
    margin-bottom: 24px;
  }

  .mt-30 {
    margin-top: 30px;
  }

  .mb-30 {
    margin-bottom: 30px;
  }

  .mt-50 {
    margin-top: 50px;
  }

  .mb-50 {
    margin-bottom: 50px;
  }

  .mb-100 {
    margin-bottom: 100px;
  }

  /*----------------------display----------------------*/

  .d-block {
    display:block;
  }

  .d-none {
    display:none;
  }

  .d-hidden {
    visibility: hidden;
    pointer-events: none;
    *  {
      visibility: hidden;
      pointer-events: none;
    }
  }

  /*----------------------flex----------------------*/
  .d-flex {
    display: flex
  }
  .center {
    justify-content:center;
    align-items:center;
  }
  .column {
    flex-direction: column;
  }

  .space-between {
    justify-content:space-between;
  }

  .flex-1 {
    flex: 1;
  }

  .flex-center {
    display: flex
    align-items: center;
    justify-content: center;
  }

  .flex-end {
    align-items:flex-end;
    justify-content:flex-end;
  }

  .flex-column {
    flex-direction:column;
  }

  .flex-row-reverse {
    flex-direction: row-reverse;
  }

  .flex-center-between {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .flex-wrap {
    flex-wrap: wrap;
  }
  
  .align-items-center {
    align-items: center;
  }

  .align-items-end {
    align-items: flex-end;
  }

  .justify-content-between {
    justify-content: space-between;
  }

  .justify-content-center {
    justify-content: center
  }

  .justify-content-end {
    justify-content: flex-end;
  }

  .flex-auto {
    flex: 1 1 auto;
  }

  .justify-self-end	{
    justify-self: end;
  }

  /*----------------------text----------------------*/

  .text-center {
    text-align: center
  }

  .text-end {
    text-align: end
  }

  .text-left {
    text-align:left;
  }

  .text-right {
    text-align:right;
  }

  .text-underline {
    text-decoration: underline;
  }
  
  .text-uppercase {
    text-transform: uppercase;
  }

  .text-pre-line {
    white-space: pre-line;
  }

  .text-pre-wrap {
    white-space: pre-wrap;
  }

  /*----------------------position----------------------*/

  .position-relative {
    position: relative;
  }

  .position-absolute {
    position: absolute;
  }

  /*----------------------other----------------------*/

  .object-contain {
    object-fit: contain
  }

  .pointer {
    cursor: pointer
  }
`
