const enroll = async (userinfo: UserInfo) => {
  try {
    const req = await fetch(`http://localhost:8080/ZTED/registrationForm`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userinfo),
    });
    const status = req.status;
    const req_json = await req.json();
    return { ...req_json, status };
  } catch (e) {
    console.log(e);
  }
};

export { enroll };
