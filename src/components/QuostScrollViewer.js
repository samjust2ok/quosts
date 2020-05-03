import React, { useRef, useEffect } from 'react';
import StyledQuostScrollViewer, { StyledQuostScrollViewComponent } from '../styled/StyledQuostScrollViewer';
import { useSpring } from 'react-spring';
import { useDrag } from 'react-use-gesture';
import _ from 'lodash-es';
import { isPositive } from '../utils/appUtils';


const QuostScrollViewer = ({items, component: Component,index,getCurrentIndex})=>{

    const [props,set] = useSpring(()=>({transform: 'translateX(0px)'}))
    const WIDTH = window.innerWidth;
    const ITEMS_NO = items.length - 1;
    const UPPERBOUND = ((-(ITEMS_NO)* WIDTH) - WIDTH/2);
    const currentIndex = useRef(0);

    useEffect(()=>{
        set({transform: `translate(${-WIDTH * _.clamp(index,0,ITEMS_NO)})`});
        currentIndex.current = index;
    },[index,ITEMS_NO,WIDTH,set])

    

    const bind = useDrag(({down, movement: [x]}) => {
        
        let value = Math.round((x + -currentIndex.current * WIDTH) / WIDTH);

        const index = _.clamp(value, value, items.length - 1)
        const isPos = isPositive(index);
        
        const translateDistance = -currentIndex.current * WIDTH + x;
        set({transform: `transformX(${Math.sign(index) === 1 ? _.clamp(x,0, WIDTH/1.5) : translateDistance <= UPPERBOUND ? UPPERBOUND:translateDistance}px)`})

        if(!down){
            const translateIndex = isPos ? 0:index;
            let distance = -WIDTH * _.clamp(Math.abs(translateIndex),0,ITEMS_NO); 
            set({transform: `transformX(${distance}px)`})
            currentIndex.current = _.clamp(Math.abs(translateIndex),0,ITEMS_NO);
            getCurrentIndex(currentIndex.current)
        }
    })

    return (
        <StyledQuostScrollViewer style={props}>
            {items.map((item,i)=> (
                <StyledQuostScrollViewComponent
                {...bind(i)}
                key={i}>
                    <Component item ={item}/>
                </StyledQuostScrollViewComponent>
            ))}
        </StyledQuostScrollViewer>
    );
}

export default QuostScrollViewer;