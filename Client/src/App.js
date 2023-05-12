import React from 'react';
// import './App.css';
import HomeApp from './HomeApp';
import LoginForm from './LoginForm';
import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <Routes>
   <Route path="/" element={<LoginForm />} />
   <Route path="/HomeApp" element={<HomeApp />} />
</Routes>
  );
}

export default App;
