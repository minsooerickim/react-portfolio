import Image from "next/image"

import styles from "../styles/about.module.css"
import Cyber from "../imgs/cyber.png"
import Cp from "../imgs/cp.png"
import Bcoe from "../imgs/UCR.png"
export default function projects() {
    return (
        <main id="about" className={styles.about}>
            <div className={styles.wrapper}>
            <div className={styles.header}>
                    <h1>Activities</h1>
                    <div>
                        <p className={styles.title}>CSE Reader/Grader</p>
                        <p className={styles.description}>Grader</p>
                        <div className={styles.image}>
                        <Image
                            src={Bcoe}
                        />
                        </div>
                        <p className={styles.description}>• Support TAs and students with grading, office-hours, exam proctoring, and labs</p>
                    </div>
                    <div>
                        <p className={styles.title}>Cyber@UCR</p>
                        <p className={styles.description}>CyberSecurity Club at UCR</p>
                        <div className={styles.image}>
                        <Image
                            src={Cyber}
                        />
                        </div>
                        <p className={styles.description}>• Secure Linux based virtual machines, removing malware, infections, correcting misconfigurations, mitigating vulnerabilities, and disabling vulnerable services</p>
                    </div>
                    <div className={styles.bottomSection}>
                        <p className={styles.title}>Competitive Programming</p>
                        <p className={styles.description}>Competitive Programming Club at UCR</p>
                        <div className={styles.image}>
                        <Image
                            src={Cp}
                        />
                        </div>
                        <p className={styles.description}>• Program according to provided memory and time specifications as fast as possible with the appropriate data structures and algorithms</p>
                    </div>
                </div>
            </div>
        </main>
    )
}