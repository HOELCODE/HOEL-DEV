import React from 'react';
import AppRouter from './routes/Router.jsx';

// Components
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Shape from './components/Shape.jsx';


const App = () => {

  return (
    <>

      <Header />
      <Shape>
        <AppRouter />
      </Shape>
      <Footer />

    </>
  )
}

export default App
