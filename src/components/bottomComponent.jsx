import React,{useState,useEffect} from 'react'
import {getJoke} from './apicall'


const BottomComponent = (props) => {
        

    return(
        <div>
            {props.data}
        </div>
    )

}

export default BottomComponent
