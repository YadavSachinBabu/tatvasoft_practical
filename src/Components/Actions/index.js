export const addUser = (data) => {
  return {
    type: "ADD_USER",
    payload: data,
  };
};

export const deleteUser = (id) => {
  return {
    type: "DELETE_USER",
    payload: id,
  };
};
