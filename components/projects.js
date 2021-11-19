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
                            title="Task Scheduler"
                            date="Sept 2021 - Present"
                            description="• Woked with the agile scrum methodology with 3 other people to design, implement, and test the software"
                            description2="• Used the composite and strategy pattern to simplify client interaction and to allow for families of related algorithms and to vary the algorithm independantly from the context."
                            link="https://github.com/minsooerickim/"
                        />
                    </motion.div>
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
                            link="https://github.com/minsooerickim/wall-status-bets"
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
                            description="• Developed a user-interactive game to help players learn more about video production"
                            description2="• Constructed an algorithm to extract the appropriate thumbnails using Javascript on the returned JSON data from the Youtube API"
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
                            date="Mar 2021 - Apr 2021"
                            description="• Created a Python web scraper, hosted on Heroku to recursively check for vaccine appointment availability using BeautifulSoup and Selenium Web Driver"
                            description2="• Automated email responses with smtplib upon finding a local vaccine availability"
                            link="https://github.com/minsooerickim/covid-availability-alert"
                        />
                    </motion.div>
                    {/* <motion.div
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
                            link="https://github.com/minsooerickim/tic-tac-toe"
                        />    
                    </motion.div> */}
                </div>
            </div>
        </main>
    )
}