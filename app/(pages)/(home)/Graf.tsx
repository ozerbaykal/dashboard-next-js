"use client"

import { Line } from "react-chartjs-2"
import "chart.js/auto"
import { Order } from "@/types"



const Graf = ({ data }: { data: Order[] }) => {
    //grafik kütüphanesinin istediği veri formatı

    const gdata = {
        labels: data.map((i) => i.order_date),

        datasets: [
            {
                id: 1,
                label: "Fiyat",
                data: data.map((i) => i.total_price),
            },
        ],
    }

    return (
        <div>
            <Line data={gdata} />
        </div>
    )
}

export default Graf