import React from "react";

const index = () => {
  return (
    <>
      <div>
        <input type="text" />
      </div>
      <div className="row">
      <div className=" col s5">James Smith</div>
        <div className="col s7">
          <button>pending request</button>
          <button>Cancel request</button>
        </div>
      </div>
    </>
  );
};

export default index;
