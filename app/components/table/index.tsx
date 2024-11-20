import { getUsers } from "@/utils/api";

const Table = async () => {
    const data = await getUsers();

    return (
        <div>
            <table className="border shadow bg-white w-full rounded-md ">
                <thead>
                    <tr className="border-b">
                        <th className="py-3 px-4">#</th>
                        <th>İsim</th>
                        <th>Eposta</th>
                        <th>Ülke</th>
                        <th>Şehir</th>
                        <th>Eylem</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        data.map((user, key) => (
                            <tr key={user.id} className="border-b" >
                                <td className="py-8 px-4">{key}</td>
                                <td>{user.name}</td>
                                <td>{user.name}</td>
                                <td>{user.name}</td>
                                <td>{user.name}</td>
                                <td>{user.name}</td>

                            </tr>
                        ))
                    }

                </tbody>
            </table>
        </div>
    )
}

export default Table