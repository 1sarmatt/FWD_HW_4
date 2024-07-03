// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import Connect from './components/Connect';
import Photos from './components/Photos';
import Portfolio from './components/Portfolio';
import Joke from './components/Joke';
import ComicPage from "./components/ComicPage";

const App: React.FC = () => {

    return (
        <Router>
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<About />} />
                    <Route path="/photos" element={<Photos />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/contact" element={<Connect />} />
                    <Route path="/ComicPage" element={<ComicPage />} />
                </Routes>
            </main>
        </Router>
    );
};

export default App;

