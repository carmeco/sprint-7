import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
    }
    ul {
        padding-left: 0;
    }
    li {
        list-style: none;
        padding: 0.5rem 0;
    }
    h1 {
        color: #f67754;
    }
`;
