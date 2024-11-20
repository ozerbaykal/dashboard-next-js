import Title from "@/components/title"
import Form from "@/components/form"


type Props = {
    params: {
        slug: string
    }
}
const Page = ({ params }: Props) => {
    const isAdd = params.slug === "new"

    return (
        <div>
            <Title>{isAdd ? "Yeni Ürün Ekle" : "Ürünü Düzenle"}</Title>
            <Form />

        </div>
    )
}

export default Page