import React from "react";

const index = () => {
  return (
    <div className="container center">
      <div>PENDING REQUESTS</div>
      <div>incoming</div>
      <div className="row">
      <div className=" col s5">James Smith</div>
        <div className="col s7">
          <button>Accept</button>
          <button>Ignore</button>
        </div>
      </div>
      <div>Outgoing</div>
      <div className="row">
      <div className=" col s5">James Smith</div>
        <div className="col s7">
          <button>pending request</button>
          <button>Cancel request</button>
        </div>
      </div>
      <div>Friends</div>
      <div className="row"> 
      <div className=" col s5">James Smith</div>
        <div className="col s7">
          <button>pending request</button>
          <button>Cancel request</button>
        </div>
      </div>
    </div>
  );
};

export default index;
