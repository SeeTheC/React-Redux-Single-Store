import logo from './logo.svg';
import './App.css';
import IncrementDecrement from './component/IncDec';
import IncrementDecrementWrapper  from './component/IncDecWrapper';

import {createStore} from 'redux'
import {Provider}  from 'react-redux'
import rootReducer from './reducer/rootReducer';

function App() {

  return (
    <div className="App">
      <header className="App-header">
          REDUX - SINGLE STORE          
          <br/>
          <IncrementDecrementWrapper />
          <IncrementDecrementWrapper />
          <IncrementDecrementWrapper />
          
      </header>
    </div>
  );
}

export default App;
