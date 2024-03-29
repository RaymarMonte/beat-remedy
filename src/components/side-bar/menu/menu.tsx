import { ActivatedHomeIcon } from "@/components/svg-paths/activated-home-icon";
import { ActivatedSearchIcon } from "@/components/svg-paths/activated-search-icon";
import { MenuItem } from "./menu-item";
import { useState } from "react";
import { HomeIcon } from "@/components/svg-paths/home-icon";
import { SearchIcon } from "@/components/svg-paths/search-icon";

export function Menu() {
    const [isHomeActivated, setIsHomeActivated] = useState(true);
    const [isSearchActivated, setIsSearchActivated] = useState(true);
    return (
        <div className="px-3 py-2 rounded-lg bg-[#121212]">
            <ul>
                <MenuItem icon={isHomeActivated ? <ActivatedHomeIcon /> : <HomeIcon />} label="Home" isLabelShown={true} />
                <MenuItem icon={isSearchActivated ? <ActivatedSearchIcon /> : <SearchIcon />} label="Search" isLabelShown={true} />
            </ul>
        </div>
    )
}