import { Order, Product } from "@/types"


export const getOrders = async (): Promise<Order[]> => {
    try {
        const res = await fetch("http://localhost:3090/orders")
        return res.json()
    } catch (error) {
        console.log(error)

        throw Error("sipariş bilgileri alınırken sorun oluştu")


    }

}

export const getProducts = async (): Promise<Product[]> => {
    try {
        const res = await fetch("http://localhost:3090/products")
        return res.json()

    } catch (error) {
        console.log(error)

        throw Error("Ürün bilgileri alınırken sorun oluştu")


    }

}