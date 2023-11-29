import React from "react";
import { useState, useEffect } from "react";

const Chemliststd =()=>{
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
            <h1 className="st">Student Panel</h1>
            <div>
                <input type="text" placeholder="search a student" onChange={searchHandel}/>
            </div>
            <ul className="sn">
                <li className="tt">S.no</li>
                <li>S.roll</li>
                <li>S.name</li>
                <li>Mse1Th</li>
                <li>Mse1Lb</li>
                <li>Mse2Th</li>
                <li>Mse2Lb</li>
                
            </ul>

            {
                chemList.map((item, index)=>
                    <ul>
                        <li>{index+1}</li>
                        <li>{item.chroll}</li>
                        <li>{item.chname}</li>
                        <li>{item.chmse}</li>
                        <li>{item.chmsel}</li>
                        <li>{item.chmsee}</li>
                        <li>{item.chmsell}</li>
                        
                    </ul>
                )
            }
        </div>
    )
}
export default Chemliststd;