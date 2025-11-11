import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import LoginPage from './components/LoginPage/LoginPage';
import RegisterPage from './components/RegisterPage/RegisterPage';
import MainPage from './components/MainPage/MainPage';
import GiftDetailsPage from './components/GiftDetailsPage/GiftDetailsPage';
import SearchResults from './components/SearchResults/SearchResults';
// You would also import a Navbar component here

function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/gifts" element={<MainPage />} />
        <Route path="/gifts/:id" element={<GiftDetailsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/search" element={<SearchResults />} />
      </Routes>
    </Router>
  );
}

export default App;
