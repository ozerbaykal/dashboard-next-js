"use client"

import { inputs } from "@/Constant"
import Input from "./Input"
import { FormEvent } from "react"
import { createProduct } from "@/utils/api"
import { Product } from "@/types"
import { useRouter } from "next/navigation"
import { toast } from "react-toastify"

const Form = () => {

    const router = useRouter()
    //form gönderilince çalışcak fonksiyon
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()


        //form örneği al

        const formData = new FormData(e.target as HTMLFormElement)
        const productData = Object.fromEntries(formData.entries())

        //resim değişmesi için rasgele sayı belirle
        const id = Math.round(Math.random() * 100)
        //resim ekle
        productData.image_url = `https://picsum.photos/seed/${id}/500/500`


        //varsayılan rating ve yorum sayısını belirle
        // @ts-ignore
        productData.rating = 0;
        // @ts-ignore
        productData.reviews_count = 0;




        //api ye ekleme isteği at
        createProduct(productData as unknown as Product).then(() => {
            router.push("/products");
            router.refresh();
            toast.success("Ürün başarıyla eklendi")

        })


    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-5 mt-5 max-w-xl">
            {
                inputs.map((item, key) => (
                    <Input key={key} item={item} />


                ))
            }
            <div className="flex justify-end gap-8">
                <button type="button" className="bg-gray-300 py-2 px-5 rounded-lg hover:bg-gray-500 hover:text-white transition">Geri</button>
                <button type="submit" className="bg-blue-300 py-2 px-5 rounded-lg hover:bg-blue-500 hover:text-white transition">Kaydet</button>

            </div>

        </form>
    )
}

export default Form