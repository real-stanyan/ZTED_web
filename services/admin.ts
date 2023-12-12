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

// 获取管理员列表
const getAdminList = async (adminEmail: string) => {
  try {
    const req = await fetch(
      `http://localhost:8080/ZTED/allAdmins?adminEmail=${adminEmail}`,
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

//删除管理员
const deleteAdmin = async (email: string, adminEmail: string) => {
  try {
    const req = await fetch(
      `http://localhost:8080/ZTED/administrator/${email}?adminEmail=${adminEmail}`,
      {
        method: "delete",
        headers: { "Content-Type": "application/json" },
      }
    );

    return req;
  } catch (e) {
    console.log(e);
    return { status: 500 };
  }
};

export { adminLogin, adminRegister, getAdminList, deleteAdmin };
