import React from 'react';

const userOutput = (props) => {
    return (
        <div>
            <p>Hi! I'm {props.uname}</p>
            <p>I like {props.like}!</p>
        </div>
    );
}

export default userOutput;