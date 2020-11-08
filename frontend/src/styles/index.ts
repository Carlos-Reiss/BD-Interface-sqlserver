import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing: border-box;
    outline: none;
    -webkit-font-smoothing: antialiased !important;
  }
  html,body{
    #root{
      height:100%;
    }
  }
  body{
    background: #f9f9f9;
    font-size:16px;
    color:#444;
    font-family:'Roboto',sans-serif;
  }
  input, button{
    cursor: pointer;
  }
`;
