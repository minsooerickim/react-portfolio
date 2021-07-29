import Image from "next/image"

import profilepic from '../imgs/profilepic.png'
import styles from '../styles/profile.module.css'

import { motion } from "framer-motion"

export default function profile() {
    return(
        <div className={styles.container}>
            <motion.div
                whileHover={{
                rotate:[0,0,5,5,0] }}
                whileTap={{ scale: 0.9 }}
            >
            <Image
                className={styles.profile}
                src={profilepic}
                alt="profile picture"
                quality={100}
                placeholder="blur"
            />
            </motion.div>
        </div>
    )
}