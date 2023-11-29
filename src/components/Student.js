import React from "react";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
const Student =()=>{
    const [studentList, setStudentList]=useState([]);
    useEffect(()=>{
        getstudentList();
    },[])
    const getstudentList= async()=>{
        let result=await fetch("http://localhost:4500/studentList",{
            headers:{
                "content-Type":"application/json"
            }
        })
        result=await result.json();
        setStudentList(result);
       
    }
    console.log("studentList",studentList)

    const searchHandel = async (event)=>{
        let key=event.target.value;
        if(key){
            let result = await fetch(`http://localhost:4500/searching/${key}`);
            result = await result.json();
            if(result){
                setStudentList(result)
            }
            
        }else{
            getstudentList();
    
        }
    }
    return (
        <div className="studentList">
             <div className="marks"><NavLink className="Navlink" to="coursestd" >Mrks-Details of students</NavLink ></div>
            <h1 className="st">Student Panel</h1>
            <div>
                <input type="text" placeholder="search a student" onChange={searchHandel}/>
            </div>
            <ul className="sn">
                <li className="tt">S.no</li>
                <li>S.roll</li>
                <li>S.name</li>
            </ul>

            {
                studentList.map((item, index)=>
                    <ul>
                        <li>{index+1}</li>
                        <li>{item.roll}</li>
                        <li>{item.sname}</li>
                    </ul>
                )
            }
        </div>
    )
}
export default Student;