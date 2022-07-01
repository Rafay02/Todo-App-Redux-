const reducer = (state = 10, action) => {
  if (action.type === "add") {
    return state + action.payload;
  } else if (action.type === "Subs") {
    return state - action.payload;
  } else {
    return state;
  }
};
export default reducer;
