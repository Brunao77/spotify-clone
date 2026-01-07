'use client';

import { IoPlay, IoPause } from "react-icons/io5";
import styles from "./PlayPausePlaylistButton.module.scss";
import { useContext } from "react";
import { PlayerContext } from "@/app/layout";

export default function PlayPausePlaylistButton({ playlist }) {
    const { currentMusic, setCurrentMusic, isPlaying, setIsPlaying } = useContext(PlayerContext);

    const handleClick = async () => {
        if (currentMusic?.playlist?.id === playlist.id) {
            setIsPlaying(!isPlaying);
            return
        }

        const res = await fetch(`/api/getPlaylistById?id=${playlist.id}`);
        const data = await res.json();
        setCurrentMusic({ songs: data.songs, playlist: data.playlist, song: data.songs[0] })
        setIsPlaying(true)
    }

    return (
        <button className={styles.playButton} onClick={handleClick}>
			{isPlaying && currentMusic?.playlist?.id === playlist.id ? <IoPause size={20} /> : <IoPlay size={20} />}
		</button>
    );
}