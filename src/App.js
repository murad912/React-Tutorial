import './App.css';
import Greeting from './Greeting';

import {HelloComponentClass} from './pages/HelloComponentClass';
import {HelloComponentFunction} from './pages/HelloComponentFunction';
import {HelloComponentSimpleFunction} from './pages/HelloComponentSimpleFunction';


function App() {
  return (
    <div>
      <header>
         <HelloComponentClass />
        <HelloComponentFunction />
        <HelloComponentSimpleFunction />
      </header>
    </div>
  );
}

export default App;
