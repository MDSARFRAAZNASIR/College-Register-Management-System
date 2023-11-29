import React from "react";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
const Chemlisttcr =()=>{
    const [chemList, setChemList]=useState([]);
    useEffect(()=>{
        getchemList();
    },[])
    const getchemList= async()=>{
        let result=await fetch("http://localhost:4500/chemList",{
            headers:{
                "content-Type":"application/json"
            }
        })
        result=await result.json();
        setChemList(result);
       
    }
    console.log("chemList",chemList)
    const chemlistdell=async(id)=>{
        let result= await fetch(`http://localhost:4500/chemlistdel/${id}`,{
            method:"delete",
            headers:{
                "content-Type":"application/json"
            }
        })
        result= await result.json();
        if(result){
            alert("record delete");
            getchemList();
        }
    }

    
    const searchHandel = async (event)=>{
        let key=event.target.value;
        if(key){
            let result = await fetch(`http://localhost:4500/chsear/${key}`);
            result = await result.json();
            if(result){
                setChemList(result)
            }
            
        }else{
            getchemList();
    
        }
    }
    return (
        <div className="studentList">
            <div className="marks Navlink">Mrks-Details of chemistry</div>
            <h1 className="st">Teacher Panel</h1>
            <div>
                <input type="text" placeholder="search a student" onChange={searchHandel}/>
            </div>
            <ul className="sn">
                <li className="tt">S.no</li>
                <li className="rr">S.roll</li>
                <li>S.name</li>
                <li className="mseth">Mse1Th</li>
                <li  className="mseth">Mse1Lb</li>
                <li  className="mseth">Mse2Th</li>
                <li  className="mseth">Mse2Lb</li>
                <li>operation</li>
            </ul>

            {
                chemList.map((item, index)=>
                    <ul>
                        <li>{index+1}</li>
                        <li className="rr">{item.chroll}</li>
                        <li>{item.chname}</li>
                        <li className="mseth">{item.chmse}</li>
                        <li  className="mseth">{item.chmsel}</li>
                        <li  className="mseth">{item.chmsee}</li>
                        <li  className="mseth">{item.chmsell}</li>
                        <li>
                            <button className="delete" onClick={()=>chemlistdell(item._id)}>Delete</button>
                            <button><NavLink className="upbotton" to={"/chemlistup/" +item._id}>Update</NavLink></button>
                            

                        </li>
                    </ul>
                )
            }
        </div>
    )
}
export default Chemlisttcr;