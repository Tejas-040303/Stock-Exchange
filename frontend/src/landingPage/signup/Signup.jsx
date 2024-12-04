import React from "react";
import SignUpImage from "./SignupImage";
import SignupText from "./SignupText";

function Signup() {
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-8">
            <SignUpImage />
          </div>
          <div className="col-4 mt-5">
            <SignupText />
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
