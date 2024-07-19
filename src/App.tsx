import React from "react";
import { Button } from "./components/ui/button";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ComponentTest from "./Pages/ComponentTest";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" />
        <Route path="teste" element={<ComponentTest />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
