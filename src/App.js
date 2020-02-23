import React from 'react';
import './App.css';
import Navigation from "./Navigation";
import Home from "./Home";
import {DaDaPovider} from "./Mycontext";



function App() {
  return (
    <div className="App">

        <Navigation />

        <DaDaPovider value="30% Discount Any Order">
         <Home />
        </DaDaPovider>

    </div>
  );
}

export default App;
