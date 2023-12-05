"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

import { SearchBar } from "./ui/searchbar";
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

export default function Header() {
  const components: { title: string; href: string; description: string }[] = [
    {
      title: "豫商",
      href: "/docs/primitives/alert-dialog",
      description:
        "A modal dialog that interrupts the user with important content and expects a response.",
    },
    {
      title: "Hover Card",
      href: "/docs/primitives/hover-card",
      description:
        "For sighted users to preview content available behind a link.",
    },
    {
      title: "Progress",
      href: "/docs/primitives/progress",
      description:
        "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    },
    {
      title: "Scroll-area",
      href: "/docs/primitives/scroll-area",
      description: "Visually or semantically separates content.",
    },
    {
      title: "Tabs",
      href: "/docs/primitives/tabs",
      description:
        "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
    },
    {
      title: "Tooltip",
      href: "/docs/primitives/tooltip",
      description:
        "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
    },
  ];
  return (
    <>
      <div className="flex justify-between p-[10px] w-[100vw] bg-header-bg bg-cover">
        <div className="min-w-[10vw]"></div>
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
        <div className="flex items-center pr-[2vw]">
          <SearchBar />
        </div>
      </div>
      <div className="flex justify-center bg-nav-bg bg-cover w-[100vw] p-[10px]">
        <NavigationMenu>
          <NavigationMenuList>
            {/* 首页 */}
            <NavigationMenuItem>
              <NavigationMenuTrigger>首页</NavigationMenuTrigger>
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
                  <ListItem href="/docs" title="Introduction">
                    Re-usable components built using Radix UI and Tailwind CSS.
                  </ListItem>
                  <ListItem href="/docs/installation" title="Installation">
                    How to install dependencies and structure your app.
                  </ListItem>
                  <ListItem
                    href="/docs/primitives/typography"
                    title="Typography"
                  >
                    Styles for headings, paragraphs, lists...etc
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            {/* 关于我们 */}
            <NavigationMenuItem>
              <Link href="/docs" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  关于我们
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            {/* 课程介绍 */}
            <NavigationMenuItem>
              <NavigationMenuTrigger>课程介绍</NavigationMenuTrigger>
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
              <Link href="/docs" legacyBehavior passHref>
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
