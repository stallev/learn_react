import React from 'react';
import Header from './components/Header/Header';
import HeaderContent from './components/HeaderContent/HeaderContent';
import Container from './components/Container/Container';
import Productlist from './components/ProductList/ProductList';


function App() {
  const someAppData = {
    headerData: {
      title: 'My new app',
    }
  }
  return (
    <div className="App">
      <Container>
        <Header
          title={someAppData.headerData.title}
        >
          <HeaderContent />
        </Header>
        
        <Productlist></Productlist>
      </Container>
      
    </div>
  );
}

export default App;
