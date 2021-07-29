import { Component } from "react";
import Image from "next/image"

import Github from '../imgs/github.png'
import Linkedin from '../imgs/linkedin.png'
import Resume from '../imgs/resume.png'
import { motion } from "framer-motion"

import styles from "../styles/socials.module.css"

export default class NavBar extends Component {
    render() {
        return (
            <div>
                <div className={styles.nav}>
                    
                    <motion.a 
                        animate={{
                            scale: [1, 2, 2, 1, 1],
                            rotate: [0, 0, 270, 270, 0],
                            borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                        }}
                        whileHover={{ scale: 1.1,
                        rotate:[0,0,180,180,0] }}
                        whileTap={{ scale: 0.9 }}  
                        className={styles.icons} href="https://github.com/minsooerickim" target="_blank">
                        <Image
                            src={Github}
                            alt="Github Icon"
                            quality={100}
                            placeholder="blur"
                        />
                    </motion.a>
                    <motion.a 
                        animate={{
                            scale: [1, 2, 2, 1, 1],
                            rotate: [0, 0, 270, 270, 0],
                            borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                        }}  
                        whileHover={{ scale: 1.1,
                        rotate:[0,0,180,180,0] }}
                        whileTap={{ scale: 0.9 }}  
                        className={styles.icons} href="https://www.linkedin.com/in/minsookime/" target="_blank">
                        <Image
                            src={Linkedin}
                            alt="Linkedin Icon"
                            quality={100}
                            placeholder="blur"
                        />
                    </motion.a>
                    <motion.a 
                        animate={{
                            scale: [1, 2, 2, 1, 1],
                            rotate: [0, 0, 270, 270, 0],
                            borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                        }}  
                        whileHover={{ scale: 1.1,
                        rotate:[0,0,180,180,0] }}
                        whileTap={{ scale: 0.9 }}  
                        className={styles.icons} href="../public/data/resume.pdf" target="_blank" download>
                        <Image
                            src={Resume}
                            alt="Resume Icon"
                            quality={100}
                            placeholder="blur"
                        />
                    </motion.a>
                </div>
            </div>
        )
    }
}