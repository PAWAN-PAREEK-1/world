import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "../src/Pages/Home";
import CountryDetail from "../src/Pages/CountryDetail";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/countries/:CountryCode" element={<CountryDetail/>}/>
        <Route path="*" element={<div>404</div>}/>
      </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
