import Image from "next/image"
import Input from "./input"
import Man from "@/assets/images/man.png"
import { BiSolidBellRing } from "react-icons/bi"

const Header = () => {
    return (
        <div className="border p-3 flex justify-between">

            <Input />
            <div className="flex gap-5 items-center" >
                <BiSolidBellRing className="text-xl cursor-pointer" />


                <div className="flex gap-3">
                    <Image src={Man} alt="user" width={40} height={40} className="object-contain" />
                    <div >
                        <p className="font-semibold">Özer Baykal</p>
                        <p>Admin</p>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default Header