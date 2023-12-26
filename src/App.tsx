import React from 'react';
import { isDesktop } from 'react-device-detect';
import monitorImg from './assets/monitors-laptop.png';
import './App.css';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {isDesktop ? (
        <>
          <Routes>
            <Route path="/"></Route>
          </Routes>
        </>
      ) : (
        <div className="container">
          <img src={monitorImg} alt="" />
          <div className="text-container">
            <h2 className="heading">Please use Laptop or desktop</h2>
            <p className="para">
              We don&apos;t support small screen yet. Please use laptop or
              desktop for the best experience.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
