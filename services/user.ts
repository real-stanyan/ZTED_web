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

// 获取用户列表
const getUserList = async (adminEmail: string) => {
  try {
    const req = await fetch(
      `http://localhost:8080/ZTED/allUsers?adminEmail=${adminEmail}`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    );
    const status = req.status;
    const req_json = await req.json();
    return { ...req_json, status };
  } catch (e) {
    console.log(e);
  }
};

// 删除用户
const deleteUser = async (userEmail: string, adminEmail: string) => {
  try {
    const req = await fetch(
      `http://localhost:8080/ZTED/user/${userEmail}?adminEmail=${adminEmail}`,
      {
        method: "delete",
        headers: { "Content-Type": "application/json" },
      }
    );
    console.log(req);

    return req;
  } catch (e) {
    console.log(e);
    return { status: 500 };
  }
};

export { userLogin, userRegister, getUserList, deleteUser };
