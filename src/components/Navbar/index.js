import Link from "next/link";
import styles from "./Navbar.module.scss";
import { FaSpotify } from "react-icons/fa";
import { GoHome, GoSearch, GoFileDirectory, GoDownload } from "react-icons/go";

export default function Navbar() {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo} aria-label="Ir al inicio (Logo)" title="Spotify">
        <FaSpotify size={34} />
      </Link>
      <div className={styles.navItems}>
        <Link href="/" className={styles.homeIcon} aria-label="Ir al inicio" title="Inicio">
          <GoHome size={25} />
        </Link>
        <div className={styles.searchContainer}>
          <div className={styles.searchIcon} title="Buscar">
            <GoSearch size={25} />
          </div>
          <input type="text" placeholder="¿Qué quieres reproducir?" />
          <div className={styles.searchIcon} title="Explorar">
            <GoFileDirectory size={25} />
          </div>
        </div>
      </div>
      <div className={styles.navActions}>
        <div className={styles.installApp}>
          <GoDownload size={20} />
          <span>Instalar App</span>
        </div>
        <div className={styles.profile}>
          <div className={styles.avatar} title="Perfil de usuario">
            <span>B</span>
          </div>
        </div>
      </div>
    </div>
  );
}