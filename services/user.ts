// 用户登陆
const userLogin = async (login: UserLogin) => {
  try {
    const req = await fetch(`http://localhost:8080/ZTED/user/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(login),
    });
    const status = req.status;
    const req_json = await req.json();
    return { ...req_json, status };
  } catch (e) {
    console.log(e);
  }
};

// 用户注册
const userRegister = async (userInfo: UserRegister) => {
  try {
    const req = await fetch(`http://localhost:8080/ZTED/user/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userInfo),
    });
    console.log(req.status);
    return req.status;
  } catch (e) {
    console.log(e);
  }
};

export { userLogin, userRegister };
