import React from "react";

const Belt = ({belt}) => {
    return(
        <div className="flex justify-center items-center h-screen text-white bg-blue-700">
            <div className="text-center flex flex-col items-center space-y-4">
            <div className="">
            <img src={belt} alt="belt" /></div>
            <form>
                <p>Name: <br /> <input type="text" name="username" placeholder="Enter your username" /></p>
                <p>Password: <br /><input type="password" name="password" placeholder="Enter your password" /></p>
                <button>Signin</button>
                <div className="text-center mt-[200px]"><p>your number1 shopping center</p></div>


            </form>
            </div>
        </div>
    );

}
export default Belt;