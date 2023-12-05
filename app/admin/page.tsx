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

import { IoArrowBackCircle } from "react-icons/io5";
import { useRouter } from "next/navigation";

export default function Admin() {
  const router = useRouter();
  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center">
      <div className="absolute top-1 left-1" onClick={() => router.push("/")}>
        <IoArrowBackCircle className="text-[3vw]" />
      </div>

      <Tabs defaultValue="account" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="account">登陆</TabsTrigger>
          <TabsTrigger value="password">注册</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <Card>
            <CardHeader>
              <CardTitle>管理员登陆</CardTitle>
              <CardDescription>
                {/* Make changes to your account here. Click save when you're done. */}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="name">用户名</Label>
                <Input id="name" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="username">密码</Label>
                <Input id="username" />
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
              <CardTitle>管理员注册</CardTitle>
              <CardDescription>
                {/* Change your password here. After saving, you'll be logged out. */}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="current">用户名</Label>
                <Input id="current" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="new">邮箱</Label>
                <Input id="new" type="password" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="new">密码</Label>
                <Input id="new" type="password" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="new">确认密码</Label>
                <Input id="new" type="password" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="new">权限</Label>
                <Input id="new" type="password" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>注册</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
