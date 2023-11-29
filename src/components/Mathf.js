import React from "react";
import { useState } from "react";
const Mathf=()=>{
    const [mroll, setMroll]=useState("")
    const [mname, setMname]=useState("")
    const [mmse, setMmse]=useState("")
    const [mmsee, setMmsee]=useState("")

    const mathadetails=async()=>{
        console.log(mroll, mname, mmse, mmsee);
        let result= await fetch("http://localhost:4500/mathfs",{
            method:"post",
            body:JSON.stringify({mroll, mname, mmse, mmsee}),
            headers:{
                "content-Type":"application/json"
            }
        })
        result=await result.json();
        console.log(result);
    }


    return(
        <div>
            <h1>math</h1>
            <input type="text" placeholder="roll num"
            value={mroll} onChange={(e)=>(setMroll(e.target.value))}></input>
            <input type="text" placeholder="name"
            value={mname} onChange={(e)=>(setMname(e.target.value))}></input>
            <input type="text" placeholder="mse1"
            value={mmse} onChange={(e)=>(setMmse(e.target.value))}></input>
            <input type="text" placeholder="mse2"
            value={mmsee} onChange={(e)=>(setMmsee(e.target.value))}></input>
            <button onClick={mathadetails}></button>

        </div>
    )

}
export default Mathf;
 