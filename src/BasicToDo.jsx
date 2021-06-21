import React, { useState } from "react";
import "./todo.css";

function BasicToDo() {
  let myData = [
    { id: 1, name: "Abhishek Dubey", technology: "React js" },
    { id: 2, name: "Bhautik Domaz", technology: " Angular js" },
    { id: 3, name: "Aj Style", technology: "Viw.js" },
  ];

  const [arrayData, setarrayData] = useState(myData);
  console.log(arrayData);

  const removeArray = () => {
    setarrayData([]);
    console.log("Array data is", arrayData);
  };


  const removeElement = (id) =>{
   const newArray =  arrayData.filter((currentElem)=>{
       return currentElem.id !== id
     })

     setarrayData(newArray)
     console.log("afther filltered array is" , arrayData);
  }
  return (
    <div className="main">
      {arrayData.map((value, index) => {
        return (
          <div className="main-div">
            {" "}
            <h1 className="head">
              the name is {value.name} and working technology is{" "}
              {value.technology}
            </h1>
             <button className="delete-btn" onClick={()=>{removeElement(value.id)}}>delete</button>
          </div>
        );
      })}

      <button onClick={removeArray}>clear</button>
    </div>
  );
}

export default BasicToDo;
