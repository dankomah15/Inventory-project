// import React from "react";
// import logo from "./assets/new.png";
// import Logo from "./Components/Logo";
// import Phone from "./Components/Login";
// import phone from "./assets/new.png";
// import Belt from "./Components/Signin";
// import belt from "./assets/new.png";
// import Profile from "./Components/Market";
// import profile from "./assets/new.png";
// import Purchase from "./Components/Purchase";
// function App(){
//   const picture = { logo };
//   const image = { phone: phone };
//   const seed = { belt: belt };
//   const shop = { profile: profile };

//   return(
//     <>
//        <Logo {...picture} />
//        <Phone {...image} />
//        <Belt {...seed} />
//       <Profile {...shop} />
//       <Purchase />
//     </>
//   )

  

// }

// export default App;

import Form from "./Components/Table";
import React from "react";
import logo from './assets/new.png'; 
import RegisterForm from "./Components/Form";
import Logo from "./Components/Logo";
import StockPurchase from "./Components/Purchase";



function App() {
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