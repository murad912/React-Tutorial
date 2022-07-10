import './App.css';
import Greetings from './Greetings';
import Greeting from './pages/Greeting';
import { HelloComponentClass } from './pages/HelloComponentClass';
import { HelloComponentFunction } from './pages/HelloComponentFunction';
import { HelloComponentSimpleFunction } from './pages/HelloComponentSimpleFunction';
import {Component1} from './pages/Component1';
import {Component2} from './pages/Component2';
import {Component3} from './pages/Component3';
import {Component4} from './pages/Component4';

function App() {
  return (

    <div>
      <header>
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
