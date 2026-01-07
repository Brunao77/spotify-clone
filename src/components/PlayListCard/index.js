'use client';

import Link from "next/link";
import styles from "./PlayListCard.module.scss";
import { IoPlay, IoPause } from "react-icons/io5";
import { useContext } from "react";
import { PlayerContext } from "@/app/layout";


export default function PlayListCard({ playlist }) {
    const { currentMusic, setCurrentMusic, isPlaying, setIsPlaying } = useContext(PlayerContext);
    const handleClick = async (id) => {
        if (currentMusic?.playlist?.id === id) {
            setIsPlaying(!isPlaying);
            return
        }

        const res = await fetch(`/api/getPlaylistById?id=${playlist.id}`);
        const data = await res.json();
        setCurrentMusic({ songs: data.songs, playlist: data.playlist, song: data.songs[0] })
        setIsPlaying(true)
    }

    return (
        <article key={playlist.id} className={styles.playlistCard}>
            <div className={styles.playButtonContainer}>
                <button className={styles.playButton} onClick={()=>handleClick(playlist.id)}>
                    {isPlaying && currentMusic?.playlist?.id === playlist.id ? <IoPause size={20} /> : <IoPlay size={20} />}
                </button>
            </div>
			<Link href={`/playlist/${playlist.id}`}>
                <img src={playlist.cover} />
                <div className={styles.playlistInfo}>
                    <h4>{playlist.title}</h4>
                    <span>{playlist.artists.join(", ")}</span>
                </div>
			</Link>
		</article>
    );
}