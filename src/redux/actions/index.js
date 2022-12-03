export const addItem = (item) => {
  return {
    type: "ADD",
    payload: item,
  };
};

export const removeItem = (id) => {
  return {
    type: "REMOVE",
    payload: id,
  };
};

export const editItem = (item) => {
  return {
    type: "EDIT",
    payload: item,
  };
};
