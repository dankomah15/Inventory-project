import React from "react";
import logo from "./assets/new.png";
import Logo from "./Components/Logo";
import Phone from "./Components/Login";
import phone from "./assets/new.png";
import Belt from "./Components/Signin";
import belt from "./assets/new.png";
import Profile from "./Components/Market";
import profile from "./assets/new.png";
import Purchase from "./Components/Purchase";
function App(){
  const picture = { logo };
  const image = { phone: phone };
  const seed = { belt: belt };
  const shop = { profile: profile };

  return(
    <>
       <Logo {...picture} />
       <Phone {...image} />
       <Belt {...seed} />
      <Profile {...shop} />
      <Purchase />
    </>
  )

  

}

export default App;