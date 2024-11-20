import Title from "@/components/title"
import Form from "@/components/form"
import { getProductById } from "@/utils/api"


type Props = {
    params: {
        slug: string
    }
}
const Page = async ({ params }: Props) => {
    const isAdd = params.slug === "new"

    //Eğer düzenleme modunaysak düzenlenecek elemanın verilerini api'dan almamız lazım
    let editItem;
    if (!isAdd) {
        //api'dan alacağımız product bilgileri için url'den aldığımız (params.slug) id bilgisini bu işlemi gerçekleştirecek olan fonksiyona parametre olarak gönderiyoruz
        editItem = await getProductById(params.slug)




    }

    return (
        <div>
            <Title>{isAdd ? "Yeni Ürün Ekle" : "Ürünü Düzenle"}</Title>
            <Form editItem={editItem} />

        </div>
    )
}

export default Page