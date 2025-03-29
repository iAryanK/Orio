"use client";

import { ChevronDown, Hash, Home, Settings } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { Skeleton } from "../ui/skeleton";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { usePathname } from "next/navigation";

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

export function AppSidebar() {
  const { data: session } = useSession();
  const pathname = usePathname();

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
      {session && session?.user && (
        <SidebarHeader>
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
        </SidebarHeader>
      )}
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {items.map((item) => (
              <SidebarMenuItem
                key={item.title}
                className={`rounded-md ${
                  item.url === pathname &&
                  "bg-blue-600 dark:bg-blue-500 shadow-[2px_4px_16px_0px_rgba(255,255,255,0.2)_inset] text-white"
                }`}
              >
                <SidebarMenuButton
                  asChild
                  className={`${
                    item.url === pathname &&
                    "hover:bg-blue-600 transition-all duration-200 ease-in-out shadow-[2px_4px_16px_0px_rgba(255,255,255,0.2)_inset]"
                  }`}
                >
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
    </Sidebar>
  );
}
