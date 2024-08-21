import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { ThemeToggle } from "../../common/theme-toggle";

export const MainNavigation = () => {
    return (
        <>
            <div className="relative flex items-center max-w-[1200px] mx-auto py-5">
                <nav className="h-full w-full isolate rounded-xl bg-background shadow-lg ring-1 ring-background/5 flex items-center justify-between p-5">
                    <Link href="/" className="flex items-center gap-3">
                        <img className="h-10 w-10 rounded-full" src="ye.png" />
                        <p className="text-2xl font-medium">Job Ops</p>
                    </Link>
                    <div className="flex gap-2">
                        <SignedIn>
                            <UserButton />
                        </SignedIn>
                        <SignedOut>
                            {/* <ul className="flex items-center gap-4">
                                <li>
                                    <Link href={"/sign-in"}>
                                        <Button variant="ghost">Sign In</Button>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={"/sign-up"}>
                                        <Button variant="default">
                                            Sign up
                                        </Button>
                                    </Link>
                                </li>
                            </ul> */}
                        </SignedOut>
                        <ThemeToggle />
                    </div>
                </nav>
            </div>
        </>
    );
};
