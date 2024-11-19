import { Product } from "@/types";
import Image from "next/image";
import { nunito } from "@/layout";
import DeleteButton from "./DeleteButton";
import Link from "next/link";

export type Props = {
    product: Product;
};

const Card = ({ product }: Props) => {
    return (
        <div
            style={nunito.style}
            className="bg-white  flex flex-col rounded-lg p-2 sm:p-4 shadow "
        >
            <div className="relative h-[200px]">
                <Image
                    src={product.image_url}
                    alt={product.name}
                    fill
                    className="rounded-lg "
                />
            </div>

            <div className="mt-2 flex-1 flex flex-col justify-between">
                <div>

                    <h5 className="font-bold line-clamp-2">{product.name}</h5>
                    <h5 className="text-blue-500 font-semibold">${product.price}</h5>

                </div>

            </div>
            <div className="flex justify-between">
                <Link href={`/products/${product.id}`} className="px-3 py-1 bg-[#E2EAF8] rounded-md hover:bg-[#9db0d1] transition ">
                    Düzenle
                </Link>
                <DeleteButton id={product.id} />

            </div>
        </div>
    );
};

export default Card;
