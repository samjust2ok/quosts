import styled from "styled-components";

const Button = styled.button`
    outline: none;
    background:none;
    border:none;
    border-radius: 10px;
    font-size:1.4rem;
    width:100%;
    font-family: Poppins, sans-serif;
`;


const TertiaryButton = styled(Button)`
    
`;

const PrimaryButton = styled(Button)`

`


const SecondaryButton = styled(Button)`

`

export { TertiaryButton, PrimaryButton, SecondaryButton}