import * as authAPI from "./auth-api";

export async function login() {
  try {
    const data = await authAPI.login();
    return data;
  } catch (err) {
    throw err;
  }
}