import React from "react";
import { useState } from "react";
import { useNavigate} from "react-router-dom";
const Admin=()=>{
    const [tname, settName]=useState("");
    const [sname, setsName]=useState("");
    const [id, setId]=useState("")
    const [tpassword, settPassword]=useState("")
    const [spassword, setsPassword]=useState("")
    const [roll, setRoll]=useState("")
    const navigate=useNavigate();
    
    const teacherHandeler = async()=>{
        console.log(tname,id, tpassword);
        let result= await fetch("http://localhost:4500/teacher",{
            method:"post",
            body: JSON.stringify({tname,id, tpassword}),
            headers:{
                "content-Type":"application/json"
            }
        })
        result=await result.json();
        console.log(result)
        if(result){
            localStorage.setItem("teacher",JSON.stringify(result));
            navigate("/teacher")
        }
    }
    const studentHandaler= async()=>{
        console.log(sname, roll, spassword);
        let result = await fetch("http://localhost:4500/student",{
            method:"post",
            body:JSON.stringify({sname, roll, spassword}),
            headers:{
                "content-Type":"application/json"
            }
        })
        result =await result.json();
        console.log(result);
        if(result){
            localStorage.setItem("student", JSON.stringify(result));
            navigate("/student")
        }
    }
    return(
        <div>
            <h1 className="panel">Admin Panel</h1>
            <div className="admin">
                <div className="teacher">
                    <h2  className="st">Teacher registation</h2>
                    <input type="text" placeholder="Enter teacher name" className="input-box"
                    onChange={(e)=>settName(e.target.value)} value={tname}/>
                    <input type="text" placeholder="Enter teacher id" className="input-box"
                    onChange={(e)=>setId(e.target.value)} value={id}/>
                    <input type="password" placeholder="Enter password" className="input-box"
                    onChange={(e)=>settPassword(e.target.value)} value={tpassword}/>
                    <button onClick={teacherHandeler} className="btn">Register</button>
                </div>
                <div className="student">
                <h2 className="st">Student registation</h2>
                    <input type="text" placeholder="Enter student name" className="input-box"
                    onChange={(e)=>setsName(e.target.value)} value={sname}/>
                    <input type="text" placeholder="Enter rollNumber" className="input-box"
                    onChange={(e)=>setRoll(e.target.value)} value={roll}/>
                    <input type="password" placeholder="Enter password" className="input-box"
                    onChange={(e)=>setsPassword(e.target.value)} value={spassword}/>
                    <button onClick={studentHandaler} className="btn">Register</button>
                </div>
            </div>
        </div>
    )
}
export default Admin;