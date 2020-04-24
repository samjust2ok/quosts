import React from 'react';

const Icon = ({icon, onClick, classNames = [], outlined = true})=>{
    const clN = `material-icons${outlined ? '-outlined':''} ${classNames.join(' ')}`
    return (
        <i onClick = {onClick && onClick} className = {clN}>{icon}</i>
    )
}

export default Icon;