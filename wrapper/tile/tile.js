import React from 'react';


const tile = (props) => {
    const style = {
        display: 'inline-block',
        paddingRight: '8px',
        paddingLeft: '8px',
        border: "1px solid black",
        textAligh: 'center',
        width:"100px",
        cursor:"pointer",
        backgroundColor: "white",
        fontSize: "30px"
    };

    if (props.width === "full"){
        style.width = "454px"
        style.backgroundColor = "#463337"
        style.cursor = "default"
        style.color = "white"
        
    }
    if (props.width === "half"){
        style.width = "100px"
    }
    if (props.value === "+" |  props.value === "-" | props.value === "/" | props.value === "*"){
        style.backgroundColor = "#ff0049";
    }
    
    return (
        
        <div onClick={props.click} style={style}>
            <p>{props.value}</p>
        </div>
    )
}

export default tile;