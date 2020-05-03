import React from 'react'
import StyledTextFormatter from "../styled/StyledTextFormatter";
import { stringToArray, isBoldAndItalics, isBold, isItalics, removeFirstAndLast } from '../utils/appUtils';


const TextFormatter = ({text})=>{

    return (
        <StyledTextFormatter>
            {
                stringToArray(text).map((text,index)=>{
                    let isBoldText = isBold(text),
                        isItalicsText = isItalics(text),
                        isBoldAndItalicsText = isBoldAndItalics(text),
                        isFormatted = isBoldText || isItalicsText || isBoldAndItalicsText,
                        spliceIndex = (isBoldText || isItalicsText) ? 1 : isBoldAndItalicsText ? 2:0,
                        textToInput = removeFirstAndLast(text,spliceIndex)

                    return (
                        <span className = {`${ isFormatted ? isBoldText ? 'Bold' : isItalicsText ? 'Italics' : isBoldAndItalicsText ? 'BoldAndItalics' : 'Normal': 'Normal'}`}>
                            {
                                isFormatted &&
                                <span className = "Fix">{text.substr(0,spliceIndex)}</span>
                            }
                            {textToInput}
                            {
                                isFormatted &&
                                <span className = "Fix">{text.substr(0,spliceIndex)}</span>
                            }
                        </span>
                    );
                })
            }
        </StyledTextFormatter>
    );
}

export default TextFormatter;