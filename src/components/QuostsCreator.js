import React, {useState} from 'react';
import StyledQuostsCreator, {StyledActions, StyledFooter,StyledHeader,StyledFullWidth} from '../styled/StyledQuostsCreator';
import Icon from './Icon';
import { RoundButton } from '../styled/StyledButtons';
import { CreatedQuostsShowIcon, CopyIcon, DeleteIcon, ForwardIcon, BackIcon } from '../svg';
import QuostScrollViewer from './QuostScrollViewer';
import _ from 'lodash';
import QuostOrdering from './QuostsOrdering';
import TextFormatter from './TextFormatter';

const QuostsCreator = ({quosts})=>{
    const QUOSTS_NUMBER = quosts.length;
    const [currentQuost,setCurrentQuost] = useState(0);
    const [showOrdering,setShowOrdering] = useState(true);


    const handleIndexChange = (index)=>{
        setCurrentQuost(index)
    }

    const onNext = (e)=>{
        e.stopPropagation()
        setCurrentQuost(_.clamp(currentQuost + 1, 0,QUOSTS_NUMBER-1))
    }

    const onPrevious = (e)=>{
        e.stopPropagation()
        setCurrentQuost(_.clamp(currentQuost - 1, 0,QUOSTS_NUMBER-1))
    }
    return (
        <StyledQuostsCreator>
            <QuostOrdering handleNavigation = {(index)=>setShowOrdering(index)} open = {false}/>
            <div className="HeaderSection">
                <Header/>
            </div>
            <div className="ActionSection">
                <Actions onNext = {onNext} onPrevious = {onPrevious} currentIndex = {currentQuost} totalQuosts = {QUOSTS_NUMBER}/>
            </div>
            <div className="ContentSection">
                <QuostScrollViewer getCurrentIndex ={handleIndexChange} index = {currentQuost} component = {FullWidth} items = {quosts}/>
            </div>
            <div className="FooterSection">
                <Footer totalQuosts = {QUOSTS_NUMBER}/>
            </div>
        </StyledQuostsCreator>
    );
}


const FullWidth = ({item})=>{
    return (
        <StyledFullWidth>
            <TextFormatter text = 'Hello, how are you _doing_ *today*. _*Thank you*_'/>
        </StyledFullWidth>
    );
}

const Actions = ({currentIndex,isPageSet = false,totalQuosts,onNext,onPrevious,onDelete,onCopy,onAdd})=>{
    const [showActions,setShowActions] = useState(false);
    const toggleShowActions = (e)=>{
        e.stopPropagation();
        setShowActions(!showActions);
    }

    const INDEX = currentIndex + 1;

    const handleElementClick = ()=>setShowActions(false);

    return (
        <StyledActions onClick = {handleElementClick}>
            <div className="QuostNumber">
                <span>{INDEX}</span>
            </div>
            {
                !showActions &&
                <div onClick = {toggleShowActions} className="ActionToggler Icon">
                    <Icon icon = "more_horiz"/>
                </div>
            }
            {
                showActions &&
                <div className="Actions">
                    {
                       totalQuosts > 1 && INDEX > 1 &&
                        <div onClick = {onPrevious} className="Action Icon">
                            <BackIcon/>
                        </div>
                    }
                    {
                       totalQuosts > 1 &&  INDEX !==totalQuosts &&
                        <div onClick = {onNext} className="Action Icon">
                            <ForwardIcon/>
                        </div>
                    }
                    <div onClick = {onCopy} className="Action Icon">
                        <CopyIcon/>
                    </div>
                    {
                       totalQuosts > 1 &&
                        <div onClick = {onDelete} className="Action Icon">
                            <DeleteIcon/>
                        </div>
                    }
                    {
                        isPageSet &&
                        <div onClick = {onAdd} className="Action Icon">
                            <Icon icon = "add"/>
                        </div>
                    }
                </div>
            }
        </StyledActions>
    );
}

const Footer = ({totalQuosts})=>{
    return (
        <StyledFooter>
            <RoundButton>
                <div className="Content AllQuosts">
                    <CreatedQuostsShowIcon/>
                    <span>{totalQuosts}</span>
                </div>
            </RoundButton>
            <RoundButton>
                <div className="Content EditQuost">
                    <Icon icon = 'add'/>
                </div>
            </RoundButton>
        </StyledFooter>
    );
}

const Header = ({})=>{
    return (
    <StyledHeader>
        <div className="Home">
            <Icon icon = "home"/>
        </div>
        <div className = "ActionButtons">
            <div className="Action">
                <Icon outlined = {false} icon = "list"/>
            </div>
        </div>
    </StyledHeader>
    );
}

export default QuostsCreator;