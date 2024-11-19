"use client"

import { deleteProduct } from "@/utils/api"
import { Props } from "./Card"
import { useRouter } from "next/navigation"
import { toast } from "react-toastify"


const DeleteButton = ({ id }: { id: number }) => {
    const router = useRouter();

    const handleDelete = () => {

        deleteProduct(id).then(() => {
            //sayfayı yenile (ürünler yeniden alınsın)
            router.refresh()
            toast.success("Ürün kaldırıldı")
        }).catch((err) => {
            console.log(err.message)
            toast.error("Bir hata oluştu")
        }
        )




    }

    return (
        <div>
            <button onClick={handleDelete} className="px-3 py-1 bg-[#f6adad] rounded-md hover:bg-[#df4a4a] transition">
                Sil
            </button>
        </div>
    )
}

export default DeleteButton