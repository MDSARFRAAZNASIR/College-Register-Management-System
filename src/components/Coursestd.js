import React from "react";
import { NavLink } from "react-router-dom";
// import StudentDetail from "./StudentDetail";
const Coursestd=()=>{
    return(
        <div>
            <h1>Courses</h1>
            <h3>Wel Come To you the engenering block</h3>
            <div  className="courses">
                <div className="cse">
                    <h2>CSE</h2>
                    <div className="cvsem"><NavLink className="Navlink"   to="csefssubstd" >Ist/2nd-Sem</NavLink ></div>
                    <div className="cvsemm"><NavLink className="Navlink"   to="csefssub" >3st-Sem</NavLink ></div>
                    <div className="cvsem"><NavLink className="Navlink"   to="csefssub" >4st-Sem</NavLink ></div>
                    <div className="cvsemm"><NavLink className="Navlink"   to="csefssub" >5st-Sem</NavLink ></div>
                    <div className="cvsem"><NavLink className="Navlink"   to="csefssub" >6st-Sem</NavLink ></div>
                    <div className="cvsemm"><NavLink className="Navlink"   to="csefssub" >7st-Sem</NavLink ></div>
                    <div className="cvsem"><NavLink className="Navlink"   to="csefssub" >8st-Sem</NavLink ></div>
                </div>
                <div className="mech">
                    <h2>MECH</h2>
                    <div></div>
                    <div className="cvsemm"><NavLink className="Navlink"   to="course" >Ist/2nd-Sem</NavLink ></div>
                    <div className="cvsem"><NavLink className="Navlink"   to="course" >3st-Sem</NavLink ></div>
                    <div className="cvsemm"><NavLink className="Navlink"   to="course" >4st-Sem</NavLink ></div>
                    <div className="cvsem"><NavLink className="Navlink"   to="course" >5st-Sem</NavLink ></div>
                    <div className="cvsemm"><NavLink className="Navlink"   to="course" >6st-Sem</NavLink ></div>
                    <div className="cvsem"><NavLink className="Navlink"   to="course" >7st-Sem</NavLink ></div>
                    <div className="cvsemm"><NavLink className="Navlink"   to="course" >8st-Sem</NavLink ></div>
                </div>
                <div className="civil">
                    <h2>CIVIL</h2>
                    <div className="cvsem"><NavLink className="Navlink"   to="course" >Ist/2nd-Sem</NavLink ></div>
                    <div className="cvsemm"><NavLink className="Navlink"   to="course" >3st-Sem</NavLink ></div>
                    <div className="cvsem"><NavLink className="Navlink"   to="course" >4st-Sem</NavLink ></div>
                    <div className="cvsemm"><NavLink className="Navlink"   to="course" >5st-Sem</NavLink ></div>
                    <div className="cvsem"><NavLink className="Navlink"   to="course" >6st-Sem</NavLink ></div>
                    <div className="cvsemm"><NavLink className="Navlink"   to="course" >7st-Sem</NavLink ></div>
                    <div className="cvsem"><NavLink className="Navlink"   to="course" >8st-Sem</NavLink ></div>
                  
                </div>
            </div>
        </div>
    )
}
export default Coursestd;