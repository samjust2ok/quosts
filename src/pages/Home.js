import React, {useState} from 'react';
import StyledHome, {StyledX} from '../styled/StyledHome';
import Navigation from '../components/Navigation';
import { MAIN_PAGE_NAVIGATION } from '../components/NavigationPages';
import HorizontalScrollView from '../components/HorizontalScrollView';
import ReorderListView from '../components/ReorderListView';
import _ from 'lodash-es';

const items = [
    {
        text: 'Hello'
    },
    {
        text: 'How'
    },
    {
        text: 'are'
    },
    {
        text: 'you'
    },
    {
        text: 'doing'
    },
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
    const [showNavigation,setShowNavigation] = useState(true);
    const handleCallBack = (value)=>setShowNavigation(value);
    

    const handleOrderChange = (order)=>{
        let s = order.map(orderIndex=>items[orderIndex]);
        console.log(s)
    }
    return (
        <StyledHome>
            <ReorderListView onOrderChange = {handleOrderChange} contentHeight = {170} items = {items} component = {X}/>
        </StyledHome>
    );
}

const X = ({item,matches})=>{
    return (
        <StyledX matches = {matches}>
            <div>
                <h3>{item.text}</h3>
            </div>
        </StyledX>
    );
}




export default Home;