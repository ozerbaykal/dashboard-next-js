"use client"

import { inputs } from "@/Constant"
import Input from "./Input"
import { FormEvent } from "react"
import { createProduct, editProduct } from "@/utils/api"
import { Product } from "@/types"
import { useRouter } from "next/navigation"
import { toast } from "react-toastify"
import Link from "next/link"

type Props = {
    editItem: Product | undefined,
}


const Form = ({ editItem }: Props) => {

    const router = useRouter()

    //form gönderilince çalışcak fonksiyon
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()


        //form örneği al
        const formData = new FormData(e.target as HTMLFormElement)
        const productData = Object.fromEntries(formData.entries())


        //editItem yoksa yeni ürün oluştur
        if (!editItem) {

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
        } else {
            //editItem varsa ürünü düzenle
            //api isteğinde gönderilcek nesneyi ayarla
            let updatedItem = { ...editItem, ...productData };


            editProduct(updatedItem).then(() => {
                router.push("/products");
                router.refresh();
                toast.info("Ürün başarıyla düzenlendi")

            })
        }


    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col  gap-5 mt-5 max-w-xl">
            {
                inputs.map((item, key) => (
                    //@ts-ignore
                    <Input key={key} item={item} value={editItem ? editItem[item.name] : ""} />


                ))
            }
            <div className="flex justify-end gap-8">
                <Link href={"."} type="button" className="bg-gray-300 py-2 px-5 rounded-lg hover:bg-gray-500 hover:text-white transition">Geri</Link>
                <button type="submit" className="bg-blue-300 py-2 px-5 rounded-lg hover:bg-blue-500 hover:text-white transition">{editItem ? "Kaydet" : "Oluştur"}</button>

            </div>

        </form>
    )
}

export default Form