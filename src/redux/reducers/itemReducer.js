const inititalState = [
  {
    id: 1,
    todo: "Sample Item",
  },
];

export const itemReducer = (state = inititalState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD":
      return [...state, payload];
    case "REMOVE": {
      return state.filter((item) => item.id !== payload);
    }
    case "EDIT": {
      return state.map((item) => (item.id === payload.id ? payload : item));
    }
    default:
      return inititalState;
  }
};
