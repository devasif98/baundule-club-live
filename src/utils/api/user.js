import api from "../axios";

// save user
export const saveUser = async (data) => {
  try {
    const res = await api.post("/users", data);
    return res;
  } catch (error) {
    console.error(error.message);
  }
};

// get all users
export const getUsers = async () => {
  try {
    const res = await api.get("/users");
    return res.data;
  } catch (error) {
    console.error(error.message);
  }
};

// get user by email
export const getSingleUser = async (email) => {
  try {
    const res = await api.get(`/users/:${email}`);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

// update user
export const updateUser = async (email) => {
  try {
    const res = await api.put(`/users/:${email}`);
    return res;
  } catch (error) {
    console.error(error);
  }
};

// delete user
export const deleteUser = async (email) => {
  try {
    const res = await api.delete(`/users/:${email}`);
    return res;
  } catch (error) {
    console.error(error);
  }
};
