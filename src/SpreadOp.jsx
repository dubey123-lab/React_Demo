import React, {useState} from 'react'

const SpreadOp = () => {
    const [myObj, setmyObj] = useState({id : "1" , name : "Abhishek "  , degree : "MCA"})
    console.log(myObj);


    const updateObj = () =>{
        setmyObj({...myObj , name : "yash" , degree : "BCA"})
    }
    return (
        <div>
             <h3>name is {myObj.name} and degree is {myObj.degree}</h3>
             <button onClick={updateObj}>Update</button>
        </div>
    )
}

export default SpreadOp
