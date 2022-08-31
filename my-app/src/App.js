import React from 'react';
import Forms from './component/Forms';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Footer from './Footer';

class App extends React.Component{
  render(){
    return(
      <>
      <Header />
      <Forms />
      <Footer />
      </>
    )
  }
}

export default App;
