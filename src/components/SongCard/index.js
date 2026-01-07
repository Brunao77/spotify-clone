'use client'
import styles from "./SongCard.module.scss";
import { IoPlay } from "react-icons/io5";

export default function SongCard({ song, index }) {
    return (
        <tr className={styles.trackRow}>
            <td className={styles.indexCol}>
                <span className={styles.indexNum}>{index + 1}</span>
                <span className={styles.playIcon}>
                    <IoPlay size={10} />
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