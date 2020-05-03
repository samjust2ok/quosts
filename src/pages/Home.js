import React from 'react';
import StyledHome from '../styled/StyledHome';
import QuostsCreator from '../components/QuostsCreator';

const items = [
    {
        text: 'today'
    },
    {
        text: 'Thanks'
    },
    {
        text: 'for'
    },
    {
        text: 'coming'
    },
]

const Home = ()=>{
    return (
        <StyledHome>
            <QuostsCreator quosts = {items}/>
        </StyledHome>
    );
}



export default Home;