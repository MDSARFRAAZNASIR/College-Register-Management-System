import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
const Csefsch=()=>{
    const [chroll, setChroll]=useState("")
    const [chname, setChname]=useState("")
    const [chmse, setChmse]=useState("")
    const [chmsel, setChmsel]=useState("")
    const [chmsee, setChmsee]=useState("")
    const [chmsell, setChmsell]=useState("")
    const [chpre, setChpre]=useState("")
    const chemdetails=async()=>{
        console.log(chroll, chname, chmse,chmsel, chmsee, chmsell, chpre);
        let result= await fetch("http://localhost:4500/chems",{
            method:"post",
            body:JSON.stringify({chroll, chname, chmse,chmsel, chmsee, chmsell, chpre}),
            headers:{
                "content-Type":"application/json"
            }
        })
        result=await result.json();
        console.log(result);
    }
    return(
        <div className="chemistry">
            <div className="marks"><NavLink className="Navlink" to="chemlisttcr" >Marks-Details Editing</NavLink ></div>
            <h1>chemistry</h1>
            <input type="text" placeholder="Roll" className="cheminput"
            value={chroll} onChange={(e)=>(setChroll(e.target.value))}></input>
            <input type="text" placeholder="Name" className="cheminput"
            value={chname} onChange={(e)=>(setChname(e.target.value))}></input>
            <input type="text" placeholder="mse1Th" className="cheminput"
            value={chmse} onChange={(e)=>(setChmse(e.target.value))}></input>
              <input type="text" placeholder="mse1Lb" className="cheminput"
            value={chmsel} onChange={(e)=>(setChmsel(e.target.value))}></input>
            <input type="text" placeholder="mse2Th" className="cheminput"
            value={chmsee} onChange={(e)=>(setChmsee(e.target.value))}></input>
            <input type="text" placeholder="mse2Lb" className="cheminput"
            value={chmsell} onChange={(e)=>(setChmsell(e.target.value))}></input>
            <input type="text" placeholder="persnt" className="cheminput"
            value={chpre} onChange={(e)=>(setChpre(e.target.value))}></input>
            <button onClick={chemdetails}>add-details</button>

        </div>
    )


}
export default Csefsch;