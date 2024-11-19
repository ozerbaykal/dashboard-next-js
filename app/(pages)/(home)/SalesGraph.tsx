import { getOrders } from "@/utils/api"
import Graf from "./Graf"
import { wait } from "@/utils/wait"


const SalesGraph = async () => {

    const data = await getOrders()

    await wait()

    return (
        <div className="mt-10 bg-white shadow rounded-lg p-5 ">
            <h2 className="font-semibold text-lg">
                Satış Detayları
            </h2>

            <Graf data={data} />


        </div>
    )
}

export default SalesGraph