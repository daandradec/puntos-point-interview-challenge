"use client";
type Filter = { first: string; second: string };
type Props = {
    filters: Filter;
};
import generateRandom from "@/lib/generateRandom";
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

function Chart({ filters }: Props) {
    
    const [data, setData] = useState<Array<{x: string, y: number}>>(generateRandom);

    useEffect(() => {
        setData(generateRandom);
    },[filters])

    return (
        <div className="flex justify-center items-center mx-auto lg:block">
            <ApexChart
                options={{
                    xaxis: {
                        categories: [
                            "Lunes",
                            "Martes",
                            "Miercoles",
                            "Jueves",
                            "Viernes",
                            "Sabado",
                            "Domingo"
                        ]
                    }
                }}
                series={[ { data } ]}
                type="bar"
                width="500"
            />
        </div>
    );
}

export default Chart;
