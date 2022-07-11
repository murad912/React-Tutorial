import './App.css';
import Greetings from './Greetings';
import Greeting from './pages/Greeting';
import { HelloComponentClass } from './pages/HelloComponentClass';
import { HelloComponentFunction } from './pages/HelloComponentFunction';
import { HelloComponentSimpleFunction } from './pages/HelloComponentSimpleFunction';
import { Component1 } from './pages/Component1';
import { Component2 } from './pages/Component2';
import { Component3 } from './pages/Component3';
import { Component4 } from './pages/Component4';

import { PassProps } from './pages/PassProps';
import { PasspropsComponents } from './pages/PasspropsComponents';
import { PassingObject } from './pages/PassingAnObject';

import { TopComponent } from './pages/PassingFunctionTopComponenet';
import { BottomComponent } from './pages/PassingFunctionBottomComponents';
import React, { useState } from 'react';
import { Counter } from './pages/UseStateInComponents';
import { CongratulationsMessage } from './pages/CongratulationsMessage';
import { TopComponents } from './pages/UseStateComponentsTopComponent';
import { BottomComponents } from './pages/UseStateComponentsBottomCom';

function App() {
  //This code is part of function Passing example
  const sayHello = () => {
    console.log('Hello was clicked.');
  }
  const sayGoodbye = () => {
    console.log('Good bye was clicked.');
  }

  //useState hook example
  const [age, setAge] = useState(19);
  const handleClick = () => setAge(age + 1)

  //useState in function
  const [numberOfClicks, setNumberOfClicks] = useState(0);
  const increment = () => setNumberOfClicks(numberOfClicks + 1);

  //useState Component passing datab/n components
  const [message, setMessage] = useState("");

  return (
    <div>
      <header>
        <h2>-------Multiple components-------------</h2>
        <table>
          <tr>
            <td><Component1 /></td>
            <td><Component2 /></td>
          </tr>
          <tr>
            <td><Component3 /></td>
            <td><Component4 /></td>
          </tr>
        </table>
        <h2>---------Pass props to components-----------</h2>
        <p><small>Note:- Props stand for properties</small></p>
        <p>
          <PassProps name="Frank" nrOfMessages={5} />
        </p>
        <h2>---------Pass props to components Better way-----------</h2>
        <PasspropsComponents name="John" nrOfMessages={4} />
        <h2>-------------Passing an object--------------</h2>

        <p>
          <PassingObject person={{ firstName: "Frank", lastName: "Brown" }} nrOfMessages={5} />
        </p>
        <h2> --------Passing a function---------</h2>

        <div>
          <TopComponent sayHelloFunction={sayHello} sayGoodbyeFunction={sayGoodbye} /><BottomComponent />
        </div>
        <h2>-------------------------------------------</h2>
        <Greetings />
        <Greeting />
        <HelloComponentClass />
        <HelloComponentFunction />
        <HelloComponentSimpleFunction />

        <h3>------useState hook example --------</h3>

        <div>
          I am {age} Years Old
          <div>
            <button onClick={handleClick}>Increase my age! </button>
          </div>
        </div>

        <h3>------useState in componenet example --------</h3>
        <CongratulationsMessage threshold={10} numberOfClicks={numberOfClicks} />
        <Counter numberOfClicks={numberOfClicks} onIncrement={increment} />

        <h3>------useState in componenet Passing Data b/n componenets --------</h3>
        <div>
          <TopComponents setMessageFunction={setMessage} />
          <BottomComponents message={message} />
        </div>
      </header>
    </div>



  );
}

export default App;
