import React from 'react';
import {Route, Routes, Link, BrowserRouter} from 'react-router-dom'
import './App.css';
// import Comp1 from './components/comp1';
// import Comp2 from './components/comp2';
// import HomeScreen from './components/HomeScreen';
// import ItemScreen from './components/ItemScreen'
// import Item from './components/Item';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import HomeScreen from './screens/HomeScreen';
import Header from './components/Header';

class App extends React.Component{
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Header />
          
          <Routes>
            <Route path='/' element={<HomeScreen />} />
            <Route path='/login' element={<LoginScreen />} />
            <Route path='/signup' element={<SignUpScreen /> } />
          </Routes>
        </BrowserRouter>
      
      </div>
    )
  }
}

export default App;
