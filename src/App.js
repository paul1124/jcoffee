import React, { useEffect } from 'react';
import Background from './components/Background';
import MainImage from './components/images/main.jpeg';
import Home from './components/Home';
import './App.css';

const mainImageStyle = {
  position: 'fixed',
  // height: 100 + 'vh',
  width: 100 + '%',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  opacity: 0.9
}

function App() {
  useEffect(() => {
      window.scrollTo(0, 0);
  }, []);
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
