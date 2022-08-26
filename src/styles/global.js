import { createGlobalStyle, keyframes } from "styled-components";

export default createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }
    :root{

        --Grey-4:#121214;
        --Grey-3:#212529;
        --Grey-2:#343B41;
        --Grey-1:#868E96;
        --Grey-0:#F8F9FA;
        
        --textBtn:#FFFFFF; 
        
        

        --Sucess:#3FE864;
        --Negative:#E83F5B;

        --toastify-color-light: var(--Grey-0);
        --toastify-color-success: var(--Sucess);
        --toastify-color-error: var(--Negative);

    }
    body{
        background: white;       
        font-family: 'Lato', sans-serif;
        background-color: var(--Grey-0);
    }

    h1 ,h2 ,h3, h4{
        font-family: 'Lato', sans-serif;
        font-weight: 700;
        color: #1d293f;
        text-shadow: 0.1px 0.1px 1px #1d293f;
    }

    button{
        font-family: 'Lato', sans-serif;
        cursor: pointer;
    }

    a{
        text-decoration:none
    }
`;

export const appearFromLeft = keyframes`
    from {
        opacity: 0;
        transform: translateX(-50px)
    }

    to {
        opacity: 1;
        transform: translateX(0px)
    }
`;

export const appearFromUp = keyframes`
    from {
        opacity: 0;
        transform:scale(0.5);
    }

    to {
        opacity: 1;
        transform:scale(1);
    }
`;
