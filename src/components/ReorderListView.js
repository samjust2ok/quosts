import React, { useRef,useState } from 'react'
import StyledReorderListView, {StyledReorderListViewComponent} from '../styled/StyledReorderListView';
import clamp from 'lodash-es/clamp';
import swap from 'lodash-move';
import { useDrag } from 'react-use-gesture'
import { useSprings, interpolate, useSpring } from 'react-spring'

// Returns fitting styles for dragged/idle items
const animateFunction = (order, height, down, originalIndex, curIndex, y) => index =>
  down && index === originalIndex
    ? { y: (curIndex * height) + y, scale: 1.1, zIndex: '1', shadow: 15, immediate: n => n === 'y' || n === 'zIndex'}
    : { y: order.indexOf(index) * height, scale: 1, zIndex: '0', shadow: 1, immediate: false}

const ReorderListView = ({ items, component: Component, onOrderChange, contentHeight }) => {
    const order = useRef(items.map((_, index) => index)) 
    const HEIGHT = contentHeight;
    const [springs, setSprings] = useSprings(items.length, animateFunction(order.current,HEIGHT));
    const [shouldScroll,setShouldScroll] = useState(true) 
    const [scrollProps,setScrollProps] = useSpring(()=>({scroll: 0}));
    const scrollContainerRef = useRef(null);
    const scrollContainerHeight = useRef(null);
    
    
    const bind = useDrag(({ args: [originalIndex], down, event, movement: [, y] }) => {
            if(!scrollContainerHeight.current)
                scrollContainerHeight.current = scrollContainerRef.current.getBoundingClientRect().height;
                
            if(down && shouldScroll !== false){
                setShouldScroll(false)
            }

            const curIndex = order.current.indexOf(originalIndex)
            const curRow = clamp(Math.round((curIndex * HEIGHT + y) / HEIGHT), 0, items.length - 1)
            const newOrder = swap(order.current, curIndex, curRow);
            setSprings(animateFunction(newOrder, HEIGHT, down, originalIndex, curIndex, y))
            
            
            let boxRefTop = event.target.getBoundingClientRect().top;
            let scrollRefTop = scrollContainerRef.current.scrollTop;
            
            if((boxRefTop + HEIGHT ) >= scrollContainerHeight.current){
                setScrollProps({scroll: scrollRefTop + HEIGHT})
            }else if((boxRefTop - HEIGHT/4) <= 0){
                setScrollProps({scroll: scrollRefTop-HEIGHT})
            }

            if (!down) {
                order.current = newOrder
                onOrderChange && onOrderChange(newOrder);
                setShouldScroll(true);
            }
        },{
            delay: 300
        })


    return (
        <StyledReorderListView ref= {scrollContainerRef} scrollTop = {scrollProps.scroll} className = {shouldScroll ? 'Scroll-Y':''}>
            {springs.map(({ zIndex, shadow, y, scale }, i) => (
            <StyledReorderListViewComponent
                {...bind(i)}
                key={i}
                style={{
                    zIndex,
                    boxShadow: shadow.interpolate(s => `rgba(0, 0, 0, 0.15) 0px ${s}px ${2 * s}px 0px`),
                    transform: interpolate([y, scale], (y, s) => `translate3d(0,${y}px,0) scale(${s})`)
                }}>
                    <Component item ={items[i]}/>
                </StyledReorderListViewComponent>
            ))}
        </StyledReorderListView>
    )
}


export default ReorderListView;
