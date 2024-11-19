import Title from "@/components/title"


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
        </div>
    )
}

export default Page