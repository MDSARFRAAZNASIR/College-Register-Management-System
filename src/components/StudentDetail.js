// import React from "react";
// import { useState } from "react";

// const StudentDetail=()=>{
//     const [name , setName]=useState("")
//     const [roll, setRoll]=useState("");
//     const [mst, setMst]=useState("")
//     const [msst, setMsst]=useState("");
//     const [msl, setMsl]=useState("");
//     const [mssl, setMssl]=useState("");
//     const [per, setPre]=useState("");
//     const [pro, setPro]=useState("");

//     const details=()=>{
//         console.warn(roll, name,  mst, msl, msst, mssl, per, pro);
//     }


//     return (
//         <div>
//             <h1>Subject:MERN</h1>
//             <input type="text" placeholder="roll" className="stdetailll"
//             onChange={(e)=>setRoll(e.target.roll)} value={roll}/>
//             <input type="text" placeholder="Name" className="stdetaill"
//             onChange={(e)=>setName(e.target.name)} value={name}/>
//             <input type="text" placeholder="Mse1 Th" className="stdetail"
//             onChange={(e)=>setMst(e.target.mst)} value={mst}/>
//             <input type="text" placeholder="Mse1 Lab" className="stdetail"
//             onChange={(e)=>setMsl(e.target.msl)} value={msl}/>
//             <input type="text" placeholder="Mse2 Th" className="stdetail"
//             onChange={(e)=>setMsst(e.target.msst)} value={msst}/>
//             <input type="text" placeholder="Mse2 Lab" className="stdetail"
//             onChange={(e)=>setMssl(e.target.mssl)} value={mssl}/>
//             <input type="text" placeholder="Per" className="stdetail"
//             onChange={(e)=>setPre(e.target.per)} value={per}/>
//             <input type="text" placeholder="Pro" className="stdetail"
//             onChange={(e)=>setPro(e.target.pro)} value={pro}/><br/>
//             <button onClick={details}>Add-Details</button>

//         </div>
//     )
// }
// export default StudentDetail;