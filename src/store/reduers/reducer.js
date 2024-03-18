export const initialState = [];
export const set_All_data = (state = initialState, action) => {
  switch (action.type) {
    case "STORE":
      return [...state, action.payload];
    default:
      return state;
  }
};
