import { getUserById } from "@/utils/api"
import Link from "next/link"
import { MdClose } from "react-icons/md"

const Modal = async ({ id }: { id: string }) => {

    const data = await getUserById(id)

    const fields = [
        {
            label: "Email",
            value: data.email

        },
        {
            label: "Ülke",
            value: data.address.country

        },
        {
            label: "Şehir",
            value: data.address.city

        },
        {
            label: "Sokak",
            value: data.address.street

        },
        {
            label: "Posta Kodu",
            value: data.address.postal_code

        },
        {
            label: "Telefon No",
            value: data.phone

        },
        {
            label: "Sipariş Sayısı",
            value: data.orders

        },


    ]


    return (
        <div className="fixed bg-black inset-0 z-[99] bg-opacity-50 grid place-items-center">
            <div className="bg-white rounded-lg p-5">

                <Link href="/users">
                    <MdClose />
                </Link>

                <div>
                    {
                        fields.map((field, key) => (
                            <div key={key}>
                                <span>{field.label}</span>


                            </div>

                        ))
                    }
                </div>

            </div>


        </div>
    )
}

export default Modal