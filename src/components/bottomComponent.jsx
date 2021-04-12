import React,{useState,useEffect} from 'react'
import {getJoke} from './apicall'


const BottomComponent = (props) => {
    const [joke,setJoke]=useState(null)
    
    useEffect(()=>{
        getJoke(props.category)
            .then(({value})=>setJoke(value))
    },[])

    return(
        <div>
            {joke}
        </div>
    )


}

export default BottomComponent
