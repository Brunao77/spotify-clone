import Link from "next/link";
import styles from "./PlayListCard.module.scss";
import { IoPlay } from "react-icons/io5";


export default function PlayListCard({ playlist }) {
    return (
        <article key={playlist.id} className={styles.playlistCard}>
            <div className={styles.playButtonContainer}>
                <button className={styles.playButton}>
                    <IoPlay size={20} />
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