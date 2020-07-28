import React from 'react';
import './App.css';
import ServerList from './Components/ServerList'
//import DataContext from './Contexts/DataContext';

function App() {
  return (
    
    <div className="App">
     <h1>Servers</h1>
     <ServerList/>
    </div>
  );
}

export default App;
