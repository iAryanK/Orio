import { SessionProvider } from "next-auth/react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/shared/AppSidebar";
import Topbar from "@/components/shared/Topbar";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="fix-screen">
      <SessionProvider>
        <SidebarProvider>
          <AppSidebar />
          <main className="w-full relative">
            <Topbar />
            <SidebarTrigger className="absolute bottom-4 right-4" />
            <section className="h-screen w-full overflow-y-scroll py-16 ">
              {children}
            </section>
          </main>
        </SidebarProvider>
      </SessionProvider>
    </div>
  );
}
