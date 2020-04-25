import React, { useRef, useState } from 'react';
import StyledHorizontalScrollView, {StyledViewElement} from '../styled/StyledHorizontalScrollView';
import { useMatch } from '../utils/customHooks';
import { animated, useSpring } from 'react-spring';
import { BorderButton, DirectionButton } from '../styled/StyledButtons';
import Icon from './Icon';

const HorizontalScrollView  = ({items,handleSeeAll = ()=>{},component: Component})=>{
    const matches = useMatch('(max-width:600px)');
    const [showScrollLeftButton,setShowScrollLeftButton] = useState(false);
    const [showScrollRightButton,setShowScrollRightButton] = useState(true);
    const scrollContainerRef = useRef(null);
    const [scrollProps,setScrollProps] = useSpring(()=>({ scroll: 0}));
    const [scrollDistance,setScrollDistance] = useState(0);


    const scrollWatcher = (event)=>{
        let element = event.target;
        let scrollLeft = element.scrollLeft;
        let scrollWidth = element.scrollWidth;
        let elementWidth = element.getBoundingClientRect().width;

        let shouldShowLeft = scrollLeft > 0;
        let shouldShowRight = (scrollLeft + elementWidth) < scrollWidth - 45;

        shouldShowLeft !== showScrollLeftButton && setShowScrollLeftButton(shouldShowLeft);
        shouldShowRight !== showScrollRightButton && setShowScrollRightButton(shouldShowRight);
    }

    const scrollLeft = ()=>{
        const elem = scrollContainerRef.current;
        const elementWidth = elem.getBoundingClientRect().width;
        const distance = scrollDistance - elementWidth
        setScrollProps({scroll: distance});
        setScrollDistance(distance);
    }

    const scrollRight = ()=>{
        const elem = scrollContainerRef.current;
        const elementWidth = elem.getBoundingClientRect().width;
        const distance = scrollDistance + elementWidth
        setScrollProps({scroll: distance});
        setScrollDistance(distance);
    }

    return (
        <StyledHorizontalScrollView matches = {matches}>
                <div className="ScrollContainerHolder">
                    <animated.div scrollLeft = {scrollProps.scroll} ref = {scrollContainerRef} onScroll = {scrollWatcher} className="ScrollContainer Scroll-X">
                        {
                            items.map((item,index)=>{
                               return (
                                   <StyledViewElement matches = {matches} key = {index}>
                                       <Component item = {item}/>
                                   </StyledViewElement>
                               );
                            })
                        }
                        <div className="ViewAllButton">
                            <div className="Button">
                                <BorderButton onClick = {handleSeeAll}>
                                    <Icon icon = "arrow_forward"/>
                                </BorderButton>
                                <p>Explore All</p>
                            </div>
                        </div>
                    </animated.div>
                </div>
                {
                    !matches && showScrollLeftButton &&
                    <div className="DirectionButton Left">
                        <DirectionButton onClick = {scrollLeft}>
                            <Icon icon = "chevron_left"/>
                        </DirectionButton>
                    </div>
                }
                {
                    !matches && showScrollRightButton &&
                    <div className="DirectionButton Right">
                        <DirectionButton onClick = {scrollRight}>
                            <Icon icon = "chevron_right"/>
                        </DirectionButton>
                    </div>
                }
        </StyledHorizontalScrollView>
    );
}


export default HorizontalScrollView;