import React from 'react';


export const PassProps = (props) => {
    let isMorning = (new Date()).getHours() < 12;
    let greetingElement = isMorning
        ? (
            <>
                <h3>Good Morning {props.name}</h3>
                <h4>You have {props.nrOfMessages} messages</h4>
            </>
        )
        : (
            <>
                <h3>Good Evening {props.name}</h3>
                <h4>You have {props.nrOfMessages} messages</h4>
            </>
        );
    return greetingElement;
}