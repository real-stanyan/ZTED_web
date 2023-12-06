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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Enroll() {
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
              <Input id="name" placeholder="请输入您的姓名" />
            </div>
            {/* 手机号码 */}
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="phone">手机号码</Label>
              <Input id="phone" placeholder="请输入您的手机号码" />
            </div>
            {/* 企业名称 */}
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="phone">企业名称</Label>
              <Input id="phone" placeholder="请输入您的企业名称" />
            </div>
            {/* 行业 */}
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="industry">行业</Label>
              <Select>
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
              <Select>
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
              <Select>
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
        <Button variant="outline">清空</Button>
        <Button>提交</Button>
      </CardFooter>
    </Card>
  );
}
