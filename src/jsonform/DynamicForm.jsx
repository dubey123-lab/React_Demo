import React, { useEffect, useState } from 'react'

import InputFiled from './InputFiled';
import DropDown from './DropDown';

function DynamicForm() {
    const filed = [
        {
            "placeholder": "Enter User Name..",
            "name": "name",
            "input_type": "text",
            "lable" : "Username",
            "required": true
        },
        {
            "placeholder": "Enter User Email..",
            "name": "email",
            "input_type": "email",
            "lable" : "Email",
            "required": true
        },
        {
            "placeholder": "Enter Password..",
            "name": "password",
            "input_type": "password",
            "lable" : "Password",
            "required": true
        },
        {
            "placeholder" : "Select option...",
            "name" : "name",
            "input_type" : "dropdown",
            "lable" : "Technology",
            "required" : true,
            "values" : [
                "React Js",
                "Angular js",
                "Django",
                "flutter"
            ]

        }
    ]
    const [myFiled, setformfiled] = useState({
        username : "",
        email : "",
        password : ""
    }) //// create object


    // useEffect(() => {
    //   setformfiled(filed)
    //   console.log("form array is" , formfiled);
    // }, )

    const handleChange = (e) =>{
         const name = e.target.name;
         const value = e.target.value;
       

        setformfiled({...filed , [name] : value})
        console.log(filed);
    }
    return (
        <>

            <form>
                {filed.map((value) => {
                    if (value.input_type === "text" || value.input_type === "email" || value.input_type === "password") {
                        return <InputFiled
                            name={value.name}
                            placeholder={value.placeholder}
                            type={value.input_type}
                            required={value.required}
                            labledata={value.lable}
                         
                            handleChange = {handleChange}

                        />
                    }

                    // if( value.input_type ="dropdown"){
                    //     return  <DropDown
                    //                name ={value.name}
                    //                placeholder = {value.placeholder}
                    //                type={value.input_type}
                    //                required={value.required}
                    //                lable={value.lable}
                    //                data = {value.values}
                    //             />

                    // }

                    

                })}

                
                <button type="submit">submit</button>
            </form>

        </>
    )
}

export default DynamicForm
