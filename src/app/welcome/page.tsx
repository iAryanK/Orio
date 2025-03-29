import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import { ThemeToggle } from "@/components/shared/ThemeToggle";
import { auth, signIn } from "@/auth";

const Navbar = async () => {
  const session = await auth();
  console.log(session);

  return (
    <nav className="sticky h-14 inset-x-0 top-0 z-30 w-full border-b-2 border-secondary/5 bg-white/10 dark:bg-black/10 backdrop-blur-lg transition-all motion-preset-slide-down">
      <div className="mx-auto w-full max-w-screen-xl px-2.5 md:px-20">
        <div className="flex h-14 items-center justify-between">
          <Link
            href="/"
            className="flex z-40 font-semibold items-center space-x-2"
          >
            <Image src="/logo.png" alt="logo" width={32} height={32} />
            <span className="font-inconsolata text-2xl hover:motion-preset-stretch motion-loop-once">
              orio
            </span>
          </Link>

          <div className="items-center space-x-4">
            {!session ? (
              <>
                <form
                  action={async () => {
                    "use server";
                    await signIn("google", { redirectTo: "/" });
                  }}
                >
                  <Button
                    type="submit"
                    className={
                      buttonVariants({
                        variant: "secondary",
                        size: "sm",
                      }) +
                      "dark:shadow-[2px_4px_16px_0px_rgba(255,255,255,0.6)_inset cursor-pointer"
                    }
                  >
                    SignIn with Google
                  </Button>
                </form>
              </>
            ) : (
              <>
                <Link
                  href="/"
                  className={buttonVariants({
                    variant: "secondary",
                    size: "sm",
                  })}
                >
                  Dashboard
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

const page = async () => {
  const session = await auth();

  return (
    <main className="overflow-y-scroll max-h-screen max-sm:pb-16">
      <Navbar />

      {/* hero section */}
      <div className="mx-auto w-full max-w-screen-xl px-2.5 md:px-20 mb-12 mt-28 sm:mt-40 flex flex-col items-center justify-center text-center motion-preset-slide-down">
        <div className="mx-auto mb-4 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border bg-white px-6 py-2 shadow-md backdrop-blur transition-all duration-300 ease-in-out hover:bg-white/80 select-none">
          <p className="text-sm font-semibold font-inconsolata text-gray-700">
            orio is now live !
          </p>
        </div>
        <h1 className="max-w-5xl text-5xl font-bold md:text-6xl lg:text-7xl select-none">
          Manage all your job applications on{" "}
          <span className="text-blue-500 font-inconsolata">orio</span>
        </h1>
        <p className="mt-5 max-w-prose text-zinc-700 dark:text-zinc-500 sm:text-lg">
          Struggling to keep track of job applications while applying for
          multiple jobs ? <br className="max-sm:hidden" /> Not anymore !
        </p>

        {!session ? (
          <>
            <form
              action={async () => {
                "use server";
                await signIn("google", { redirectTo: "/" });
              }}
            >
              <button
                type="submit"
                className="mt-5 text-white flex items-center justify-center px-6 py-2 rounded-lg bg-black shadow-[2px_4px_16px_0px_rgba(255,255,255,0.3)_inset] dark:shadow-none hover:bg-black/80 cursor-pointer transition-all duration-200 ease-in-out"
              >
                Get started with orio
                <ArrowUpRight className="ml-2 h-5 w-5" />
              </button>
            </form>
          </>
        ) : (
          <>
            <Link
              href="/"
              className="mt-5 text-white flex items-center justify-center px-6 py-2 rounded-lg bg-black shadow-[2px_4px_16px_0px_rgba(255,255,255,0.3)_inset] dark:shadow-none"
            >
              Get started with orio
              <ArrowUpRight className="ml-2 h-5 w-5" />
            </Link>
          </>
        )}
      </div>

      {/* value proposition section */}
      <div>
        <div className="relative isolate motion-preset-slide-down">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            />
          </div>

          <div>
            <div className="mx-auto max-w-6xl px-6 lg:px-8">
              <div className="mt-16 flow-root sm:mt-24">
                <div className="-m-2 rounded-xl dark:bg-gray-200/5 bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                  <Image
                    src="/ui.png"
                    alt="product preview"
                    width={1364}
                    height={866}
                    quality={100}
                    className="rounded-md bg-white p-2 sm:p-8 md:p-20 shadow-2xl ring-1 ring-gray-900/10"
                  />
                </div>
              </div>
            </div>
          </div>

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="relative left-[calc(50%-13rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-36rem)] sm:w-[72.1875rem]"
            />
          </div>
        </div>
      </div>

      {/* Feature section */}
      <div className="mx-auto mb-32 mt-32 max-w-5xl sm:mt-56  motion-preset-slide-down">
        <div className="mb-12 px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="mt-2 font-bold text-4xl text-secondary-foreground sm:text-5xl">
              Track your job applications with ease
            </h2>
            <p className="mt-4 text-lg text-zinc-600">
              orio helps you keep track of all your job applications in one
              place. No more spreadsheets or sticky notes.
            </p>
          </div>
        </div>

        {/* steps */}
        <ol className="my-8 space-y-4 pt-8 md:flex md:space-x-12 md:space-y-0">
          <li className="md:flex-1">
            <div className="flex flex-col space-y-2 border-secondary mx-2 py-2 px-4 border-2 md:pt-4 rounded-md rounded-tl-2xl rounded-br-2xl hover:bg-secondary/50 transition-all duration-200 h-48">
              <span className="text-sm font-medium text-blue-500">Step 1</span>
              <span className="text-xl font-semibold">Sign up on orio</span>
              <span className="mt-2 text-zinc-500 text-justify">
                Create an account on orio to get started. It&apos;s free and
                takes less than a minute.
              </span>
            </div>
          </li>
          <li className="md:flex-1">
            <div className="flex flex-col space-y-2 border-secondary mx-2 py-2 px-4 border-2 md:pt-4 rounded-md rounded-tl-2xl rounded-br-2xl hover:bg-secondary/50 transition-all duration-200 h-48">
              <span className="text-sm font-medium text-blue-500">Step 2</span>
              <span className="text-xl font-semibold">Link your Documents</span>
              <span className="mt-2 text-zinc-500 text-justify">
                Attach a link to your resume, certificates, and other documents
                so that you can easily find them next time you apply for a job.
              </span>
            </div>
          </li>
          <li className="md:flex-1">
            <div className="flex flex-col space-y-2 border-secondary mx-2 py-2 px-4 border-2 md:pt-4 rounded-md rounded-tl-2xl rounded-br-2xl hover:bg-secondary/50 transition-all duration-200 h-48">
              <span className="text-sm font-medium text-blue-500">Step 3</span>
              <span className="text-xl font-semibold">
                Start tracking applications
              </span>
              <span className="mt-2 text-zinc-500">
                Apply for a job. Just mention it on orio and keep track of the
                status of your application.
              </span>
            </div>
          </li>
        </ol>

        <div className="mx-auto max-w-6xl px-6 lg:px-8 relative">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            />
          </div>
          <div className="mt-16 flow-root sm:mt-24">
            <div
              className="-m-2 rounded-xl bg-gray-200
            /5 dark:bg-gray-800/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4"
            >
              <Image
                src="/ui.png"
                alt="uploading preview"
                width={1419}
                height={732}
                quality={100}
                className="rounded-md bg-white p-2 sm:p-8 md:p-20 shadow-2xl ring-1 ring-gray-900/10"
              />
            </div>
          </div>
        </div>
      </div>

      {/* footer */}
      <footer className="max-w-5xl mx-auto px-6 lg:px-8 py-2 flex items-center justify-between border-t">
        <div className="text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} orio</p>
        </div>
        <ThemeToggle />
      </footer>
    </main>
  );
};

export default page;
