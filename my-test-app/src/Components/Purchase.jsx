import React from "react";

function Purchase (){

    return(
        <div className="flex justify-center items-center h-screen text-white">
            <form>
                <p>Name of Buyer: <br /><input type="buyer" name="buyername"/></p>
                <p>Category of Buy: <br /><input type="category" name="categoryname"/></p>
                <p>Product Name: <br /><input type="productname" name="productname"/></p>
                <p>Brand: <br /><input type="brandname" name="brandname"/></p>
                <p>Quantity to Purchase: <br /><input type="quantityname" name="quantityname"/></p>
                <div className="flex gap-2"><button>Purchase</button>
            <button>Log out</button></div>
            <div className="text-center mt-[200px]"><p>your number1 shopping center</p></div>

            </form>
            
        </div>
    )
}

export default Purchase;