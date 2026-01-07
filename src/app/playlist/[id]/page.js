import styles from "./page.module.scss";
import { allPlaylists, songs } from "@/lib/data";
import { GoClock } from "react-icons/go";
import SongCard from "@/components/SongCard";
import { IoPlay } from "react-icons/io5";

export default async function PlaylistHome({ params }) {

    const { id } = await params
    const playlist = allPlaylists.find(playlist => playlist.id === id)
    const playlistSongs = songs.filter(song => song.albumId === playlist.albumId)

	return (
		<div 
			className={styles.page}
			style={{ '--bg-color': playlist.color.dark || '#555' }}
		>
			<div className={styles.albumInfo}>
				<div className={styles.cover}>
					<img src={playlist.cover}></img>
				</div>
				<div className={styles.details}>
					<span className={styles.type}>Álbum</span>
					<h1 className={styles.title}>{playlist.title}</h1>
					<p className={styles.description}><span className={styles.artists}>{playlist.artists.join(", ")}</span> • {playlistSongs.length} canciones</p>
				</div>
			</div>
			<div className={styles.songList}>
				<div className={styles.playButtonContainer}>
					<button className={styles.playButton}>
						<IoPlay size={20} />
					</button>
				</div>
				<table>
					<thead>
						<tr>
							<td>#</td>
							<td>Título</td>
							<td><GoClock size={15} /></td>
						</tr>
					</thead>
					<tbody>
							{playlistSongs.map((song, index) => (
								<SongCard key={song.id} song={song} index={index} />
							))}
					</tbody>
				</table>
			</div>
		</div>
	);
}