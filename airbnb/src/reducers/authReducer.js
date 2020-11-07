const initState = {};

export default (state = {}, action) => {
  if (action.type === "REGISTER_ACTION") {
    //returns our auth token
    return action.payload;
  } else if(action.type === "LOGOUT") {
    //does not return the payload, hence destroying the token, logging user out
    return initState;
  }else {
    return state;
  }
} 