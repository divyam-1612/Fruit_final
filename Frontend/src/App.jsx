import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import AboutUs from "./components/About";
import MyAbout from "./components/MyAbout";
import Translate from "./components/Translate";
import List from "./components/List";
import IndivCard from "./cards/IndivCard";
import Splash from "./components/Splash";
import FAQ from "./components/FAQ";
import ChatUI from "./components/ChatUI";
import TranslatorPage from "./components/TranslatorPage";

const App = () => {
  const [editingFaq, setEditingFaq] = useState(null);

  const handleEdit = (faq) => {
    setEditingFaq(faq);
  };

  const handleSave = () => {
    setEditingFaq(null);
  };

  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Login />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/translate" element={<Translate />} />
        <Route path="/translator" element={<TranslatorPage />} />
        <Route path="/list" element={<List />} />
        <Route path="/indiv" element={<IndivCard />} />
        <Route path="/splash" element={<Splash />} />
        <Route path="/myabout" element={<MyAbout />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/chat" element={<ChatUI />} />
      </Routes>
    </Router>
  );
};

export default App;
