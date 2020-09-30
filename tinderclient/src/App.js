import React from 'react';
import './App.css';
import Header from './components/Header'
import TinderCards from './components/TinderCard'
import SwipeButtons from './components/SwipeButtons'

function App() {
  return (
    <div className="App">
      <Header />
      <TinderCards />
      <SwipeButtons />
    </div>
  );
}

export default App;
