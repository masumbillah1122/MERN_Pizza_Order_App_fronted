import axios from "axios";

export const register = (user) => async (dispatch) => {
  dispatch({ type: "REGISTER_USER_REQUEST" });

  try {
      const res = await axios.post("/api/users/register", user);
      console.log(res);
    dispatch({ type: "REGISTER_USER_SUCCESS"});
  } catch (err) {
    dispatch({ type: "REGISTER_USER_FAIL", payload: err });
  }
};

export const login = (user) => async (dispatch) => {
  dispatch({ type: "LOGIN_USER_REQUEST" });

    try {
      
    const res = await axios.post("/api/users/login", user);
    console.log(res);
    dispatch({ type: "LOGIN_USER_SUCCESS", payload: res.data });
        
        localStorage.setItem("currentUser", JSON.stringify(res.data));
        window.location.href = '/'
    }
    catch (err) {
    dispatch({ type: "LOGIN_USER_FAIL", payload: err });
  }
};

export const logout = () => async (dispatch) => {

  localStorage.removeItem("currentUser");
  localStorage.removeItem("cartItems");
    window.location.href = "/login";
};