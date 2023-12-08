"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { BiMenu } from "react-icons/bi";
import { FaUser } from "react-icons/fa";

import useUser from "@/stores/useUser";

import { SearchBar } from "./ui/searchbar";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Header() {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(false);
  const username = useUser((state) => state.username);
  const { userLogout } = useUser();
  const components: { title: string; href: string; description: string }[] = [
    {
      title: "企业转型升级领导力提升高级研修班",
      href: "/courses/gaojiyanxui",
      description: "等待课程简介输入...",
    },
    {
      title: "国学研修班",
      href: "/courses/guoxueyanxui",
      description: "等待课程简介输入...",
    },
    {
      title: "普陀山·觉醒",
      href: "/courses/putuoshan",
      description: "等待课程简介输入...",
    },
    {
      title: "南美商务研学之旅",
      href: "/courses/nanmei",
      description: "等待课程简介输入...",
    },
    {
      title: "敬请期待",
      href: "/un",
      description: "等待课程简介输入...",
    },
    {
      title: "敬请期待",
      href: "/un",
      description: "等待课程简介输入...",
    },
  ];

  useEffect(() => {
    if (username !== "") {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, [username]);

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const searchValue = (e.target as HTMLInputElement).value;
      if (searchValue === "123") {
        router.push("/admin");
      }
    }
  };

  return (
    <>
      {/* header for Desktop */}
      <div className="hidden md:flex justify-center items-center p-[10px] w-[100vw] bg-header-bg bg-cover">
        <div className="flex items-center">
          <Image
            src={"/zted_icon.png"}
            alt="header icon"
            height={1000}
            width={1000}
            className="w-[4vw]"
          />
          <h1 className="font-chinese text-[1.5vw] font-bold ml-[1vw]">
            海南志途教育科技有限公司
          </h1>
        </div>
        <div className="flex absolute right-2">
          {/* user dropmenu for Desktop */}
          {isLogin && (
            <div className="flex items-center mr-[1vw]">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    size="icon"
                    className="w-[5vw] p-[1vw]"
                  >
                    <FaUser size="15" />
                    <h1 className="ml-[8px]">{username}</h1>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem
                    onClick={() => {
                      userLogout();
                    }}
                  >
                    退出登陆
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          )}

          {/* user login button for Desktop */}
          {!isLogin && (
            <Button
              variant="outline"
              className="bg-[#8e0804] text-[white] mr-[1vw]"
              onClick={() => router.push("/user")}
            >
              用户登陆
            </Button>
          )}

          <SearchBar onKeyDown={(e) => handleSearch(e)} />
        </div>
      </div>
      {/* nav links for Desktop */}
      <div className="hidden md:flex justify-center bg-nav-bg bg-cover w-[100vw] p-[10px]">
        <NavigationMenu>
          <NavigationMenuList>
            {/* 首页 */}
            <NavigationMenuItem>
              <NavigationMenuTrigger onClick={() => router.push("/")}>
                首页
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink
                      asChild
                      className="flex flex-col items-center"
                    >
                      <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href="/"
                      >
                        <Image
                          src={"/zted_icon.png"}
                          alt="nav_icon"
                          width={1000}
                          height={1000}
                          className="w-[5vw]"
                        />
                        <div className="mb-2 mt-4 text-[1vw] font-chinese font-bold text-center">
                          海南志途教育科技有限公司
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          等待公司简介输入...... 以下内容为测试内容 Lorem ipsum
                          dolor sit amet consectetur adipisicing elit. Beatae
                          quod ratione placeat earum sed, architecto
                          consectetur? Aperiam ipsa totam officiis quasi fugit,
                          facilis ut recusandae animi perspiciatis, obcaecati
                          delectus eum.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <ListItem href="/" title="首页轮播图">
                    等待信息输入......
                  </ListItem>
                  <ListItem href="#news" title="新闻资讯">
                    等待信息输入......
                  </ListItem>
                  <ListItem href="#courseBanner" title="课程介绍">
                    等待信息输入......
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            {/* 关于我们 */}
            <NavigationMenuItem>
              <Link href="/aboutus" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  关于我们
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            {/* 课程介绍 */}
            <NavigationMenuItem>
              <NavigationMenuTrigger onClick={() => router.push("/courses")}>
                课程介绍
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  {components.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    >
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            {/* 新闻与活动 */}
            <NavigationMenuItem>
              <Link href="/docs" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  新闻与活动
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            {/* 课程报名 */}
            <NavigationMenuItem>
              <Link href="/enroll" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  课程报名
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            {/* 联系我们 */}
            <NavigationMenuItem>
              <Link href="/docs" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  联系我们
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      {/* header for Mobile */}
      <div className="flex justify-between md:hidden p-[2vw] bg-header-bg bg-cover">
        <Image
          src={"/zted_icon.png"}
          alt="header icon"
          height={1000}
          width={1000}
          className="w-[12vw]"
        />
        <div className="flex items-center">
          <Button
            variant="outline"
            size="icon"
            className="mr-[1vw]"
            onClick={() => router.push("/user")}
          >
            <FaUser size="15" />
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                {/* Mobile Header Menu */}
                <BiMenu size="20" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => router.push("/")}>
                首页
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => router.push("/aboutus")}>
                关于我们
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => router.push("/courses")}>
                课程介绍
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => router.push("/")}>
                新闻与活动
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => router.push("/enroll")}>
                课程报名
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => router.push("/")}>
                联系我们
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
