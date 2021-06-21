import React, { useState } from 'react';

// const userDetail = (user) => {
//     return <h1> Name is {user.name} and technology is {user.technology} </h1>
// }

function User(props) {
    const [print, setprint] = useState("")
    const [show, setshow] = useState(false)
    const [status, setstatus] = useState(true)
    console.log(props);

    const getName = (e) => {
        setprint(e.target.value)
        console.log("the name is", print);
        setshow(false)
    }

    const showData = () => {
        setshow(true)
    }
    return (
        <div>
            {show ? <h1>{print}</h1> : ""}
            <input type="text" onChange={getName} />
            <button onClick={showData}>print data</button>
            {status ? <h3> Welcome the new Devloper the name is {props.data.name} and working email id is {props.data.email} </h3> : ""}
            <button onClick={() => setstatus(!status)}>Toggle</button>
        </div>
    )
}

export default User