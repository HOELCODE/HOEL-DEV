import React from 'react';
import AppRouter from './routes/Router.jsx';

// Components
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';


const App = () => {

  return (
    <>
    <Header />
    <AppRouter />
    <Footer />
    </>
  )
}

export default App
