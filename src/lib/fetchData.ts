const NEXT_PUBLIC_BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const fetchData = async (
  url: string,
  method: string,
  token?: string,
  body?: any
) => {
  try {
    console.log("fetching data...");
    console.log("url: ", url);
    console.log("method: ", method);
    console.log("token: ", token);
    console.log("body: ", body);

    const response = await fetch(`${NEXT_PUBLIC_BASE_URL}${url}`, {
      method: method,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    console.log("response", response);

    return response.json();
  } catch (error) {
    throw new Error(`fetchData Error: ${error}`);
  }
};
