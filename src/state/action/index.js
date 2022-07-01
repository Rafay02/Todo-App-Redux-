export const countAdd = (number) => {
  return (dispatch) => {
    dispatch({
      type: "add",
      payload: number,
    });
  };
};

export const countSubs = (number) => {
  return (dispatch) => {
    dispatch({
      type: "Subs",
      payload: number,
    });
  };
};
