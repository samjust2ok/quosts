import styled from 'styled-components';
import { animated } from 'react-spring';

const ReorderListView = styled.div`
    position: relative;
    height:700px;
    width:100%;
    display:flex;
    justify-content:center;
`;


const ReorderListViewComponent = styled.div`
    position: absolute;
    overflow: visible;
    pointer-events: auto;
    transform-origin: 50% 50% 0px;
`;

const StyledReorderListViewComponent = animated(ReorderListViewComponent)
const StyledReorderListView = animated(ReorderListView);
export { StyledReorderListView as default, StyledReorderListViewComponent}