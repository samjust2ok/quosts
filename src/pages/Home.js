import React, {useState} from 'react';
import StyledHome from '../styled/StyledHome';
import Navigation from '../components/Navigation';
import { MAIN_PAGE_NAVIGATION } from '../components/NavigationPages';



const Home = ()=>{
    const [showNavigation,setShowNavigation] = useState(true);
    const handleCallBack = (value)=>setShowNavigation(value);
    return (
        <StyledHome>
            <Navigation openNavigation = {showNavigation} setNavigationInternal = {handleCallBack} components = {MAIN_PAGE_NAVIGATION}/>
        </StyledHome>
    );
}





export default Home;