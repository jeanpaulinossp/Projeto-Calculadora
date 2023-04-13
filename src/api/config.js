export const USER_POST = (body) => {
  return {
    url: "http://localhost:4000/user",
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    },
  };
};
