export const addUserToLocalStorage = (user) => {
  localStorage.setItem("user", JSON.stringify(user));
};

export const getUserFromLocalStorage = () => {
  const user = localStorage.getItem("user");
  if (user) {
    return JSON.parse(localStorage.getItem("user"));
  }
  return null;
};

export const removeUserFromLocalStorage = () => {
  localStorage.removeItem("user");
};
