export const loginService = async (userInfo) => {
  try {
    const res = await fetch(
      "http://110.74.194.123:8989/api/todo/v1/auth/login",
      {
        method: "POST",
        body: JSON.stringify(userInfo),
        headers: {
          accept: "*/*",
          "Content-Type": "application/json",
        },
      }
    );
    const data = await res.json();
    console.log("login ", data);
    return data;
  } catch (err) {
    console.log("error in login service :", err);
  }
};

export const signUpService = async (userInfo) => {
  const res = await fetch(
    "http://110.74.194.123:8989/api/todo/v1/auth/sign-up",
    {
      method: "POST",
      body: JSON.stringify(userInfo),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const data = await res.json();
  console.log("sign up data ", data);
  return data;
};
