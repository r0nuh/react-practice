import React from 'react';

const userInput = (props) => {
    return (
        <div>
            <input type="text" onChange={props.newName} />
        </div>
    );
}

export default userInput;