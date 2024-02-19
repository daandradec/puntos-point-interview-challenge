'use client';
import React from "react";
import Tabs from "@mui/joy/Tabs";
import TabList from "@mui/joy/TabList";
import Tab from "@mui/joy/Tab";
import TabPanel from '@mui/joy/TabPanel';
import EventIcon from '@mui/icons-material/Event';
import useFilters from "@/hooks/useFilters";

type Filter = {first: string, second: string};
type Props = {
    filters: Filter
    setFilters: React.Dispatch<React.SetStateAction<Filter>>;
    children: (filters: Filter) => React.ReactNode
}

function TabFilterChart({ filters, setFilters, children }: Props) {
    
    const { updateFilter } = useFilters(filters, setFilters);

    return (
        <Tabs
            aria-label="Basic tabs"
            defaultValue={0}
            sx={{
                "& .Mui-selected": {
                    backgroundColor: "#9c27b0 !important",
                    color: "white"
                }
            }}
            onChange={(_, value) => {updateFilter(value as number)}}
            className="flex items-center justify-center lg:block"
        >
            <TabList
                disableUnderline
                sx={{ borderRadius: "lg", p: 0 }}
                className="gap-4 lg:flex-nowrap flex-wrap"
            >
                <Tab value={0} disableIndicator>Hoy</Tab>
                <Tab value={1} disableIndicator>7D</Tab>
                <Tab value={2} disableIndicator>Este Mes</Tab>
                <Tab value={3} disableIndicator>6M</Tab>
                <Tab value={4} disableIndicator>YTD/YTG</Tab>
                <Tab value={5} disableIndicator>1A</Tab>
                <Tab value={6} disableIndicator>MÁX</Tab>
                <Tab value={7} disableIndicator>
                    <EventIcon /> Personalizado
                </Tab>
            </TabList>
            {
                (filters.first == "7d" || filters.first == "mes" || filters.first == "ytd") ? (
                    <TabList disableUnderline sx={{ p: 0 }} className="my-4 p-0 lg:flex-nowrap flex-wrap">
                        <Tab value={8} disableIndicator>Lunes</Tab>
                        <Tab value={9} disableIndicator>Martes</Tab>
                        <Tab value={10} disableIndicator>Miercoles</Tab>
                        <Tab value={11} disableIndicator>Jueves</Tab>
                        <Tab value={12} disableIndicator>Viernes</Tab>
                        <Tab value={13} disableIndicator>Sabado</Tab>
                        <Tab value={14} disableIndicator>Domingo</Tab>     
                    </TabList>
                ) : null
            } 
            {
                (filters.first == "6m" || filters.first == "1a") ? (
                    <TabList disableUnderline sx={{ p: 0 }} className="my-4 p-0 lg:flex-nowrap flex-wrap">
                        <Tab value={15} disableIndicator>Enero</Tab>
                        <Tab value={16} disableIndicator>Febrero</Tab>
                        <Tab value={17} disableIndicator>Marzo</Tab>
                        <Tab value={18} disableIndicator>Abril</Tab>
                        <Tab value={19} disableIndicator>Mayo</Tab>
                        <Tab value={20} disableIndicator>Junio</Tab>
                        <Tab value={21} disableIndicator>Julio</Tab>     
                        <Tab value={22} disableIndicator>Agosto</Tab>     
                        <Tab value={23} disableIndicator>Septiembre</Tab>     
                        <Tab value={24} disableIndicator>Octubre</Tab>     
                        <Tab value={25} disableIndicator>Noviembre</Tab>     
                        <Tab value={26} disableIndicator>Diciembre</Tab>     
                    </TabList>
                ) : null
            }                         
            <TabPanel sx={{ p: 0 }} value={0}> {children(filters)}</TabPanel>
            <TabPanel sx={{ p: 0 }} value={1}>       
                {children(filters)}
            </TabPanel>
            <TabPanel sx={{ p: 0 }} value={2}> {children(filters)}</TabPanel>
            <TabPanel sx={{ p: 0 }} value={3}> {children(filters)}</TabPanel>
            <TabPanel sx={{ p: 0 }} value={4}> {children(filters)}</TabPanel>
            <TabPanel sx={{ p: 0 }} value={5}> {children(filters)}</TabPanel>
            <TabPanel sx={{ p: 0 }} value={6}> {children(filters)}</TabPanel>
            <TabPanel sx={{ p: 0 }} value={7}> {children(filters)}</TabPanel>
            <TabPanel sx={{ p: 0 }} value={8}> {children(filters)}</TabPanel>
            <TabPanel sx={{ p: 0 }} value={9}> {children(filters)}</TabPanel>
            <TabPanel sx={{ p: 0 }} value={10}> {children(filters)}</TabPanel>
            <TabPanel sx={{ p: 0 }} value={11}> {children(filters)}</TabPanel>
            <TabPanel sx={{ p: 0 }} value={12}> {children(filters)}</TabPanel>
            <TabPanel sx={{ p: 0 }} value={13}> {children(filters)}</TabPanel>
            <TabPanel sx={{ p: 0 }} value={14}> {children(filters)}</TabPanel>
            <TabPanel sx={{ p: 0 }} value={15}> {children(filters)}</TabPanel>
            <TabPanel sx={{ p: 0 }} value={16}> {children(filters)}</TabPanel>
            <TabPanel sx={{ p: 0 }} value={17}> {children(filters)}</TabPanel>
            <TabPanel sx={{ p: 0 }} value={18}> {children(filters)}</TabPanel>
            <TabPanel sx={{ p: 0 }} value={19}> {children(filters)}</TabPanel>
            <TabPanel sx={{ p: 0 }} value={20}> {children(filters)}</TabPanel>
            <TabPanel sx={{ p: 0 }} value={21}> {children(filters)}</TabPanel>
            <TabPanel sx={{ p: 0 }} value={22}> {children(filters)}</TabPanel>
            <TabPanel sx={{ p: 0 }} value={23}> {children(filters)}</TabPanel>
            <TabPanel sx={{ p: 0 }} value={24}> {children(filters)}</TabPanel>
            <TabPanel sx={{ p: 0 }} value={25}> {children(filters)}</TabPanel>
            <TabPanel sx={{ p: 0 }} value={26}> {children(filters)}</TabPanel>
        </Tabs>
    );
}

export default TabFilterChart;