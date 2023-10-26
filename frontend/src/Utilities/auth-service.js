import * as authAPI from "./auth-api";

export async function authLogin(user) {
  try {
    const data = await authAPI.login(user);
    localStorage.setItem("token", data.token);
    return data;
  } catch (err) {
    throw err;
  }
}

export async function checkAuth() {
  try {
    const data = await authAPI.isUserAuth();
    return data
  } catch (err) {
    throw err;
  }
}
