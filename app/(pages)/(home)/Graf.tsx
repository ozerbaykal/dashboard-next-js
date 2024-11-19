"use client"

import { Line } from "react-chartjs-2"
import "chart.js/auto"



const Graf = () => {
    const data = {
        labels: ["12-07-2024", "14-07-2024", "14-07-2024"],

        datasets: [
            {
                id: 1,
                label: "Fiyat",
                data: [2700, 3400, 4000]
            },
        ],
    }

    return (
        <div>
            <Line data={data} />
        </div>
    )
}

export default Graf