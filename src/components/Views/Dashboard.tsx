"use client";
import { useState } from "react";
import TabFilterChart from "@/components/Tabs/TabFilterChart";
import Chart from "@/components/Chart/Chart";

function Dashboard() {
    const [filters, setFilters] = useState(() => ({
        first:"hoy",
        second:""
    }));
    
    return (
        <div className="pt-12">
            <TabFilterChart filters={filters} setFilters={setFilters}>
                {
                    (filters) => (<Chart filters={filters}/>)
                }            
            </TabFilterChart>
        </div>
    );
}

export default Dashboard;
