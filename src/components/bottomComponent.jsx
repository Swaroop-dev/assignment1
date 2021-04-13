import React from 'react'



const BottomComponent = (props) => {
        
    if(!props.data){
        return(<h1>loading...</h1>)
    }
    return(
        <div>
            {props.data}
        </div>
    )

}

export default BottomComponent
