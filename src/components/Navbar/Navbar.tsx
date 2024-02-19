import React from "react";
import Link from "next/link";
import Button from "@mui/material/Button";
import { useRouter } from "next/router";
import Dropdown from '@mui/joy/Dropdown';
import Menu from '@mui/joy/Menu';
import MenuButton from '@mui/joy/MenuButton';
import MenuItem from '@mui/joy/MenuItem';

function Navbar() {
    const { asPath: currentPath } = useRouter();
    return (
        <nav className="bg-white flex flex-row justify-between items-center py-6 px-8 lg:px-36 shadow-md">
            <span className="w-[55px]">&nbsp;</span>
            <ul className="mx-auto">
                <li className="flex justify-between gap-2">
                    <Link href="/">
                        <Button variant={currentPath === "/" ? "contained" : "text"} color="secondary" className="rounded-full">
                            Dashboard
                        </Button>
                    </Link>
                    <Link href="/clientes">
                        <Button variant={currentPath === "/clientes" ? "contained" : "text"} color="secondary" className="rounded-full">
                            Clientes
                        </Button>
                    </Link>
                    <Link href="/reglas">
                        <Button variant={currentPath === "/reglas" ? "contained" : "text"} color="secondary" className="rounded-full">
                            Reglas
                        </Button>
                    </Link>
                </li>
            </ul>
            <div className="justify-self-end self-end">
                <p className="text-lg font-semibold">
                    <Dropdown>
                        <MenuButton>Pamela Rojas Gonzalez &nbsp; &#9660;</MenuButton>
                        <Menu>
                            <MenuItem>Profile</MenuItem>
                            <MenuItem>My account</MenuItem>
                            <MenuItem>Logout</MenuItem>
                        </Menu>
                    </Dropdown>                    
                    
                </p>
            </div>
        </nav>
    );
}

export default Navbar;
