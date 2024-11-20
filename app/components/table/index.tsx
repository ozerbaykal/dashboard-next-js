import { getUsers } from "@/utils/api";
import DeleteButton from "./DeleteButton";
import { FaEye } from "react-icons/fa";
import Link from "next/link";

const Table = async () => {
    const data = await getUsers();

    return (
        <div className="relative w-full overflow-x-auto">
            <table className="border shadow bg-white w-full rounded-md ">
                <thead >
                    <tr className="border-b shadow ">
                        <th className="py-4 px-4 ">#</th>
                        <th className="px-3">İsim</th>
                        <th className="px-3">Eposta</th>
                        <th className="px-3">Ülke</th>
                        <th className="px-3">Şehir</th>
                        <th className="px-3">Eylem</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        data.map((user, key) => (
                            <tr key={user.id} className="border-b" >
                                <td className="py-8 px-4">{key}</td>
                                <td className="py-8 px-4" >{user.name}</td>
                                <td className="py-8 px-4">{user.email}</td>
                                <td className="py-8 px-4">  {user.address.country}</td>
                                <td className="py-8 px-4" >{user.address.city}</td>
                                <td className="flex justify-center py-8 gap-2 ">
                                    <Link href={`?show=${user.id}`} className="border shadow p-2 rounded-md hover:shadow-lg hover:bg-gray-200 transition"><FaEye /></Link>
                                    <DeleteButton id={user.id} />
                                </td>

                            </tr>
                        ))
                    }

                </tbody>
            </table>
        </div>
    )
}

export default Table