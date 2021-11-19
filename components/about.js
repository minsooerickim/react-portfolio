import Image from "next/image"

import styles from "../styles/about.module.css"
import Unifi from "../imgs/unifi.png"
import UCR from "../imgs/UCR.png"
import CutieHack from "../imgs/CutieHack.png"
export default function projects() {
    return (
        <main id="about" className={styles.about}>
            <div className={styles.wrapper}>
                <div className={styles.header}>
                    <h1>Experience</h1>
                    <div>
                        <p className={styles.title}>FrontEnd Developer @ CutieHack</p>
                        <p className={styles.description}>Jul 2021 - Sept 2021</p>
                        <div className={styles.image}>
                        <Image
                            src={CutieHack}
                        />
                        </div>
                        <p className={styles.description}>• Built infrastructures for CutieHack’s website utilizing React and Next.js<br/>• Styled pages with CSS and Framer-Motion in accordance with the hackathon’s theme</p>
                    </div>
                    <div className={styles.bottomSection}>
                        <p className={styles.title}>Web developer intern @ Unifi</p>
                        <p className={styles.description}>Jun 2021 - Aug 2021</p>
                        <div className={styles.image}>
                        <Image
                            src={Unifi}
                        />
                        </div>
                        <p className={styles.description}>• Collaborated in a team of 5 to optimize methods to improve website security and user privacy by encrypting data with Zapier, Paperform, and Javascript<br/>• Implemented modular designs on a prospective web app using Webflow and Javascript</p>
                    </div>
                </div>
            </div>
        </main>
    )
}