import React from 'react';
import Routes from './router/routes'
import './style/costumer.css'
import Header from './components/layout/header'
function App() {
  return (
    <div>
        <Header/>
      <div className='container'>
        <Routes/>
      </div>
    </div>
  );
}

export default App;
