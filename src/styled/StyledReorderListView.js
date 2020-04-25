import styled from 'styled-components';
import { animated } from 'react-spring';

const ReorderListView = styled.div`
    position: relative;
    height:700px;
    width:100%;
    display:flex;
    justify-content:center;
    overflow:${props=>props.shouldScroll ? 'auto':'hidden'};
`;


const ReorderListViewComponent = styled.div`
    position: absolute;
    overflow: visible;
    pointer-events: auto;
    transform-origin: 50% 50% 0px;
    border-radius: 5px;
    color: white;
    line-height: 90px;
    font-size: 14.5px;
    text-transform: uppercase;
    letter-spacing: 2px;
`;

const StyledReorderListViewComponent = animated(ReorderListViewComponent)
const StyledReorderListView = animated(ReorderListView);
export { StyledReorderListView as default, StyledReorderListViewComponent}