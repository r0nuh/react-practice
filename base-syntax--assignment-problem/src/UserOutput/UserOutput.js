import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {
    return (
        <div className="UserOutput">
            <p>Hi! I'm {props.uname}</p>
            <p>I like {props.like}!</p>
        </div>
    );
}

export default userOutput;