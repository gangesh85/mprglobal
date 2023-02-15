import { LOGIN } from "./LoginTypes";

const initialState = {
  numOfCakes: 10,
};

const LoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        numOfCakes: state.numOfCakes - action.payload,
      };
    default:
      return state;
  }
};

export default LoginReducer;
