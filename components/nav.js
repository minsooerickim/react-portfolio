import { Component } from "react";

import styles from "../styles/nav.module.css"
import Image from "next/image"
import { motion } from "framer-motion"

import Home from "../imgs/home.png"
import Projects from "../imgs/projects.png"
import About from "../imgs/about.png"

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
                        href="/" className={styles.icons} classname={styles.navIcon}>
                        <div className={styles.container}>
                            <Image
                                src={Home}
                                alt="Home Icon"
                                quality={100}
                                placeholder="blur"
                            />
                            <div class={styles.overlay}>
                                <div class={styles.text}>Home</div>
                            </div>
                        </div>
                    </motion.a>
                    <motion.a 
                        animate={{
                            scale: [1, 2, 2, 1, 1],
                            rotate: [0, 0, 270, 270, 0],
                            borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                        }}   
                        href="/projects" className={styles.icons}>
                        <div className={styles.container}>
                            <Image  
                                src={Projects}
                                alt="Home Icon"
                                quality={100}
                                placeholder="blur"
                            />
                            <div class={styles.overlay}>
                                    <div class={styles.text}>Projects</div>
                            </div>
                        </div>
                    </motion.a>
                    <motion.a 
                        animate={{
                            scale: [1, 2, 2, 1, 1],
                            rotate: [0, 0, 270, 270, 0],
                            borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                        }}   
                        href="/about" className={styles.icons}>
                        <div className={styles.container}>
                            <Image  
                                src={About}
                                alt="Home Icon"
                                quality={100}
                                placeholder="blur"
                            />
                            <div class={styles.overlay}>
                                        <div class={styles.text}>About</div>
                            </div>
                        </div>
                    </motion.a>
                </div>
            </div>
        )
    }
}