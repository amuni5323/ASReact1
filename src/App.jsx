import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Enterprise from "./pages/Enterprise";
import Feature from "./pages/Feature";
import Home from "./pages/Home";
import Support from "./pages/Support";

function App() {
  return (
   <>
      <Header/>
     
      <main>
        <Home/>
        <Support/>
        <Feature/>
        <Enterprise/>
      </main>
      <Footer />
      </>
  );
}

export default App;
