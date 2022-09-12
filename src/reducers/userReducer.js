const registerUserReducer = (state = {  }, action) => {
  switch (action.type) {
    case "REGISTER_USER_REQUEST":
      return {
        loading: true,
      };
    case "REGISTER_USER_SUCCESS":
      return {
        loading: false,
        success: true,
      };
    case "REGISTER_USER_FAIL":
      return {
        err: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};



const loginUserReducer = (state = {}, action) => {
  switch (action.type) {
    case "LOGIN_USER_REQUEST":
      return {
        loading: true,
      };
    case "LOGIN_USER_SUCCESS":
      return {
        loading: false,
        success: true,
        currentUser: action.payload,
      };
    case "LOGIN_USER_FAIL":
      return {
        err: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default (registerUserReducer, loginUserReducer);