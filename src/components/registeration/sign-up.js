import React,{useState} from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { mapStateToProps, mapDispatchToProps } from "actions/registeration/sign-in";
import {DashBoradUrl} from "constant/dash-borad"
const SignUp=(props)=>{

  return (
    <div className="row">
      <div className="col-md-4"></div>
      <div className="col-md-4">
        <h1>Sign Up</h1>
        <input
          type="email"
          className="form-control"
          placeholder="email"
         
        />
        <br />
       
        <input
          type="password"
          className="form-control"
          placeholder="password"
         
        />
        <br />

        <button
          className="btn btn-primary"
          type="submit"
        
        >
         SignUp
        </button>
      </div>

      <div className="col-md-4"></div>
    </div>
  )
  }



export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignUp));
