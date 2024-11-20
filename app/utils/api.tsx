import { Order, Product, User } from "@/types"


export const getOrders = async (): Promise<Order[]> => {
    try {
        const res = await fetch("http://localhost:3090/orders")
        return res.json()
    } catch (error) {
        console.log(error)

        throw Error("sipariş bilgileri alınırken sorun oluştu")


    }

}

export const deleteProduct = async (id: number) => {
    try {
        const res = await fetch(`http://localhost:3090/products/${id}`,

            {
                method: "DELETE"
            });
        return res.json()
    } catch (error) {
        console.log(error)

        throw Error("Ürün kaldırılırken bir sorun oluştu")


    }

}


export const getProducts = async (): Promise<Product[]> => {
    try {
        const res = await fetch("http://localhost:3090/products?_sort=-id",
            {
                cache: "no-store"
            }
        )
        return res.json()

    } catch (error) {
        console.log(error)

        throw Error("Ürün bilgileri alınırken sorun oluştu")


    }

}


export const createProduct = async (data: Product) => {
    try {
        const res = await fetch("http://localhost:3090/products",
            {
                method: "POST",
                body: JSON.stringify(data)
            }
        )
        return res.json()

    } catch (error) {
        console.log(error)

        throw Error("Ürün Eklenirken bir sorun oluştu")


    }

}
export const getProductById = async (id: string): Promise<Product> => {
    try {
        const res = await fetch(`http://localhost:3090/products/${id}`

        )
        return res.json()

    } catch (error) {
        console.log(error)

        throw Error("Ürün bulunmadı")


    }

}

export const editProduct = async (data: Product) => {
    try {
        const res = await fetch(`http://localhost:3090/products/${data.id}`,
            {
                method: "PUT",
                body: JSON.stringify(data)
            }
        )
        return res.json()

    } catch (error) {
        console.log(error)

        throw Error("Ürün Düzenlenirken bir sorun oluştu")


    }

}

export const getUsers = async (): Promise<User[]> => {
    try {
        const res = await fetch(`http://localhost:3090/users`, {
            cache: "no-store"
        }

        )
        return res.json()

    } catch (error) {
        console.log(error)

        throw Error("Ürün Düzenlenirken bir sorun oluştu")


    }

}

export const deleteUser = async (id: string): Promise<User[]> => {
    try {
        const res = await fetch(`http://localhost:3090/users/${id}`,

            {
                method: "DELETE"
            });
        return res.json()
    } catch (error) {
        console.log(error)

        throw Error("Kullancı kaldırılırken bir sorun oluştu")


    }

}

export const getUserById = async (id: string): Promise<User> => {
    try {
        const res = await fetch(`http://localhost:3090/users/${id}`


        )
        return res.json()

    } catch (error) {
        console.log(error)

        throw Error("Kullanıcı bulunamadı")


    }

}




