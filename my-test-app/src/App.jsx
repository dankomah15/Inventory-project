import Form from "./Components/Table";
import React from "react";
import logo from './assets/new.png'; 
import RegisterForm from "./Components/Form";
import Logo from "./Components/Logo";
import StockPurchase from "./Components/Purchase";




function App() {
  const phone = {
    logo: logo,
  }
  return (
    <>
    <div>
      <Logo image={logo}/>
      <RegisterForm image={logo}/>
      <Form image={logo} />
    
      <StockPurchase/>
       

    </div>
    </>
  );
}

export default App;