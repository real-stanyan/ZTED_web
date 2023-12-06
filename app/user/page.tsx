"use client";

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

export default function User() {
  return (
    <div className="w-[100vw] h-[90vh] bg-user-bg bg-cover">
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        exit={{ opacity: 0, x: -100 }}
        className="absolute right-[10vw] top-[30vh]"
      >
        <Tabs defaultValue="account" className="w-[400px]">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="account">登陆</TabsTrigger>
            <TabsTrigger value="password">注册</TabsTrigger>
          </TabsList>
          <TabsContent value="account">
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
                  <Input id="login_email" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="login_password">密码</Label>
                  <Input id="login_password" />
                </div>
              </CardContent>
              <CardFooter>
                <Button>登陆</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="password">
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
                  <Input id="register_username" type="text" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="register_email">邮箱</Label>
                  <Input id="register_email" type="email" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="register_phone">手机号</Label>
                  <Input id="register_phone" type="text" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="register_password">密码</Label>
                  <Input id="register_password" type="password" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="register_re_password">确认密码</Label>
                  <Input id="register_re_password" type="password" />
                </div>
              </CardContent>
              <CardFooter>
                <Button>注册</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </motion.div>
    </div>
  );
}
