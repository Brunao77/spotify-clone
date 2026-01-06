import Link from "next/link";
import styles from "./Player.module.scss";
import { IoPlay } from "react-icons/io5";

export default function Player({ playlist }) {
    return (
        <div className={styles.playerContainer}>
            <div className={styles.nowPlaying}></div>
            <div className={styles.controls}>
                <div className={styles.controlsButtonBar}></div>
                <div className={styles.slider}></div>
            </div>
            <div className={styles.volumeBar}></div>
        </div>
    );
}