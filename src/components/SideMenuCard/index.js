import Link from "next/link";
import styles from "./SideMenuCard.module.scss";


export default function SideMenuCard({ playlist }) {
    return (
        <Link href={`/playlist/${playlist.id}`} className={styles.card}>
            <picture className={styles.cover}>
                <img src={playlist.cover} />
            </picture>
            <div>
                <h4 className={styles.title}>{playlist.title}</h4>
                <p className={styles.artists}>Álbum • <span >{playlist.artists.join(", ")}</span></p>
                    
            </div>
        </Link>
    );
}