import { ThemeToggle } from "@/components/shared/ThemeToggle";
import Image from 'next/image';
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Image
      src={"/logo.png"}
      alt="logo"
      width={48}
      height={48}
      className="animate-spin"
      />
      <ThemeToggle />
    </div>
  );
}
