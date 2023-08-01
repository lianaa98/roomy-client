import axios from "axios";

export const verifyAuth = async (jwt: string) => {
  try {
    console.log("verifying auth...")

    const BASE_URL = process.env.BASE_URL;
    console.log("BASE_URL", BASE_URL)

    const verified = await axios.get(`${BASE_URL}/verifyUser`, {
      headers: {
        Authorization: jwt,
      },
    });
  } catch (error) {
    throw new Error("Invalid token");
  }
};
