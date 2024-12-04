import React from "react";
import { Link } from "react-router-dom";

function SignupText() {
  return (
    <>
      <h1>Signup now</h1>
      <p className="fs-5">Or track your existing application.</p>
      <div className="input-group mb-2" style={{ width: "60%" }}>
        <div className="input-group-text">+91</div>
        <input type="text" className="form-control" placeholder="" />
      </div>
      <p>You will receive an OTP on your number</p>
      <button className="p-2 btn btn-primary mb-3" style={{ margin: "auto" }}>
        <Link className="nav-link active mx-2" aria-current="page" to="/signup">
          Continue
        </Link>
      </button>
      <div>
        <Link>Want to open an NRI account?</Link>
      </div>
    </>
  );
}

export default SignupText;
