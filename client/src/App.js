import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './index.css'
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import FavoritePage from './pages/FavoritePage';
import AgeVerification from './components/AgeVerification';
import ProfilePage from './pages/Profile/ProfilePage';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';


const client = new ApolloClient({ 
  uri: 'http://localhost:3001/graphql',
  cache: new InMemoryCache()  
});

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
        <ApolloProvider client={client}>
        <div className="App">
          <Router>
            <Header />
            <nav>
              <Link to="/">Home</Link>
              {isAgeVerified && (
                <>
              <Link to="/favorites">Favorites</Link>
              <Link to="/profile">Profile</Link>
              </>
              )}
            </nav>
            <Routes>
              {isAgeVerified ? (
                <>
                  <Route path="/" exact element={<HomePage />} />
                  <Route path="/favorites" element={<FavoritePage />} />
                  <Route path="/profile" element={<ProfilePage />} />
                </>
              ) : (
                <Route path="/*" element={<AgeVerification onConfirm={handleAgeConfirm} onReject={handleAgeReject} />} />
              )}
            </Routes>
            <Footer />
          </Router>
        </div>
        </ApolloProvider>
      );
      
}

export default App;
