import React from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import BodyContent from './components/BodyContent';

const App = () => {
 

  return (
    <div>
      <BodyContent>
        <Header 
        title="Multipurpose Bootstrap 5 E-Commerce Template"  
        description="Esempio di pagina React." />
        <MainContent />
      </BodyContent>
    </div>
  );
}

export default App;
