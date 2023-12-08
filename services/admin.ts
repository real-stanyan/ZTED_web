// 管理员登录
const adminLogin = async (adminLogin: AdminLogin) => {
  try {
    const req = await fetch(`http://localhost:8080/ZTED/administrator/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(adminLogin),
    });
    const status = req.status;
    const req_json = await req.json();
    return { ...req_json, status };
  } catch (e) {
    console.log(e);
  }
};

// 管理员注册
const adminRegister = async (adminRegister: AdminRegister) => {
  try {
    const req = await fetch(
      ` http://localhost:8080/ZTED/administrator/register`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(adminRegister),
      }
    );
    const status = req.status;
    const req_json = await req.json();
    return { ...req_json, status };
  } catch (e) {
    console.log(e);
  }
};

export { adminLogin, adminRegister };
