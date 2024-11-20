import Title from '@/components/title'
import { getUsers } from '@/utils/api'

const Users = async () => {
    const data = await getUsers();

    return (
        <div>
            <Title>Kullanıcılar</Title>
        </div>
    )
}

export default Users