import { combineReducers } from "redux";
import SignInReducer from "./registeration/sign-in";
const allreducers = combineReducers({
  SignIn: SignInReducer,
});

export default allreducers;
