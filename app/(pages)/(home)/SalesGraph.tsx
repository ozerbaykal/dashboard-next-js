import { getOrders } from "@/api"
import Graf from "./Graf"


const SalesGraph = async () => {

    const data = await getOrders()
    return (
        <div className="mt-10 bg-white shadow rounded-lg p-5 ">
            <h2 className="font-semibold text-lg">
                Satış Detayları
            </h2>

            <Graf />


        </div>
    )
}

export default SalesGraph