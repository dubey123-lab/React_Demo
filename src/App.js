import react, { useState } from "react";
import "./App.css";
import BasicToDo from "./BasicToDo";
import Greting from "./condition/Greting";
import FormCom from "./FromCom";
import User from "./User";
import SpreadOp from "./SpreadOp";
import NewForm from "./NewForm";
import DynamicForm from "./jsonform/DynamicForm"
import UserData from "./fetchapi/UserData";
function App() {
  // defind state

  // const [Data, setData] = useState({name : "Abhishek Dubey" ,  email: "dubeyabhishek1111@gmail.com" });
  // console.log("the object data is " , Data);

  // const updateData = () => {
  //   setData({
  //     name: "aj style",
  //     email: "style23@gmail.com",
  //   });
  // };

  return (
    <div className="App">
      {/* <SpreadOp /> */}
        {/* <DynamicForm /> */}
        <UserData />
      {/* <NewForm /> */}
      {/* <Greting isLogin={true}/> */}
      {/* <FormCom/> */}
      {/* <User  data = {Data} />
      <button onClick={() => updateData()}>Update Data</button> */}
    </div>
  );
}

export default App;
