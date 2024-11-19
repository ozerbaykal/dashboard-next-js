import { sections } from "@/app/Constant";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import NavLink from "./NavLink";


const Navbar = () => {

    return (
        <nav className=" navbar text-2xl border flex flex-col text-gray-500  ">

            <button className="grid place-items-center pt-5 text-2xl">
                <input id="ham" type="checkbox" />
                <label htmlFor="ham"> <RxHamburgerMenu className="cursor-pointer" /></label>

            </button>
            <div className="flex flex-col ">
                {
                    sections.map((item, key) => (

                        <NavLink item={item} key={key} />


                    ))
                }
            </div>
        </nav>
    );
};

export default Navbar;
