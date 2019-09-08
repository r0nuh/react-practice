import React from 'react';

const userInput = (props) => {
    const inputStyle = {
        backgroundColor: "gainsboro",
        padding: "6px",
        fontSize: "18px"
    }

    return (
        <div>
            <input style={inputStyle} type="text" onChange={props.changed} value={props.current}/>
        </div>
    );
}

export default userInput;