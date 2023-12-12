//获取注册表单
const getRegisterForm = async (adminEmail: string) => {
  try {
    const req = await fetch(
      `http://localhost:8080/ZTED/registerform?adminEmail=${adminEmail}`,
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

//删除注册表单
const deleteRegsiter = async (id: string, adminEmail: string) => {
  try {
    const req = await fetch(
      `http://localhost:8080/ZTED/registration/${id}?adminEmail=${adminEmail}`,
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

export { getRegisterForm, deleteRegsiter };
