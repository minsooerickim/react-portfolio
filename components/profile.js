import Image from "next/image"

import profilepic from '../imgs/profilepic.png'
import styles from '../styles/profile.module.css'

export default function profile() {
    return(
        <div className={styles.container}>
            <Image
                className={styles.profile}
                src={profilepic}
                alt="profile picture"
                quality={100}
                placeholder="blur"
            />
        </div>
    )
}