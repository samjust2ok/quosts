import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *::before,
    *::after,
    *{
        box-sizing:border-box;
        outline:none;
        margin:0;
        padding:0;
        -webkit-tap-highlight-color: transparent;
    }

    *{
        will-change: background-color color;
        transition: color .2s ease-in, background-color .2s ease-in;
    }
    html,body{
        margin:0;
        font-size: 68.5%;
        padding:0;
        -webkit-user-select: none;
        -moz-user-select: -moz-none;
        -ms-user-select: none;
         user-select: none;
         font-family: Poppins, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        overflow-x: hidden;
    }

    #root {
        min-height:100vh;
        height:100%;
    }

    .Scroll-Y{
        overflow-y:auto;
        overflow-x:hidden;
        overflow: -moz-scrollbars-none; 
        -ms-overflow-style: none;
        &::-webkit-scrollbar { 
            display:none;
        }
    }

    .Scroll-X{
        overflow-y:hidden;
        overflow-x:auto;
        overflow: -moz-scrollbars-none; 
        -ms-overflow-style: none;
        &::-webkit-scrollbar { 
            display:none;
        }
    }
`

export default GlobalStyle;