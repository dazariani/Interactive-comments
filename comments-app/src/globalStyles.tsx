import { createGlobalStyle } from "styled-components";

<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700&display=swap');
</style>;

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        font-family: 'Rubik', sans-serif;
        background-color: rgb(245, 246, 250);
        font-size: 16px;
    }
`;

export default GlobalStyle;
