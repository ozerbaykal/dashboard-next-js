import { sections } from "@/app/Constant";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";


const Navbar = () => {
    return (
        <nav className="text-2xl border  p-5 ">
            <button>
                <RxHamburgerMenu />
            </button>
            <div className="flex flex-col gap-12 mt-10">
                {
                    sections.map((item, key) => (
                        <Link href={item.url || "/"} key={key} className="flex items-center gap-2" >{item.icon} <span>{item.name}</span></Link>

                    ))
                }
            </div>
        </nav>
    );
};

export default Navbar;
