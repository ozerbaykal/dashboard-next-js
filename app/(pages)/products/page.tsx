import Title from "@/components/title"
import { getProducts } from "@/utils/api"
import Card from "./Card"
import { Suspense } from "react"
import Loader from "@/components/loaders/Loader"
import { wait } from "@/utils/wait"

const Products = async () => {

    return (
        <div>
            {/* HOC */}
            <Title>Ürünler</Title>

            <Suspense fallback={<Loader />}>
                <List />

            </Suspense>




        </div>
    )
}

//List bileşenini async fonksiyon yaptık istek atılırken diğer Products da title in aynı şekilde kalıp loader ın sadece List componenti yerine basılmasını sağladık bu şekilde
const List = async () => {
    const data = await getProducts()
    await wait()
    return (
        <div>
            {
                data.map((product) => (
                    <Card key={product.id} />
                ))
            }
        </div>
    )

}





export default Products