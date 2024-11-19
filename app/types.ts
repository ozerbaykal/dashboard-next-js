export type Order = {
    order_id: number,
    user_id: number,
    order_date: string,
    status: "Shipped " | "Deliverd" | "Processing",
    total_price: number,
    shipping_address: {
        street: string
        city: string,
        postal_code: string,
        country: string,
    },
    items: [
        {
            product_id: number,
            name: string,
            quantity: number,
            price: number
        }
    ],
    id: string
}