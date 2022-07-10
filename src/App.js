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
import {  PasspropsComponents } from './pages/PasspropsComponents';

function App() {
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
<p>-----------------------------------------------</p>
        <Greetings />
        <Greeting />
        <HelloComponentClass />
        <HelloComponentFunction />
        <HelloComponentSimpleFunction />

      </header>
    </div>
  );
}

export default App;
