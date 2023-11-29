import React from "react";
import { useState,useEffect } from "react";
import { NavLink } from "react-router-dom";

const Teacher=()=>{
    const [studetlist, setStudentList] =useState([]);
    useEffect(()=>{
        getStudentList();
    },[])
const getStudentList=async()=>{
    let result= await fetch("http://localhost:4500/studentList",{
        headers:{
            "content-Type":"application/json"
        }
    })
    result= await result.json();
    setStudentList(result)
}
console.log("studentlist", studetlist)
// const prsent=()=>{

// }
// const absent=()=>{

// }
const search= async(e)=>{
    let key=e.target.value;
    if (key){
        let result= await fetch(`http://localhost:4500/searching/${key}`)
        result=await result.json();
        if(result){
            setStudentList(result);
        }
    }else{
        getStudentList();
    }
}
    return (
        <div className="studentListT">
            <div className="marks"><NavLink className="Navlink" to="course" >Mrks-Fillings of Students</NavLink ></div>
            <h1 className="st">Teacher Panel</h1>
            <input type="text" placeholder="search a student" onChange={search}/>
        
            <ul className="sal">
                <li>SN</li>
                <li>RollNumber</li>
                <li>StudentName</li>
                <li>Atd</li>
            </ul>
            {
                studetlist.map((item, index)=>
                <ul>
                    <li>{index+1}</li>
                    <li>{item.roll}</li>
                    <li>{item.sname}</li>
                    <li>
                        <div className="pa">
                            <div> <input className="inpp pr" type="text" placeholder="present"/> </div>
                        </div>
                    
                        {/* <button onClick={prsent}>Prsent</button>
                        <button onClick={absent}>Absent</button> */}
                    </li>
                
                </ul>
                )
            }
        </div>
    )
}
export default Teacher;