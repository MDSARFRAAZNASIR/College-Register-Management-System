import React from "react";
import { NavLink  } from "react-router-dom";
// import img2 from "./images/admin.png"
const Navbar=()=> {
    return(
        <div>
            <ul className="navbar">
                <li className="link"><NavLink className="Navlink"   to="/" >Home</NavLink ></li>
                <li className="link" ><NavLink className="Navlink"   to="teacher" >Teacher</NavLink ></li>
                <li className="link"> <NavLink  className="Navlink"  to="student" >Student</NavLink ></li>
                {/* <img src="./admin.png"></img> */}
                <li className="link"><NavLink className="Navlink"   to="admin" >Admin</NavLink ></li>
                {/* <li className="link"><NavLink className="Navlink"   to="studentdetail" >StudentDetails</NavLink ></li> */}
            </ul>
        </div>
    )
}
export default Navbar;