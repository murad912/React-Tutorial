import React from 'react';

export const PasspropsComponents = (props) => {
    const { name, nrOfMessages } = props;
    let isMorning = (new Date()).getHours() < 12;
    let greetingElement = isMorning
        ? (
            <>
                <h3>Good Morning {name}</h3>
                <h4>You have {nrOfMessages} messages</h4>
            </>
        )
        : (
            <>
                <h3>Good Evening {name}</h3>
                <h4>You have {nrOfMessages} messages</h4>
            </>
        );
    return greetingElement;
}