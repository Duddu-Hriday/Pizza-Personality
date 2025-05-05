import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LoadingScreen from "./pages/LoadingScreen";
import Loading from "./pages/Loading";
import Questions from "./pages/Questions";
import Result from './pages/Result'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/loading" element={<LoadingScreen />} />
         <Route path="/questions/:id" element={<Questions />} />
         <Route path="/result" element={<Result />} />
         <Route path="/loadingscreen" element={<Loading />} />
      </Routes>
    </Router>
  );
}

export default App;
