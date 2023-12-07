import API_BASE_URL from "./ApiBaseUrl";

export async function getUserData() {
  try {
    const response = await fetch(`${API_BASE_URL}/sample/user`);
    if (!response.ok) throw new Error();
    return await response.json();
  } catch (error) {
    console.error(error);
  }
}

export async function getSharedData() {
  try {
    const response = await fetch(`${API_BASE_URL}/sample/folder`);
    if (!response.ok) throw new Error();
    return await response.json();
  } catch (error) {
    console.log(error);
  }
}
