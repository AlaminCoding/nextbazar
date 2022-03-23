import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    $gray: #d1d1d1;
    $black: #363535;
    * {
        box-sizing: border-box;
    }
    body, html {
        width: 100%;
        padding: 0;
        margin: 0;
        font-family: "Spartan", sans-serif;
        position: ${(props) =>
          props.cartOpen || props.favOpen ? "fixed" : "static"};
    }
    h2,h1,p,a,li,ul,span,button {
        padding: 0;
        margin: 0;
        font-family: "Spartan", sans-serif;
    }
    a {
        color: inherit;
        text-decoration: none;
    }
    h2{
        font-weight: 600;
    }
`;

export default GlobalStyle;
