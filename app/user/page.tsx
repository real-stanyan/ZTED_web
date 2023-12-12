"use client";

import { useState, useEffect } from "react";
import useUser from "@/stores/useUser";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";

import { userLogin, userRegister } from "@/services/user";
import { useToast } from "@/components/ui/use-toast";

export default function User() {
  const emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const phoneRegex =
    /^(13[0-9]|14[5-9]|15[0-3,5-9]|16[6]|17[0-8]|18[0-9]|19[8,9])\d{8}$/;

  const { toast } = useToast();
  const email = useUser((state) => state.email);
  const username = useUser((state) => state.username);
  const { setEmail, setName } = useUser();
  const [login, setLogin] = useState<UserLogin>({
    email: "",
    password: "",
  });
  const [register, setRegister] = useState<UserRegister>({
    name: "",
    email: "",
    phoneNum: "",
    password: "",
    confirmPassword: "",
  });

  //处理验证邮箱格式
  function validateEmail(email: string) {
    return emailRegex.test(email.toLowerCase());
  }

  //处理验证手机号格式
  function validatePhone(phone: string) {
    return phoneRegex.test(phone);
  }

  // 用户登陆
  const handleLogin = async () => {
    const res = await userLogin(login);
    // 200:"用户登陆成功"
    if (res.status === 200) {
      setEmail(res.email);
      setName(res.Username);
      toast({
        title: `欢迎回来，${res.Username}老板`,
      });
    }
    // 404:"邮箱不存在，请重新输入或注册"
    if (res.status === 404) {
      toast({
        variant: "destructive",
        title: "登陆失败",
        description: "账户不存在",
      });
    }
    // 429:"请一分钟后再尝试"
    if (res.status === 429) {
      toast({
        variant: "destructive",
        title: "登陆失败",
        description: "请一分钟后再尝试",
      });
    }
    // 400:"邮箱或密码输入错误，请重新输入"
    if (res.status === 400) {
      toast({
        variant: "destructive",
        title: "登陆失败",
        description: "邮箱或密码输入错误",
      });
    }
  };

  // 用户注册
  const handleRegister = async () => {
    // 如果表单为空
    if (
      register.name === "" ||
      register.email === "" ||
      register.phoneNum === "" ||
      register.password === "" ||
      register.confirmPassword === ""
    ) {
      toast({
        variant: "destructive",
        title: "注册失败",
        description: "表格未填写完成",
      });
      return;
    }

    // 如果邮箱格式错误
    if (!validateEmail(register.email)) {
      toast({
        variant: "destructive",
        title: "注册失败",
        description: "邮箱格式错误",
      });
      return;
    }
    // 如果手机号格式错误
    if (!validatePhone(register.phoneNum)) {
      toast({
        variant: "destructive",
        title: "注册失败",
        description: "手机号格式错误",
      });
      return;
    }

    // 如果密码少于6位
    if (register.password.length < 6) {
      toast({
        variant: "destructive",
        title: "注册失败",
        description: "密码少于6位",
      });
      return;
    }

    const res = await userRegister(register);

    // "200": "用户注册成功"
    if (res === 200) {
      toast({
        title: "注册成功",
        description: "请前往登陆界面登入账户",
      });
    }
    // "400": "两次密码输入不匹配"
    if (res === 400) {
      toast({
        variant: "destructive",
        title: "注册失败",
        description: "两次密码输入不匹配",
      });
    }
    // "404": "该邮箱已被注册"
    if (res === 404) {
      toast({
        variant: "destructive",
        title: "注册失败",
        description: "该邮箱已被注册",
      });
    }
  };

  return (
    <div className="w-[100vw] bg-user-bg bg-cover">
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        exit={{ opacity: 0, x: -100 }}
        className="
          w-[100vw] min-h-[90vh] flex justify-center items-center 
         md:right-[10vw] md:top-[30vh]"
      >
        <Tabs
          defaultValue="user_login"
          className="w-[80vw] md:w-[400px] my-[10vw]"
        >
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="user_login">登陆</TabsTrigger>
            <TabsTrigger value="user_register">注册</TabsTrigger>
          </TabsList>
          {/* User Login */}
          <TabsContent value="user_login">
            <Card>
              <CardHeader>
                <CardTitle>用户登陆</CardTitle>
                <CardDescription>
                  {/* Make changes to your account here. Click save when you're done. */}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="login_email">邮箱</Label>
                  <Input
                    id="login_email"
                    onChange={(e) =>
                      setLogin({ ...login, email: e.target.value })
                    }
                  />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="login_password">密码</Label>
                  <Input
                    id="login_password"
                    onChange={(e) =>
                      setLogin({ ...login, password: e.target.value })
                    }
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  onClick={handleLogin}
                  className="py-[1vw] px-[2vw] text-[1.5vw]"
                >
                  登陆
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
          {/* User Register */}
          <TabsContent value="user_register">
            <Card>
              <CardHeader>
                <CardTitle>用户注册</CardTitle>
                <CardDescription>
                  {/* Change your password here. After saving, you'll be logged out. */}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="register_username">用户名</Label>
                  <Input
                    id="register_username"
                    type="text"
                    onChange={(e) =>
                      setRegister({ ...register, name: e.target.value })
                    }
                  />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="register_email">邮箱</Label>
                  <Input
                    id="register_email"
                    type="email"
                    onChange={(e) =>
                      setRegister({ ...register, email: e.target.value })
                    }
                  />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="register_phone">手机号</Label>
                  <Input
                    id="register_phone"
                    type="text"
                    onChange={(e) =>
                      setRegister({ ...register, phoneNum: e.target.value })
                    }
                  />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="register_password">密码</Label>
                  <Input
                    id="register_password"
                    type="password"
                    onChange={(e) =>
                      setRegister({ ...register, password: e.target.value })
                    }
                  />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="register_re_password">确认密码</Label>
                  <Input
                    id="register_re_password"
                    type="password"
                    onChange={(e) =>
                      setRegister({
                        ...register,
                        confirmPassword: e.target.value,
                      })
                    }
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  onClick={handleRegister}
                  className="py-[1vw] px-[2vw] text-[1.5vw]"
                >
                  注册
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </motion.div>
    </div>
  );
}
