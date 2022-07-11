import React from 'react';


export const CongratulationsMessage = ({ numberOfClicks, threshold }) => {
    let messageElement = numberOfClicks >= threshold
        ? <h1>Congratulations! You've reached {threshold} number of clicks</h1> : null;
    return messageElement;
}