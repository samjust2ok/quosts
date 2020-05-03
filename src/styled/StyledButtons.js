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

const BorderButton = styled(Button)`
    height:${props=>props.height || '45px'};
    width:${props=>props.width || '45px'};
    border-radius:50%;
    display:flex;
    justify-content:center;
    align-items:center;
    background-color: transparent;
    border: 1px solid black;
`;

const DirectionButton = styled(Button)`
    height:40px;
    width:40px;
    border-radius:50%;
    display:flex;
    align-items:center;
    justify-content:center;
    background-color: ${props=>props.theme.secondaryBackgroundColor};
`;

const RoundButton = styled(DirectionButton)`
    height:${props=>props.height || '55px'};
    width:${props=>props.width || '55px'};
    position:relative;
    overflow:hidden;
`;

export { TertiaryButton, PrimaryButton, SecondaryButton, RoundButton,DirectionButton, BorderButton}