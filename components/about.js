import Image from "next/image"

import styles from "../styles/about.module.css";
import Unifi from "../imgs/unifi.png"
import UCR from "../imgs/UCR.png"
export default function projects() {
    return (
        <main id="about" className={styles.about}>
            <div className={styles.wrapper}>
                <div className={styles.header}>
                    <h1>About</h1>
                    <div>
                        <p className={styles.title}>Web developer intern @ Unifi</p>
                        <p className={styles.description}>June 2021 - Present</p>
                        <div className={styles.image}>
                        <Image
                            src={Unifi}
                        />
                        </div>
                    </div>
                    <div className={styles.section}>
                        <h2 className={styles.title}>Computer Science @ UCR</h2>
                        <p className={styles.description}>Expected Graduation - June 2023</p>
                        <div className={styles.image}>
                        <Image
                            src={UCR}
                        />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}