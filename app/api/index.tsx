

export const getOrders = async () => {
    try {
        const res = await fetch("http://localhost:3090/orders")
        return res.json()
    } catch (error) {
        console.log(error)

        throw Error("sipariş bilgileri alınırken sorun oluştu")


    }

}