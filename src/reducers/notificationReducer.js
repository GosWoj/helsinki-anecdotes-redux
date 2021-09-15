const notificationReducer = (state = "Notification...", action) => {
  switch (action.type) {
    case "SET_NOTIFICATION":
      return state;
    default:
      return state;
  }
};

export default notificationReducer;
