const reducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_USER":
      return [...state, action.payload];

    case "DELETE_USER":
      return state.filter((user) => {
        return !(
          user.firstName === action.payload.firstName &&
          user.lastName === action.payload.lastName &&
          user.gender === action.payload.gender
        );
      });

    default:
      return state;
  }
};

export default reducer;
