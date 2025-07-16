import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Main from './components/main/main';
import Live from './pages/Live';
import Push from './pages/Push';
import LinkPage from './pages/Link';
import Shop from './pages/Shop';
import Packs from './pages/Packs';
import Help from './pages/Help';
import More from './pages/More';

function App() {
    return (
        <div className="App">
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/live" element={<Live />} />
                    <Route path="/push" element={<Push />} />
                    <Route path="/link" element={<LinkPage />} />
                    <Route path="/shop" element={<Shop />} />
                    <Route path="/packs" element={<Packs />} />
                    <Route path="/help" element={<Help />} />
                    <Route path="/more" element={<More />} />
                </Routes>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
