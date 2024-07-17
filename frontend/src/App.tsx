import { HashRouter, Routes, Route } from "react-router-dom";

import Login from "./component/Login";
import Home from "./component/Home";

import "./App.css";

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
