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
                        whileHover={{ scale: 1.1,
                        rotate:[0,0,180,180,0] }}
                        whileTap={{ scale: 0.9 }}  
                        href="#home" className={styles.icons} classname={styles.navIcon}>
                        <div className={styles.container}>
                            <Image
                                src={Home}
                                alt="Home Icon"
                                quality={100}
                                placeholder="blur"
                            />
                        </div>
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
                        href="#projects" className={styles.icons}>
                        <div className={styles.container}>
                            <Image  
                                src={Projects}
                                alt="Home Icon"
                                quality={100}
                                placeholder="blur"
                            />
                        </div>
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
                        href="#about" className={styles.icons}>
                        <div className={styles.container}>
                            <Image  
                                src={About}
                                alt="Home Icon"
                                quality={100}
                                placeholder="blur"
                            />
                        </div>
                    </motion.a>
                </div>
            </div>
        )
    }
}