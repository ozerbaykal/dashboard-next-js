import Title from "@/components/title"
import { getProducts } from "@/utils/api"
import Card from "./Card"
import { Suspense } from "react"
import Loader from "@/components/loaders/Loader"
import { wait } from "@/utils/wait"
import Link from "next/link"

const Products = async () => {

    return (
        <div>
            <div className="flex justify-between mb-3">
                {/* HOC */}
                <Title>Ürünler</Title>
                <Link href="products/new" className="bg-green-500 py-2  px-3 rounded-lg text-white hover:bg-green-600 transition ">Ürün Ekle</Link>

            </div>




            {/* Sadece List compeneti için çalışacak loader */}
            <Suspense fallback={<Loader />}>
                <List />

            </Suspense>




        </div>
    )
}

//List bileşenini async fonksiyon yaptık istek atılırken diğer Products da title in aynı şekilde kalıp loader ın sadece List componenti yerine basılmasını sağladık bu şekilde
const List = async () => {
    const data = await getProducts()
    //await wait()
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {
                data.map((product) => (
                    <Card product={product} key={product.id} />
                ))
            }
        </div>
    )

}





export default Products