import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import React from "react";
import Tabs from "./components/Tabs";
import Profile from "./components/Profile";
import Dates from "./components/Dates";
import { Routes, Route, Link } from "react-router-dom";
import Contactme from "./components/Contactme";
import Footer from "./components/Footer.jsx";

function createEntry(profileTabs) {
  return (
    <div className="bordertabs hvr-pulse-grow" key={profileTabs.id}>
      <Tabs
        key={profileTabs.id}
        logo={profileTabs.logo}
        description={profileTabs.description}
        toclick={profileTabs.toclick}
        toclickemail={profileTabs.toclickemail}
        linker={profileTabs.linker}
      />

      <Link to="/Contactme"></Link>
      <Routes>
        <Route path="/App" element={<App />} />
        <Route path="/Contactme" element={<Contactme />} />
      </Routes>
    </div>
  );
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>
        <a href="" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <Dates />
      <h1 className="maintitle">My Portfolio</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          You have clicked {count} number of times.
        </button>

        {/*mycode*/}
        <dl className="dictionary">{Profile.map(createEntry)}</dl>
      </div>
      <a href="login.jsx">
        <p className="read-the-docs">Still in development</p>
      </a>
      {/*<a href="login.jsx"><p className="read-the-docs">
        Click on the different projects that I have created
      </p></a>*/}
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
