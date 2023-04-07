import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './index.css'
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import FavoritePage from './pages/FavoritePage';
import AgeVerification from './components/AgeVerification';


function App(){
    const [isAgeVerified, setIsAgeVerified] = useState(false);
    const [showAgeVerification, setShowAgeVerification] = useState(true);

    const handleAgeConfirm = () => {
        setIsAgeVerified(true);
        setShowAgeVerification(false);
    }

    const handleAgeReject = () => {
        setIsAgeVerified(false);
        setShowAgeVerification(false);
    }

    if(showAgeVerification){
        return <AgeVerification onConfirm={handleAgeConfirm} onReject={handleAgeReject} />
    }




    return (
        <div className="App">
          <Router>
            <Header />
            <nav>
              <Link to="/">Home</Link>
              {isAgeVerified && <Link to="/favorites">Favorites</Link>}
            </nav>
            <Routes>
              {isAgeVerified ? (
                <>
                  <Route path="/" exact element={<HomePage />} />
                  <Route path="/favorites" element={<FavoritePage />} />
                </>
              ) : (
                <Route path="/*" element={<AgeVerification onConfirm={handleAgeConfirm} onReject={handleAgeReject} />} />
              )}
            </Routes>
            <Footer />
          </Router>
        </div>
      );
      
}

export default App;
