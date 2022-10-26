import React, { useEffect, useState } from 'react';
import './App.css';
import Compteur from './components/Compteur';
import Cv from './components/Cv';
import ListPosts from './components/ListPosts';
import Register from './components/Register';
import Time from './components/Time';

function App() {

  return (
    <div className='app-container'>
      <ListPosts />
    </div>
  );
}

export default App;
