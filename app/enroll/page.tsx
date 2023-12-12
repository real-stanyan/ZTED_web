"use client";
import { useState, useEffect } from "react";
import { useToast } from "@/components/ui/use-toast";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { enroll } from "@/services/enroll";

export default function Enroll() {
  const { toast } = useToast();
  const email = useUser((state) => state.user.email);
  const [userinfo, setUserinfo] = useState<UserInfo>({
    registerEmail: email || "",
    name: "",
    phoneNum: "",
    companyName: "",
    position: "",
    annualRevenue: "",
    classType: "",
  });

  const handleEnroll = async () => {
    // 检测表格是否填写完成
    if (
      userinfo.registerEmail === "" ||
      userinfo.name === "" ||
      userinfo.phoneNum === "" ||
      userinfo.companyName === "" ||
      userinfo.position === "" ||
      userinfo.annualRevenue === "" ||
      userinfo.classType === ""
    ) {
      toast({
        variant: "destructive",
        title: "报名失败",
        description: "表格未填写完成",
      });
      return;
    }
    // 发送报名信息
    const res = await enroll(userinfo);
    // 200:"报名成功"
    if (res.status === 200) {
      reset();
      toast({
        title: "报名成功",
        description: "我们将尽快与您联系",
      });
    }
    // 404:"用户未找到"
    if (res.status === 404) {
      toast({
        variant: "destructive",
        title: "报名失败",
        description: "用户未找到",
      });
    }
    // 429:"一个账号最多提交5次报名信息"
    if (res.status === 429) {
      toast({
        variant: "destructive",
        title: "报名失败",
        description: "一个账号最多提交5次报名信息",
      });
    }
    // 400:"Submit failed _"
    if (res.status === 400) {
      toast({
        variant: "destructive",
        title: "报名失败",
        description: "Submit failed",
      });
    }
    // 401:"请重新登陆"
    if (res.status === 401) {
      toast({
        variant: "destructive",
        title: "报名失败",
        description: "请重新登陆",
      });
    }
  };

  const reset = () => {
    setUserinfo({
      registerEmail: email,
      name: "",
      phoneNum: "",
      companyName: "",
      position: "",
      annualRevenue: "",
      classType: "",
    });
  };

  return (
    <Card className="w-[100vw] h-[90vh] px-[25vw]">
      <CardHeader>
        <CardTitle className="font-chinese font-bold text-[2.5vw] text-center">
          课程报名
        </CardTitle>
        {/* <CardDescription>Deploy your new project in one-click.</CardDescription> */}
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-10">
            {/* 姓名 */}
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">姓名</Label>
              <Input
                id="name"
                placeholder="请输入您的姓名"
                onChange={(e) => {
                  setUserinfo({ ...userinfo, name: e.target.value });
                }}
              />
            </div>
            {/* 手机号码 */}
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="phone">手机号码</Label>
              <Input
                id="phone"
                placeholder="请输入您的手机号码"
                onChange={(e) => {
                  setUserinfo({ ...userinfo, phoneNum: e.target.value });
                }}
              />
            </div>
            {/* 企业名称 */}
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="phone">企业名称</Label>
              <Input
                id="phone"
                placeholder="请输入您的企业名称"
                onChange={(e) => {
                  setUserinfo({ ...userinfo, companyName: e.target.value });
                }}
              />
            </div>
            {/* 行业 */}
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="industry">行业</Label>
              <Select
                onValueChange={(e) => {
                  setUserinfo({ ...userinfo, position: e });
                }}
              >
                <SelectTrigger id="industry">
                  <SelectValue placeholder="请选择您的行业" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="金融">金融</SelectItem>
                  <SelectItem value="互联网">互联网</SelectItem>
                  <SelectItem value="房地产">房地产</SelectItem>
                </SelectContent>
              </Select>
            </div>
            {/* 公司年营收 */}
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="income">公司年营收</Label>
              <Select
                onValueChange={(e) => {
                  setUserinfo({ ...userinfo, annualRevenue: e });
                }}
              >
                <SelectTrigger id="income">
                  <SelectValue placeholder="请选择您的公司年营收范围" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="小于 500,000">小于 500,000</SelectItem>
                  <SelectItem value="50,000 - 100,000">
                    50,000 - 100,000
                  </SelectItem>
                  <SelectItem value="100,000 - 500,000">
                    100,000 - 500,000
                  </SelectItem>
                  <SelectItem value="500,000 - 1,000,000">
                    500,000 - 1,000,000
                  </SelectItem>
                  <SelectItem value="大于 1,000,000">大于 1,000,000</SelectItem>
                </SelectContent>
              </Select>
            </div>
            {/* 课程类型 */}
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="course">课程类型</Label>
              <Select
                onValueChange={(e) => {
                  setUserinfo({ ...userinfo, classType: e });
                }}
              >
                <SelectTrigger id="course">
                  <SelectValue placeholder="请选择您想要报名的课程" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="企业转型升级领导力提升高级研修班">
                    企业转型升级领导力提升高级研修班
                  </SelectItem>
                  <SelectItem value="国学研修班">国学研修班</SelectItem>
                  <SelectItem value="普陀山·觉醒">普陀山·觉醒</SelectItem>
                  <SelectItem value="南美商务研学之旅">
                    南美商务研学之旅
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between mt-[2vw]">
        <Button variant="outline" onClick={reset}>
          清空
        </Button>
        <Button onClick={handleEnroll}>提交</Button>
      </CardFooter>
    </Card>
  );
}
