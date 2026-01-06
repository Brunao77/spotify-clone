import styles from "./page.module.scss";
import { playlists } from "@/lib/data";
import PlayListCard from "@/components/PlayListCard";

export default function Home() {
	return (
		<div className={styles.page}>
			<h1>Bienvenido a Spotify Clone</h1>
			<div className={styles.playlists}>
				{playlists.map((playlist) => (
					<PlayListCard key={playlist.id} playlist={playlist} />
				))}
			</div>
		</div>
	);
}
