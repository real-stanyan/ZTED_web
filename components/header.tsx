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
import useAdmin from "@/stores/useAdmin";

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
  const [isAdmin, setIsAdmin] = useState(false);
  const username = useUser((state) => state.user.username);
  const adminName = useAdmin((state) => state.admin.username);
  const { userLogout } = useUser();
  const { adminLogout } = useAdmin();
  const components: { title: string; href: string; description: string }[] = [
    {
      title: "北京大学(豫商)企业转型升级领导力提升高级研修班",
      href: "/courses/gaojiyanxui",
      description:
        "豫商在灿烂的华夏文明中孕育而生，立足中原，影响遍及中国和世界，在新时代积聚奋发向上的磅礴力量，成为中原崛起的先锋军，为中国经济的高质量发展注入了生机和活力。北京大学经济学院秉承百年学府经邦济世的人文情怀、深邃的学术思想与深厚的文化底蕴，汇聚中原商业精英，引领全球前沿思想，聚焦企业优化升级，多维度培养中国豫商企业领袖的国际视野与战略格局，弘扬豫商精神，凝聚豫商力量，助力豫商在中国经济高质量发展的征程中开疆拓土，行稳致远，永续辉煌！",
    },
    {
      title: "北京大学现代管理与国学研修班(第3期)",
      href: "/courses/guoxueyanxui",
      description:
        "以铜为镜，可以正衣冠；以古为镜，可以知兴替；以人为镜，可以明得失。国学是取之不尽，用之不竭的思想宝库；世界各国发展的兴衰轮回，留给我们的不仅是文明，也是宏大的视野，和引发深思的智慧之源，蕴含着丰富的管理思想。",
    },
    {
      title: "志途成就学堂·普陀山觉醒禅修会",
      href: "/courses/putuoshan",
      description:
        "领悟禅机浴火重生，勘破商机升级模式；镜鉴佛家智慧，悟得商业真谛，逆境崛起，摆脱无明困惑，王者归来。高僧大德开示，文化大家指导，佛家智慧启迪，寺院沉浸熏染，突破思维框架，赋能企业革新，名师朝夕相伴，贤能智者为友。",
    },
    {
      title: "志途天下·南美文化商务研学",
      href: "/courses/nanmei",
      description:
        "聚焦海外最新思想文化，溯源文明发展脉络，突破思维升级壁垒，以文化带动思维，以学习推动成长。创造性研发商务探访路线，将合作交流、商务会面同人文旅行结合起来，在游中学，在访中谈，助力企业新机遇，创造国际商务新业态。",
    },
  ];

  useEffect(() => {
    if (username !== "") {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
    if (adminName !== "") {
      setIsAdmin(true);
    } else {
      setIsAdmin(false);
    }
  }, [username, adminName]);

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
          {isLogin && !isAdmin && (
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

          {/* admin dropmenu for Desktop */}
          {isAdmin && (
            <div className="flex items-center mr-[1vw]">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    size="icon"
                    className="w-[5vw] p-[1vw]"
                  >
                    <FaUser size="15" />
                    <h1 className="ml-[8px]">{adminName}(管理员)</h1>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem
                    onClick={() => {
                      adminLogout();
                    }}
                  >
                    退出登陆
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          )}
          {/* user login button for Desktop */}
          {!isLogin && !isAdmin && (
            <Button
              variant="outline"
              className="bg-[#8e0804] text-[white] mr-[1vw] p-[1vw]"
              onClick={() => router.push("/user")}
            >
              <h1>用户登陆</h1>
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
                <ul className="grid gap-3 p-6 md:w-[30vw] lg:w-[50vw] lg:grid-cols-[.75fr_1fr]">
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
                          海南志途教育科技有限公司是一家业务多元化的科技教育公司，致力于为不同领域提供专业、创新的教育解决方案。公司以市场化机制服务为核心，通过建立企业智库、整合优质教育资源以及推动文化传播与传媒等业务，为企业和政府提供全面、高效的支持。
                          海南志途教育科技有限公司积极探索市场规律，以客户需求为导向，通过灵活多样的服务模式，为企业提供定制化的解决方案。我们深入了解各行业的特点和需求，以专业的市场洞察和创新的思维，为地方政府提供招商引智咨询及资源对接服务。帮助客户解决实际问题，实现可持续发展。
                          在建立企业智库方面，公司汇聚了一批优秀的专家学者和行业精英，他们具备丰富的实践经验和深厚的理论素养，为企业提供战略规划、管理咨询、市场研究等多元化服务。我们的智库团队通过深入调查和分析，针对企业实际情况提出切实可行的建议，助力企业实现高效运营和持续增长。
                          海南志途教育科技有限公司与国内外多所知名高校、培训机构和行业协会建立了紧密合作关系，引进先进的教育理念和优质的教育资源，为各年龄段的学生和在职人员提供个性化的学习方案。我们致力于推动教育公平，提升教育质量，为社会培养更多优秀人才。
                          在文化传播与传媒方面，公司凭借丰富的媒体经验和卓越的传播能力，为客户提供全方位的传媒解决方案。我们拥有一支专业的策划团队和技术团队，为客户量身打造高品质的文化活动、宣传片、广告等各种形式的媒介内容，帮助客户树立良好的品牌形象和市场口碑。
                          海南志途教育科技有限公司始终坚持以创新引领发展，以服务赢得客户，努力成为行业内的领导者。我们真诚期待与各界朋友携手合作，共创美好未来！
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
                <ul className="grid w-[400px] gap-3 p-4 grid-cols-1 md:w-[500px] lg:w-[600px] ">
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
