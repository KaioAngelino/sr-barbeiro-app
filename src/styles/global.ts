import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root {

        --white-500: #E8EDDF;

        --yellow-500: #F5CB5C;

        --red-500: #EF3E36;
        
        --green-500: #55A040;

        --gray-800: #242423;

    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body {
        font-family: 'Jost', sans-serif;
    }

    body {
        background-color: var(--gray-800);
    }

`