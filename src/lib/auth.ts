const NEXT_PUBLIC_BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const verifyAuth = async (token: string) => {
  try {
    console.log("verifying auth...");
    console.log("token: ", token);

    const verified = await fetch(`${NEXT_PUBLIC_BASE_URL}/verifyUser`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return verified.status;
  } catch (error) {
    throw new Error(`verifyAuth Error: ${error}`);
  }
};

export const loggingIn = async (username: string, password: string) => {
  try {
    const bodyJson = JSON.stringify({
      username,
      password,
    });

    const response = await fetch(`${NEXT_PUBLIC_BASE_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: bodyJson,
    });

    console.log("response", response);

    return response;

  } catch (error) {
    throw new Error(`Login Error: ${error}`);
  }
};