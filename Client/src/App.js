import React from "react";
// import './App.css';
import HomeApp from "./HomeApp";
import LoginForm from "./LoginForm";
import Register from "./Register";
import { Routes, Route } from "react-router-dom";
import { Cursor } from "./Cursor";

function App() {
  

  useEffect(() => {
    window.addEventListener("mousemove", dotCursor);

  

    return () => {
      window.removeEventListener("mousemove", dotCursor);
    };
  }, []);

  return (
    <Routes>
    
      <Route path="/" element={<LoginForm />} />
      <Route path="/Register" element={<Register />} />
      {/* <Route path="/" element={<Register />}/> */}
      <Route path="/HomeApp" element={<HomeApp />} />
      <Cursor />
    </Routes>

    
  );
}

export default App;
