const notificationReducer = (state = "", action) => {
  switch (action.type) {
    case "SET_NOTIFICATION":
      return action.text;
    default:
      return state;
  }
};

export const setNotification = (text, duration) => {
  return async (dispatch) => {
    dispatch({
      type: "SET_NOTIFICATION",
      text,
    });
    setTimeout(() => {
      dispatch({
        type: "SET_NOTIFICATION",
        text: "",
      });
    }, duration * 1000);
  };
};

export default notificationReducer;
