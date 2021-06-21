import React, { useState } from 'react';

function FormCom() {

    const [name, setname] = useState("")
    const [tnc, settnc] = useState(false)
    const [intrest, setintrest] = useState("")

    function getFormdata(e){
         e.preventDefault()
         console.log("the  form data is" , name , tnc , intrest);
        
    }
    return (
        <div>
            <form onSubmit={getFormdata}>
                <h3>React handle forms</h3>
                <input type="text" placeholder="Enter Name" onChange={(e)=>setname(e.target.value)} /><br /><br />
                <select onChange={(e)=>setintrest(e.target.value)}>
                    <option>select--</option>
                    <option>Marvel</option>
                    <option>DC</option>
                </select><br /><br />
                <input type="checkbox" onChange={(e)=>settnc(e.target.checked)} /> <span>Accept Terms and Condition</span><br /><br />
                <button type="submit">Submit</button>
            </form>

        </div>
    )
}

export default FormCom