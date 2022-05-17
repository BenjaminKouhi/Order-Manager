import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';

import AsideBar from './Components/AsideBar/AsideBar';
import Orders from './Components/Orders/Orders';
import Employees from './Components/Employees/Employees';
import Dashboard from './Components/Dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <div className='leftSide'>
        <AsideBar />
      </div>
      <div className='rightSide'>
        <div className='contentContainer'>
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/orders' element={<Orders />} />
            <Route path='/employees' element={<Employees />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;