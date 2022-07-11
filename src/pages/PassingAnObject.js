import React from 'react';


export const PassingObject = ({ person, nrOfMessages }) => {
    let isMorning = (new Date()).getHours() < 12;
    let greetingElement = isMorning
        ? (
            <>
                <h3>Good Morning {person.firstName} {person.lastName}</h3>
                <h4>You have {nrOfMessages} messages</h4>
            </>
        )
        : (
            <>
                <h3>Good Evening {person.firstName} {person.lastName}</h3>
                <h4>You have {nrOfMessages} messages</h4>
            </>
        );
    return greetingElement;
}