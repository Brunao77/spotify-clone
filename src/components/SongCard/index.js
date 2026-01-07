'use client'
import { useContext } from "react";
import styles from "./SongCard.module.scss";
import { IoPlay, IoPause } from "react-icons/io5";
import { PlayerContext } from "@/app/layout";

export default function SongCard({ song, index }) {
    const { setCurrentMusic, setIsPlaying, currentMusic, isPlaying } = useContext(PlayerContext);

    const handlePlay = async () => {
        if (currentMusic.song?.id == song.id
            && currentMusic.playlist?.albumId == song.albumId
            && isPlaying) {
            setIsPlaying(false)
            return;
        }

        if(currentMusic.playlist?.id != song.albumId){
            const res =await fetch(`/api/getPlaylistById?id=${song.albumId}`);
            const { playlist, songs } = await res.json();
            setCurrentMusic({ songs, playlist, song })
            setIsPlaying(true)
            return;
        }

        if (currentMusic.song?.id !== song.id) {
            setCurrentMusic({ songs: currentMusic.songs, playlist: currentMusic.playlist, song: song })
        }

        setIsPlaying(true)
    };

    return (
        <tr className={styles.trackRow}
            onClick={handlePlay}
        >
            <td className={styles.indexCol}>
                <span className={styles.indexNum}>{index + 1}</span>
                <span className={styles.playIcon}>
                    {isPlaying && currentMusic?.song?.id === song.id ? <IoPause size={15} /> : <IoPlay size={15} />}
                </span>
            </td>
            <td>
                <div>
                    <h5 className={styles.trackTitle}>{song.title}</h5>
                    <p className={styles.trackArtist}>{song.artists.join(", ")}</p>
                </div>
            </td>
            <td>{song.duration}</td>
        </tr>
    );
}