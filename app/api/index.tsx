import { Order } from "@/types"


export const getOrders = async (): Promise<Order[]> => {
    try {
        const res = await fetch("http://localhost:3090/orders")
        return res.json()
    } catch (error) {
        console.log(error)

        throw Error("sipariş bilgileri alınırken sorun oluştu")


    }

}