import styles from "./page.module.scss";
import { allPlaylists, songs } from "@/lib/data";
import PlayListCard from "@/components/PlayListCard";
 

export default async function PlaylistHome({ params }) {

    const { id } = await params
    const playlist = allPlaylists.find(playlist => playlist.id === id)
    const playlistSongs = songs.filter(song => song.albumId === playlist.albumId)

	return (
		<div className={styles.page}>
			<h1>{playlist.title}</h1>
			<div className={styles.playlists}>
			
			</div>
		</div>
	);
}