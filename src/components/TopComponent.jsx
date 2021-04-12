import React from 'react'
import './bottom.css'

const TopComponent=(props)=>{
    return (
        <div className=".categories">
            {props.data?.map((item ,index) => 
        
        <button key={index} onClick={props.handleClick(index)} >{item}</button>
      
    )}
        </div>
    )
}

export default TopComponent
