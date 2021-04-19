import React,{useState} from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { mapStateToProps, mapDispatchToProps } from "actions/registeration/sign-in";
import {DashBoradUrl} from "constant/dash-borad"
import {SignupUrl } from "constant/registeration/sign-up"
const SignIn=(props)=>{

const [email,setEmail]=useState(),
      [password,setPassword]=useState();

      const signIn=()=>{

        props.logIn(password,email).then((res)=>{
            props.history.push(DashBoradUrl)
        })
      }

  return (
    <div className="row">
      <div className="col-md-4"></div>
      <div className="col-md-4">
        <h1>Sign In</h1>
        <input
          type="email"
          className="form-control"
          value={email}
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
       
        <input
          type="password"
          className="form-control"
          placeholder="password"
          value={password}
          onChange={(e) =>setPassword(e.target.value)}
        />
        <br />

        <button
          className="btn btn-primary"
          type="submit"
          onClick={(e) => signIn(e)}
        >
          login
        </button>

        <button
          style={{marginLeft:"20px"}}
          className="btn btn-primary"
          type="submit"
          onClick={(e) => props.history.push(SignupUrl)}
        >
         SignUp
        </button>
      </div>

      <div className="col-md-4"></div>
    </div>
  )
  }
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignIn));
