import React from 'react';
import './App.css';
// import Comp1 from './components/comp1';
// import Comp2 from './components/comp2';
import HomeScreen from './components/HomeScreen';
import ItemScreen from './components/ItemScreen'
import Item from './components/Item';

class App extends React.Component{
  render() {
    return (
      <div className="App">
        {/* <HomeScreen /> */}
        <ItemScreen />
        <Item />
      </div>
    )
  }
}

export default App;
