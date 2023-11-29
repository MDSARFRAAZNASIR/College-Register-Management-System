
import image1 from "./images/att.jpg"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Home=()=>{
    const [id, setId]=useState("")
    const [tpassword, settPassword]=useState("")
    const [spassword, setsPassword]=useState("")
    const [roll, setRoll]=useState("")
    const navigate=useNavigate();
    const teacherLoginHandeler= async()=>{
        console.log("id", "tpassword", id, tpassword);
        let result=await fetch("http://localhost:4500/logteacher",{
            method:"post",
            body:JSON.stringify({id, tpassword}),
            headers:{
                "content-Type":"application/json"
            }
        })
        result= await result.json();
        console.log(result);
        if(result.tname){
            localStorage.setItem("teacher", JSON.stringify(result));
            navigate("/teacher")

        }else{
            alert("fill correct data")
        }
    }
    const studentLoginHandaler= async()=>{
        console.log("roll", "spassword", roll, spassword);
        let result=await fetch("http://localhost:4500/logstudent",{
            method:"post",
            body:JSON.stringify({roll, spassword}),
            headers:{
                "content-Type":"application/json"
            }
        })
        result= await result.json();
        console.log(result);
        if(result.sname){
            localStorage.setItem("student", JSON.stringify(result));
            navigate("/student")

        }else{
            alert("fill correct data")
        }

    }

    return (
        <div>
            <h1 className="st">Attendance Manager</h1>
            <div className="box">
                <div className="box11">
                    <h1 className="st">TeacherLogIn</h1>
                    <input type="text" placeholder="Enter your id" className="input-box"
                    onChange={(e)=>setId(e.target.value)} value={id}/><br/><br/>
                    <input type="password" placeholder="Enter password" className="input-box"
                    onChange={(e)=>settPassword(e.target.value)} value={tpassword}/><br/><br/>
                    <button onClick={teacherLoginHandeler} className="btn btnn">LogIn</button>

                </div>
                <div className="box22">
                    <div className="imgr">
                    <img src={image1} alt="Girl in a jacket" width="300" height="350"></img>
                    </div>
                </div>
                <div className="box33">
                    <h1 className="st">StudentLogIn</h1>
                    <input type="text" placeholder="Enter your roll" className="input-box"
                    onChange={(e)=>setRoll(e.target.value)} value={roll}/><br/><br/>
                    <input type="password" placeholder="Enter password" className="input-box"
                    onChange={(e)=>setsPassword(e.target.value)} value={spassword}/><br/><br/>
                    <button onClick={studentLoginHandaler} className="btn btnn">LogIn</button>

                </div>
            </div>
        </div>
    )
}
export default Home;