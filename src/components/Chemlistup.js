import React, {useState, useEffect} from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
const Chemlistup=()=>{
    const [chroll, setChroll]=useState("")
    const [chname, setChname]=useState("")
    const [chmse, setChmse]=useState("")
    const [chmsel, setChmsel]=useState("")
    const [chmsee, setChmsee]=useState("")
    const [chmsell, setChmsell]=useState("")
    const [chpre, setChpre]=useState("")
    const params=useParams();
    const Navigate=useNavigate();
    useEffect(()=>{
        getChemslistDetails();
        
    }, []);
    const getChemslistDetails=async()=>{
        console.log(params);
        let result= await fetch(`http://localhost:4500/prechemlist/${params.id}`)
        result=await result.json();
        setChroll(result.chroll);
        setChname(result.chname);
        setChmse(result.chmse);
        setChmsel(result.chmsel);
        setChmsee(result.chmsee);
        setChmsell(result.chmsell);
        setChpre(result.chpre);
        
    }
    const updatechlist=async()=>{
        console.log(chroll, chname, chmse, chmsel, chmsee, chmsell, chpre)
        let result = await fetch(`http://localhost:4500/chemlistup/${params.id}`,{
            method:"put",
            body:JSON.stringify({chroll, chname, chmse, chmsel, chmsee, chmsell, chpre}),
            headers:{
                "content-Type":"application/json"
            }

        })
        result=await result.json();
        console.log(result);
        Navigate("/")
    }
    return(
        <div className="chemistry">
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
            <button onClick={updatechlist}>add-details</button>

        </div>
    )
}
export default Chemlistup;