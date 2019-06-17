import React from 'react';
import './App.css';
import HomeContainer from "./containers/Home";
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <HomeContainer/>
    </Provider>
    
  );
}

export default App;
