import { useState, useContext } from "react";
import { Link } from "react-router-dom";

const loggedinUser=()=>{
    //api call tho check authentication
    //if success return true else false
    return false;
}

const Header = () =>{
    const [isLoggedin,setIsLoggedin] = useState(false);
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

            <Link to="/signup">
                <li className="px-2">Signup❓</li>
                </Link>

                <Link to="/login">
                <li className="px-2">Login❓</li>
                </Link>


            </ul>
        </div>
 {/* {(isLoggedin)?<button className="auth py-10" onClick={()=> setIsLoggedin(false)}>Logout</button>:<button className="login" onClick={()=> setIsLoggedin(true)}>Login</button>} */}
        {/* <h1 className="font-bold  py-10">{status?'You are online🟢':'You are offline🔴'}</h1> */}
        {/* <h3 className="py-10 font-bold text-red-900">{`Welcome ${user.name} to FOODGOOD`}</h3> */}
       
    </div>
    )
}

export default Header;