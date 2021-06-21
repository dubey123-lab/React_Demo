import React , {useState , useEffect} from 'react'
import "./newform.css"

function NewForm() {
     const [myFiled, setmyFiled] = useState({
         username : "",
         email : "",
         phone : "",
         password : ""
     })

     const [newArray , setnewArray] = useState([])
    

     const handleChange = (e) =>{
      const  name = e.target.name;
      const value = e.target.value;

      /// create object
        setmyFiled({...myFiled , [name ]: value})
        console.log(myFiled);
     }


     const handleSubmit = (e) =>{
             e.preventDefault();
             const newRecord = {...myFiled , id: new Date().getTime().toString()}
           
             setnewArray([...newArray , newRecord])
             console.log(newArray);
             setmyFiled({username : "" , email : "" , phone : "" , password : ""})
     }

     useEffect(() => {
         console.log("new Array is" , newArray);
      }, [newArray])
    return (
        <>
            <div className="div1">
                <div className="form-div">

                    <form onSubmit={handleSubmit}>
                        <div class="input-div">
                            <label>UserName</label>
                            <input type="text" name="username" placeholder="Enter UserName" value={myFiled.username}  onChange={handleChange}  autoComplete="off" />
                        </div>

                        <div class="input-div">
                            <label>Email</label>
                            <input type="email" name="email" placeholder="Enter UserName" value={myFiled.email} onChange={handleChange} autoComplete="off"  />
                        </div>

                        <div class="input-div">
                            <label>Mobile Number</label>
                            <input type="text" name="phone" placeholder="Enter UserName" value={myFiled.phone}  onChange={handleChange} autoComplete="off" />
                        </div>

                        <div class="input-div">
                            <label>Password</label>
                            <input type="password" name="password" placeholder="Enter UserName" value={myFiled.password} onChange={handleChange} autoComplete="off"  />
                        </div>

                        <button type="submit" className="btn-submit">Submit</button>

                    </form>
                </div>

                
            </div>
            <div className="display-div">
                  {newArray.map((element)=>{
                      return <div key={element.id}>
                               {element.username}
                               {element.email}
                               {element.phone}
                               {element.password}
                           </div>
                  })}
                </div>

        </>
    )
}

export default NewForm
