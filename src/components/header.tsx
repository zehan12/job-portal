import Link from "next/link"
import { Button } from "./ui/button"

export const Header = () => {
    return(
        <header className=" w-full px-10">
            <nav className="py-4 flex justify-between items-center">
                <Link href={"/"}>
                    <img src="ye.png" className="w-20 h-20 rounded-full" />
                </Link>
                <Button variant={"outline"}>login</Button>
            </nav>
        </header>
    )
}