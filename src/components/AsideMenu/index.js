'use client'

import Link from "next/link";
import styles from "./AsideMenu.module.scss";
import { GoSearch, GoListUnordered } from "react-icons/go";
import { useState } from "react";
import { playlists } from "@/lib/data";
import SideMenuCard from "../SideMenuCard";

const filters = [
    { name: "Recientes"},
    { name: "Orden Alfabético"},
]

export default function AsideMenu() {
    const [actviveFilter, setActiveFilter] = useState(filters[0]);
    const [showFilterOptions, setShowFilterOptions] = useState(false);

    return (
        <div className={styles.container}>
            <h4>Tu Biblioteca</h4>
            <div className={styles.actionsContainer}>
                <div className={styles.searchContainer}>
                    <GoSearch size={20} />
                </div>
                <div className={styles.filterContainer}>
                    <button className={styles.filter} onClick={()=> setShowFilterOptions(!showFilterOptions)}>
                        <span>{actviveFilter.name}</span>
                        <GoListUnordered size={20} />
                    </button>
                    {showFilterOptions && 
                        <ul className={styles.filterOptions}>
                            <p>Ordenar por:</p>
                            {filters.map((filter) => (
                                <li key={filter.name}>
                                    <button className={filter.name === actviveFilter.name ? styles.active : ""}
                                        onClick={() => setActiveFilter(filter)}>
                                        <span >{filter.name}</span>
                                        {filter.name === actviveFilter.name && <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    }
                </div>
            </div>
            {playlists.map((playlist) => (
                <SideMenuCard 
                key={playlist.id}
                playlist={playlist} />
            ))}
        </div>
    );
}