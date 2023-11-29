import React, { useState } from "react";
 const mathdetails=()=>{

    const [mname, setMname]=useState[""]
    const [mroll, setMroll]=useState[""]
    const [mmse, setMmse]=useState[""]
    const [mmsee, setMmsee]=useState[""]
    return (
        <div>
            <input type="text" value={mname} placeholder="placeholsder">your you name </input>
        </div>
    )
 }