import { ChevronDown, Hash, Home, Search, Settings } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Image from "next/image";
import { auth } from "@/auth";
import { Skeleton } from "../ui/skeleton";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const items = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Settings",
    url: "/settings",
    icon: Settings,
  },
];

export async function AppSidebar() {
  const session = await auth();
  const applications = [
    {
      title: "Company 1",
      url: "#",
      icon: Hash,
    },
    {
      title: "Company 2",
      url: "#",
      icon: Hash,
    },
  ];
  return (
    <Sidebar>
      <SidebarHeader>
        <div className="px-2 bg-secondary p-2 rounded-lg flex items-center text-sm gap-2">
          <Search size={18} /> <span className="">Search</span>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {items.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>
                  <a href={item.url}>
                    <item.icon />
                    <span>{item.title}</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
          <SidebarGroupLabel className="mt-4 mb-2">
            <div className="flex items-center justify-between w-full">
              <p className="text-sm">Applications</p>
              <ChevronDown />
            </div>
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {applications.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      {session && session?.user && (
        <SidebarFooter>
          <div className="flex bg-secondary rounded-lg w-full justify-between p-2 items-center">
            <Avatar>
              <Image
                src={session.user.image as string}
                alt={session.user.name as string}
                width={32}
                height={32}
                className="rounded-full"
              />
              <AvatarFallback>
                <Skeleton className="h-8 w-8" />
              </AvatarFallback>
            </Avatar>

            <div className="w-[80%]">
              <p className="text-sm">{session.user.name}</p>
              <p className="text-xs font-light line-clamp-1">
                {session.user.email}
              </p>
            </div>
          </div>
        </SidebarFooter>
      )}
    </Sidebar>
  );
}
