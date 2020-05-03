import styled from 'styled-components';

const StyledQuostsCreator = styled.div`
    width:100%;
    height:100%;
    overflow:hidden;
    position:relative;

    .HeaderSection{
        height: 50px;
        position:fixed;
        top: 0;
        width:100%;
        z-index:50;
    }

    .ActionSection{
        height: 40px;
        position:fixed;
        top: 50px;
        width:100%;
        z-index:50;
    }

    .ContentSection{
        width:100%;
        height:100%;
    }

    .FooterSection{
        height: 70px;
        position:fixed;
        width:100%;
        bottom: 0;
        z-index:50;
    }
`;

const StyledActions = styled.div`
    width:100%;
    height:100%;
    display:flex;
    justify-content:space-between;
    padding: 0 16px;
    align-items:center;

    .Icon{
        justify-content:center;
        height: 30px;
        width:30px;
        border-radius:3px;
        display:flex;
        align-items:center;
        
        
        i,svg{
            transition: color .1s, background-color .1s;
            color: rgba(14,19,24,.45);
        }
        
        :active{
            background-color: rgba(0,0,0,.03);
            i,svg{
                color: black;
            }
        }
    }

    .QuostNumber{
        span{
            font-size:14px;
        }
    }

    .Actions{
        display:flex;

        .Action{
            margin-left:20px;
            
            i{
                font-size: 22px;

                &.small-16{
                    font-size:18px
                }

                &.small-18{
                    font-size:20px;
                }
            }
        }

    }

`;

const StyledFooter = styled.div`
    height:100%;
    width:100%;
    display:flex;
    justify-content:space-between;
    padding:0 16px;

    .Content{
        position:relative;
        display:flex;
        align-items:center;
        justify-content:center;
        height:55px;
        width:55px;

        &.AllQuosts{
            background-color: ${props=>props.theme.secondaryBackgroundColor};
        }

        &.EditQuost{
            background-color: ${props=>props.theme.primaryMainColor};
        }

        span{
            position:absolute;
            top:50%;
            height:15px;
            width:18px;
            left:50%;
            transform: translate(-50%,-50%);
            font-size:1rem;
        }
    }
`;


const StyledHeader = styled.div`
    width:100%;
    height:100%;
    padding:0 16px;
    display:flex;
    justify-content:space-between;
    align-items:center;
`;
const StyledFullWidth = styled.div`
    height:100%;
    width:100%;
    padding-top: 100px;
`;
export { StyledQuostsCreator as default,StyledHeader, StyledActions,StyledFooter,StyledFullWidth}