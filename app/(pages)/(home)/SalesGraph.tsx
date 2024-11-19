"use client"
import { Line } from "react-chartjs-2"
import "chart.js/auto"


const SalesGraph = () => {
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
        <div className="mt-10 bg-white shadow rounded-lg p-5 ">
            <h2 className="font-semibold text-lg">
                Satış Detayları
            </h2>

            <Line data={data} />


        </div>
    )
}

export default SalesGraph