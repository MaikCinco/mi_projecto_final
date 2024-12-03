import React from "react";
import './app.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Auth from "./components/Auth";
import PostForm from "./components/PostForm";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/post" element={<PostForm />} />
      </Routes>
    </Router>
  );
}

export default App;