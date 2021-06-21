import React from "react";

const DataComponent = (props) => {
  console.log(props);
  return (
    <>
      {props.value.map((value) => {
        return (
          <div className="card" style={{ width: "18rem" }} key={value.id}>
            <img src={value.avatar_url} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">{value.login}</h5>
              <div className="card-div">
                <div className="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
                  <div className="d-flex flex-column">
                    <span className="articles">Articles</span>{" "}
                    <span className="number1">38</span>{" "}
                  </div>
                  <div className="d-flex flex-column">
                    <span className="followers">Followers</span>{" "}
                    <span className="number2">980</span>{" "}
                  </div>
                  <div className="d-flex flex-column">
                    <span className="rating">Rating</span>{" "}
                    <span className="number3">8.9</span>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default DataComponent;
