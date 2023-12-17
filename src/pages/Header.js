import { useState, useContext } from "react";
import { Link } from "react-router-dom";



const Logout = () => {
    sessionStorage.removeItem('accessToken');
    window.location.reload();
  }

const Header = () =>{
    return (
        <div className="flex justify-between bg-pink-50 shadow-xl   sm:bg-purple-50" >
        {/* <div className="logo">
            <a href="/">
                <img 
                className="h-24 p-2"
                // src={LOGO_URL} 
                alt="" />
            </a>

        </div> */}
        

        <div className='nav-items'>
            <ul
            className="flex py-10 ">

                <Link to="/">
                    <li className="px-2"  >Home🏠</li>
                </Link>

                {/* <Link to="/about">
                    <li className="px-2">About Us</li>
                </Link> */}

                <Link to="/contact">
                <li className="px-2">Contact Us📞</li>
                </Link>

                <Link to="/about">
                <li className="px-2">About❓</li>
                </Link>
                
                {/* <Link to="/instamart">
                <li className="px-2">Technologies Used💻</li>
                </Link> */}


            {!sessionStorage.getItem('accessToken')     &&
                <Link to="/login">
                <li className="px-2">Login❓</li>
                </Link>}

            {!sessionStorage.getItem('accessToken')     &&
            <Link to="/signup">
                <li className="px-2">Signup❓</li>
                </Link>}



                {sessionStorage.getItem('accessToken')     &&
            <Link to="/sessions">
                <li className="px-2">My Sessions</li>
                </Link>}






            </ul>
        </div>




        

        {
                sessionStorage.getItem('accessToken')
                 &&(
                  <>

            <button
                onClick={Logout}
                className="bg-red-300 hover:bg-red-400 text-white px-4 py-2 rounded-full"
                >
                Logout
                </button>

                  </>
                )
              }


    </div>
    )
}

export default Header;