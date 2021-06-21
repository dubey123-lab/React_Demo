import React, { useEffect, useState } from "react";
import "./card.css";
import DataComponent from "./DataComponent";
import Loader from "./Loader";
const UserData = () => {
  const [userData, setuserData] = useState([]);
  const [Loading, setLoading] = useState(true);

  const getUser = async () => {
    try {
      const response = await fetch("https://api.github.com/users");
      setLoading(false);
      const data = await response.json();
      setuserData(data);
    } catch (error) {
      console.log("my error is", error);
    }
  };
  useEffect(() => {
      setTimeout(()=>{
        getUser();
      }, 3000 )
  
  }, []);

  console.log("userdata", userData);
  return (
    <>
      <div className="container-fluid mt-5">
        <div className="row text-center">
          {Loading ? <Loader /> : <DataComponent value = {userData}/> }
        </div>
      </div>
    </>
  );
};

export default UserData;
