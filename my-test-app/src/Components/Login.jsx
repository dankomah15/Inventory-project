import React from "react";



const Phone = ({phone}) =>{
    

    return(
           <div className="flex justify-center items-center h-screen bg-blue-700 text-white">
            <div className="text-center flex flex-col items-center space-y-4">
              <div className="">
              <img src={phone} alt="phone"/></div>
              <form>
                <p>Name: <br /> <input type="text" name="name" placeholder="Enter your username" /></p>
                <p>Password: <br /> <input type="password" name="password" placeholder="Enter your password" /></p>
                <input type="password" name="password" placeholder="Confirm your password" />

                <p><button>Create account</button></p>

                <p>Already have an account? <button>Signin</button></p>
            <div className="text-center mt-[200px]"><p>your number1 shopping center</p></div>


              </form>
              </div>
           </div>
           
    );
        
}

export default Phone;





