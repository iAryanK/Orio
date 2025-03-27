import { auth, signOut } from "@/auth";
import { ThemeToggle } from "@/components/shared/ThemeToggle";
import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import { redirect } from "next/navigation";
export default async function Home() {
  const session = await auth();

  if (!session) {
    redirect("/welcome");
  } else
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <Image
          src={"/logo.png"}
          alt="logo"
          width={48}
          height={48}
          className="animate-spin"
        />
        <form
          action={async () => {
            "use server";
            await signOut();
          }}
        >
          <button
            type="submit"
            className={
              buttonVariants({
                variant: "secondary",
                size: "sm",
              }) + "dark:shadow-[2px_4px_16px_0px_rgba(255,255,255,0.6)_inset"
            }
          >
            sign out
          </button>
        </form>
        <ThemeToggle />
      </div>
    );
}
