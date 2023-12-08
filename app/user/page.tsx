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

  useEffect(() => {
    console.log(email);
    console.log(username);
  }, [email, username]);

  // 用户登陆
  const handleLogin = async () => {
    const res = await userLogin(login);
    console.log(res);
    if (res.status === 200) {
      setEmail(res.email);
      setName(res.Username);
      toast({
        title: `欢迎回来，${res.Username}老板`,
      });
    }
    if (res.status === 404) {
      toast({
        variant: "destructive",
        title: "登陆失败",
        description: "账户不存在",
      });
    }
  };

  // 用户注册
  const handleRegister = async () => {
    const res = await userRegister(register);
    console.log(res);
    if (res === 200) {
      toast({
        title: "注册成功",
        description: "请前往登陆界面登入账户",
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
                <Button onClick={handleLogin}>登陆</Button>
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
                <Button onClick={handleRegister}>注册</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </motion.div>
    </div>
  );
}
