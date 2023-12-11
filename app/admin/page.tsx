"use client";

import { useState, useEffect } from "react";
import { useToast } from "@/components/ui/use-toast";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import useUser from "@/stores/useUser";
import useAdmin from "@/stores/useAdmin";
import { useRouter } from "next/navigation";

import { adminLogin, adminRegister } from "@/services/admin";

export default function Admin() {
  const { userLogout } = useUser();
  // const adminName = useAdmin((state) => state.username);
  const { setEmail, setName, setPosition } = useAdmin();
  const adminName = useAdmin((state) => state.admin.username);
  const { toast } = useToast();
  const router = useRouter();
  const [login, setlogin] = useState<AdminLogin>({
    email: "",
    password: "",
  });
  const [register, setregister] = useState<AdminRegister>({
    name: "",
    password: "",
    email: "",
    confirmPassword: "",
    position: "",
  });

  // logout user when enter admin page
  useEffect(() => {
    userLogout();
    if (adminName !== "") {
      router.push("/admin/dashboard");
    }
  }, []);

  // 处理管理员登陆
  const handleLogin = async () => {
    if (login.email === "" || login.password === "") {
      toast({
        variant: "destructive",
        title: "登陆失败",
        description: "表格未填写完成",
      });
      return;
    }
    const req = await adminLogin(login);
    if (req.status === 200) {
      setEmail(req.email);
      setName(req.currentUser);
      setPosition(req.position);
      toast({
        title: `欢迎回来，${req.currentUser}老板`,
      });
      // router.push("/admin/dashboard");
    }
    console.log(req);
  };

  // 处理管理员注册
  const handleRegister = async () => {
    if (
      register.name === "" ||
      register.email === "" ||
      register.password === "" ||
      register.confirmPassword === "" ||
      register.position === ""
    ) {
      toast({
        variant: "destructive",
        title: "注册失败",
        description: "表格未填写完成",
      });
      return;
    }
    const res = await adminRegister(register);
    console.log(res);
    // 200: "管理员注册成功";
    if (res.code === 200) {
      toast({
        title: "Scheduled: Catch up",
        description: "Friday, February 10, 2023 at 5:57 PM",
      });
    }
    // 400:"两次密码输入不匹配"
    if (res.code === 400) {
      toast({
        variant: "destructive",
        title: "注册失败",
        description: "两次密码输入不匹配",
      });
    }
    // 404:"注册邮箱已存在"
    if (res.code === 404) {
      toast({
        variant: "destructive",
        title: "注册失败",
        description: "注册邮箱已存在",
      });
    }
    // 403:"Register failed _"
    if (res.code === 403) {
      toast({
        variant: "destructive",
        title: "注册失败",
        description: "Register failed _",
      });
    }
  };

  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center bg-user-bg bg-cover">
      <Tabs defaultValue="login" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="login">登陆</TabsTrigger>
          <TabsTrigger value="register">注册</TabsTrigger>
        </TabsList>
        {/* 管理员登陆 */}
        <TabsContent value="login">
          <Card>
            <CardHeader>
              <CardTitle>管理员登陆</CardTitle>
              <CardDescription></CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="login_name">用户名</Label>
                <Input
                  id="login_name"
                  onChange={(e) => {
                    setlogin({
                      ...login,
                      email: e.target.value,
                    });
                  }}
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="login_password">密码</Label>
                <Input
                  id="login_password"
                  onChange={(e) => {
                    setlogin({
                      ...login,
                      password: e.target.value,
                    });
                  }}
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={handleLogin}>登陆</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        {/* 管理员注册 */}
        <TabsContent value="register">
          <Card>
            <CardHeader>
              <CardTitle>管理员注册</CardTitle>
              <CardDescription></CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              {/* 管理员注册: 用户名 */}
              <div className="space-y-1">
                <Label htmlFor="register_username">用户名</Label>
                <Input
                  id="register_username"
                  onChange={(e) => {
                    setregister({
                      ...register,
                      name: e.target.value,
                    });
                  }}
                />
              </div>
              {/* 管理员注册: 邮箱 */}
              <div className="space-y-1">
                <Label htmlFor="register_email">邮箱</Label>
                <Input
                  id="register_email"
                  type="email"
                  onChange={(e) => {
                    setregister({
                      ...register,
                      email: e.target.value,
                    });
                  }}
                />
              </div>
              {/* 管理员注册: 密码 */}
              <div className="space-y-1">
                <Label htmlFor="register_password">密码</Label>
                <Input
                  id="register_password"
                  type="password"
                  onChange={(e) => {
                    setregister({
                      ...register,
                      password: e.target.value,
                    });
                  }}
                />
              </div>
              {/* 管理员注册: 确认密码 */}
              <div className="space-y-1">
                <Label htmlFor="register_re_password">确认密码</Label>
                <Input
                  id="register_re_password"
                  type="password"
                  onChange={(e) => {
                    setregister({
                      ...register,
                      confirmPassword: e.target.value,
                    });
                  }}
                />
              </div>
              {/* 管理员注册: 权限 */}
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="level">权限</Label>
                <Select
                  onValueChange={(e) => {
                    setregister({
                      ...register,
                      position: e,
                    });
                  }}
                >
                  <SelectTrigger id="level">
                    <SelectValue placeholder="请选择您的权限" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="1">权限 1</SelectItem>
                    <SelectItem value="0">权限 0</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={handleRegister}>注册</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
