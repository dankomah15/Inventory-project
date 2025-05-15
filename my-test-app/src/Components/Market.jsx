import React from "react";

const Profile= ({profile}) => {

    return(
        <body className="bg-blue-700">
            <header>
                <div className="bg-blue-700 text-white">
                <nav className="flex flex-row m-0 p-0 justify-between">
                    <h3 className="flex"><img src={profile} alt="profile" width="50"  height="50"/>FAADAN INVENTORY <br />MANAGEMENT</h3>
                    <ul className="flex flex-row gap-5">
                        <li><a href="">Home</a></li>
                        <li><a href="">About us</a></li>
                        <li><a href="">Services</a></li>
                        <li><a href="">Contact us</a></li>
                    </ul>
                </nav>
                </div>
            </header>
            <main className="bg-blue-700 text-white">
                <h2 className="text-center">CURRENT STOCK LEVEL</h2>
                <table className=" ml-[380px] text-xl">
                   <thead>
                      <tr>
                         <th>Category</th>
                          <th>Product ID</th>
                          <th>Product Name</th>
                          <th>Brand/Details</th>
                          <th>Price(GHC)</th>
                          <th>Quantity in Store</th>
                          </tr>
                   </thead>
                 <tbody>
                  <tr><td>Electronics</td><td>101</td><td>Smartphone</td><td>Samsung</td><td>499</td><td>25</td></tr>
                  <tr><td>Electronics</td><td>102</td><td>Laptop</td><td>Dell</td><td>899</td><td>10</td></tr>
                  <tr><td>Electronics</td><td>103</td><td>Smart TV</td><td>LG</td><td>699</td><td>15</td></tr>
                  <tr><td>Groceries</td><td>104</         td><td>Apples</td><td>Vegetable</td><td>1.50</td><td>30</td></tr>
                  <tr><td>Groceries</td><td>105</    td><td>Tomatoes</td><td>Vegetable</td><td>2</td><td>45</td></tr>
                  <tr><td>Groceries</td><td>106</td><td>Sugar 1Kg</td><td>Condiments</td><td>3</td><td>20</td></tr>
                  <tr><td>Clothing</td><td>107</td><td>Men`s Jacket</td><td>North Face</td><td>100</td><td>15</td></tr>
                  <tr><td>Clothing</td><td>108</td><td>Sports Short</td><td>Nike</td><td>50</td><td>35</td></tr>
                  <tr><td>Clothing</td><td>109</td><td>Women`s Jeans</td><td>Levi`s</td><td>80</td><td>40</td></tr>
                  <tr><td>Books</td><td>110</td><td>Educated</td><td>Tara Westove</td><td>10</td><td>22</td></tr>
                 <tr><td>Books</td><td>111</td><td>Becoming</td><td>Biography</td><td>12</td><td>28</td></tr>
                 <tr><td>Books</td><td>112</td><td>Harry Porter</td><td>Fantasy</td><td>18</td><td>30</td></tr>
                 </tbody>
               </table>
               <div className="ml-[380px]">Do you want to make a purchase?<button>Click here</button></div>

            </main>
            <footer className="flex bg-blue-700 ml-[300px] gap-5 text-white">
                <li>Email:support@FAADAN.org.gh</li>
                <li>Location: Accra,Ghana</li>
                <li>Phone: 0550697240/0206634972</li>



            </footer>

        </body>
    )
}

export default Profile;