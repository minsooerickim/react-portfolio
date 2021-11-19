import styles from "../styles/home.module.css";

import Projects from "./projectsComp.js";
import Nav from "./nav.js"
import Socials from "./socials"

import { motion } from "framer-motion"

export default function projects() {
    return (
        <main id="projects" className={styles.main}>
            <div className={styles.wrapper}>
            <div className={styles.projects}>
                <motion.h1
                    animate={{ scale: 1.1,
                    rotate:[0,0,150,150,0] }}
                    whileTap={{ scale: 0.9 }}
                >Projects</motion.h1>
                    <motion.div
                        whileHover={{ scale: 1.1,
                        rotate:[0,0,5,5,0] }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <Projects                    
                            title="WallStatusBets.io"
                            date="Jul 2021 - Sept 2021"
                            description="• Built a fullstack CRUD web application using MERN stack that retrieves data from a
                            subreddit to provide graphical and statistical data for users to get insight on their stock
                            of interest with Snoowrap and Chart.js"
                            description2="• Validated user inputs with a collection of all the pre-approved user inputs on MongoDB"
                            link="https://thumbnailgame.herokuapp.com/"
                        />
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.1,
                        rotate:[0,0,5,5,0] }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <Projects                    
                            title="Thumbnail Game"
                            date="April 2021"
                            description="fun game to test your knowledge in creating effective thumbnails"
                            description2="test"
                            link="https://thumbnailgame.herokuapp.com/"
                        />
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.1,
                        rotate:[0,0,5,5,0] }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <Projects                    
                            title="Covid Availability Alert"
                            date="April 2021"
                            description="Checks for vaccine appointment availability every 10 seconds and sends an email when a spot opens up at a desired cvs location"
                            description2="test"
                            link="https://github.com/minsooerickim/covid-availability-alert"
                        />
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.1,
                        rotate:[0,0,5,5,0] }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <Projects                    
                            title="Musiquity"
                            date="Feb 2021"
                            description="Given the name of a song, Musiquity provides the song's links to all the mainstream streaming platforms"
                            description2="test"
                            link="https://github.com/nd-0r/Musiquity"
                        />
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.1,
                        rotate:[0,0,5,5,0] }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <Projects                    
                            title="R-auncher"
                            date="Jan 2021"
                            description="Chrome extension made for UCR students to easily access commonly used websites by the institution"
                            description2="test"
                            link="https://chrome.google.com/webstore/detail/ucr-rauncher/phdbkgliobmemicbbkdhninmjgiklloc"
                        />
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.1,
                        rotate:[0,0,5,5,0] }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <Projects                    
                            title="Discount Selector"
                            date="Dec 2020"
                            description="Chrome extension that brings all the items with a discount up to the top and gets rid of duplicate listings"
                            description2="test"
                            link="https://chrome.google.com/webstore/detail/discount-selector/iocaejoljcpadopegifbepbilkgcmfck"
                        />
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.1,
                        rotate:[0,0,5,5,0] }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <Projects                    
                            title="UCR Professor Ratings"
                            date="Dec 2020"
                            description="Quick and easy access to professor ratings when registering for classes"
                            description2="test"
                            link="https://github.com/minsooerickim/UCR-Professor-Ratings"
                        />
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.1,
                        rotate:[0,0,5,5,0] }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <Projects                    
                            title="Snake Game"
                            date="Dec 2020"
                            description="Snake game with custom rules"
                            description2="test"
                            link="https://github.com/minsooerickim/snake-game"
                        />
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.1,
                        rotate:[0,0,5,5,0] }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <Projects                    
                            title="tic-tac-toe"
                            date="Dec 2020"
                            description="First game ever made!"
                            description2="test"
                            link="https://github.com/minsooerickim/tic-tac-toe"
                        />    
                    </motion.div>
                </div>
            </div>
        </main>
    )
}