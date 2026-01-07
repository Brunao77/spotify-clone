'use client'

import Link from "next/link";
import styles from "./Player.module.scss";
import { IoPause, IoPlay, IoVolumeHigh } from "react-icons/io5";
import { useContext, useEffect, useRef } from "react";
import { PlayerContext } from "@/app/layout";
import { GiNextButton, GiPreviousButton } from "react-icons/gi";
import { Slider } from "@/components/Slider";

export default function Player() {
    const audioRef = useRef(null);
    const context = useContext(PlayerContext);
    const { currentMusic, setIsPlaying, isPlaying, volume, setVolume } = context;
    const previousVolumeRef = useRef(volume)

    const isVolumeSilenced = volume < 0.1

    const handleClickVolumen = () => {
        if (isVolumeSilenced) {
            setVolume(previousVolumeRef.current)
        } else {
        previousVolumeRef.current = volume
            setVolume(0)
        }
    }

    useEffect(() => {
        if (!currentMusic.song) {
            return;
        }
        isPlaying ? play() : audioRef.current.pause()
    }, [isPlaying])

    useEffect(() => {
        audioRef.current.volume = volume;
    }, [volume])

    useEffect(() => {
        const { song, playlist } = currentMusic;
        if (song) {
            audioRef.current.src = `/music/${playlist?.id}/0${song.id}.mp3`;
            play();
        }
    }, [currentMusic]);

    const play = () => {
        audioRef.current.play()
        .catch((e) => console.log('error playing: ', e))
    }

    return (
        <div className={styles.playerContainer}>
            <audio ref={audioRef} ></audio>
            <div className={styles.nowPlaying}>
                <img src={currentMusic.song?.image}></img>
                <div>
                    <p>{currentMusic.song?.title}</p>
                    <p>{currentMusic.song?.artists.join(", ")}</p>
                </div>
            </div>
            <div className={styles.controls}>
                <div className={styles.controlsButtonBar}>
                    <button>
                        <GiPreviousButton size={25} />
                    </button>
                    <button onClick={() => setIsPlaying(!isPlaying)} className={styles.playPauseButton}>
                        {isPlaying ? <IoPause size={25} /> : <IoPlay size={25} />}
                    </button>
                    <button>
                        <GiNextButton size={25} />
                    </button>
                </div>
                <div className={styles.slider}>

                </div>
            </div>
            <div className={styles.volumeBar}>
                <button className={styles.volumeIcon} onClick={handleClickVolumen}>
                    <IoVolumeHigh size={20} />
                </button>
                <Slider
                    className={styles.volumeSlider}
                    defaultValue={[50]}
                    max={100}
                    min={0}
                    value={[volume * 100]}
                    onValueChange={(value) => {
                        const [newVolume] = value
                        const volumeValue = newVolume / 100
                        setVolume(volumeValue)
                    }}
                />
                
            </div>
        </div>
    );
}