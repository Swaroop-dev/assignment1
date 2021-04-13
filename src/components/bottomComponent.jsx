import React,{PureComponent} from 'react'



const BottomComponent = (props) => {
    const styles = {
        fontSize:"14px",
        fontFamily:"Century Gothic",
        // margin:"auto",
        // padding:"30px 15px"
    }

        
    if(!props.data){
        return(<h1>loading...</h1>)
    }
    return(
        <div>
            <h6 style={styles} >{props.data}</h6>
        </div>
    )

}

export default BottomComponent
