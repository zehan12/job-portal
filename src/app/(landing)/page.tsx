import { ThemeToggle } from "@/components/theme-toggle";
import Image from "next/image";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24 mt-10">
            <h1 className="text-4xl uppercase font-medium text-foreground">
                Job Portal
                <ThemeToggle />
            </h1>
        </main>
    );
}
