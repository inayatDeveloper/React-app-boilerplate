import axios from "axios";
import { ReqLogin, SuccessLogin, FailedLogin,LoginUrl } from "constant/registeration/sign-in";
import {callApi} from "utils/call-api";
import { login } from 'utils/check-token';

export const mapStateToProps = (state) => {
  return { User: state.SignIn };
};

let reqLogin = () => {
  return {
    type: ReqLogin,
  };
};

let loginSuccess = (Response) => {
  return {
    type: SuccessLogin,
    data: Response,
  };
};

let logInFailed = (err) => {
  return {
    type: FailedLogin,
    error: err,
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    logIn: async (password, email) => {
      try {
        dispatch(reqLogin());

        callApi(LoginUrl,'post',null,{email,password}).then((res)=>{
          dispatch(loginSuccess({email}));
          login()
          return "success"
        }).catch((error)=>{
          dispatch(logInFailed(error));
        })

      } catch (error) {
        dispatch(logInFailed(error));
      }
    },
  };

 
    
};
