import Image from "next/image";
import Logo from "../../public/favicon.ico";
import Link from "next/link";

const navlinks = [
    {
        label: "HOME",
        route: "/"
    },
    {
        label: "CANDIDATES",
        route: "/candidate"
    },
    {
        label: "CREAT CANDIDATE",
        route: "/create-candidate"
    }

]



export default function Header() {
    return (
        <header className="py-5 px-10 flex justify-between items-center border-b-2 border-slate-300">
            <Link href={'/'}>
                <Image
                    src={Logo}
                    alt="S"
                    width={25}
                />
            </Link>
            <nav>
                <ul className="flex gap-x-5 text-[14px]">
                    {navlinks.map((link) => {
                        return <li key={link.label}>
                            <Link className="text-slate-800 font-bold" href={link.route}>
                                {link.label}
                            </Link>
                        </li>
                    })}
                </ul>
            </nav>
        </header>
    )
}