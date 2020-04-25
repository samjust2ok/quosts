import styled from 'styled-components';



const StyledHorizontalScrollView = styled.div`
    width:100%;
    position:relative;

    .ScrollContainerHolder{
        margin: ${props=>props.matches ? '0 -16px':'0px'};
        position: relative;
        display:flex;


        .ScrollContainer{
            width:100%;
            display:flex;
            flex-flow: row nowrap;
            scroll-padding-left: ${props=>props.matches ? '16px':0};

            .ViewAllButton{
                padding-right: ${props=>props.matches ? '16px':'0'};
                flex-shrink:0;
                height:100%;
                flex-grow:1;
                display:flex;
                align-items:center;

                .Button{
                    display:flex;
                    align-items:center;
                    flex-direction:column;
                    justify-content:center;
                

                    p{
                        font-size:12px;
                        margin-top:10px;
                    }
                }
            }
        }
    }

    .DirectionButton{
        position: absolute;
        top:50%;
        transform: translateY(-50%);
        border: 1px solid rgba(14,19,24,.02);
        box-shadow: 0 0 12px 0 rgba(14,19,24,.07);
        border-radius:50%;

        &.Left{
            left: -20px;
        }

        &.Right{
            right: -20px;
        }
    }
`;

const StyledViewElement = styled.div`
    flex-shrink:0;
    padding-right:${props=>props.matches ? '16px':'24px'};

    :nth-child(1){
            padding-left: ${props=>props.matches ? '16px':0};
    }
`;
export {StyledHorizontalScrollView as default, StyledViewElement} ;