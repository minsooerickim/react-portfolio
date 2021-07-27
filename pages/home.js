// import Head from "next/head";
// import styles from "../styles/Header.module.css";
// import { useEffect, useRef, useState } from "react";
// import CLOUDS from "vanta/dist/vanta.clouds.min";
// import * as THREE from "three";

import styles from "../styles/home.module.css";

import Projects from "../components/projects.js";
import Nav from "../components/nav.js"
import Profile from "../components/profile.js"

export default function Home() {
    return (
        <main className={styles.main}>
            <Nav/>
            <div className={styles.wrapper}>
            
                <div className={styles.header}>
                    <h1>Welcome! I'm Minsoo Kim.</h1>
                    <Profile/>
                    <p classname={styles.subHeading}>Software Engineer in Southern California</p>
                </div>
                <p className={styles.description}>I'm currently a Sophomore studying Computer Science at the University of California, Riverside. My interests include Web Development, Game Development, Mobile Applications, and Software Engineering!</p>

                <div className={styles.projects}>
                    <h1>Projects</h1>
                    <Projects
                        title="Thumbnail Game"
                        date="April 2021"
                        description="fun game to test your knowledge in creating effective thumbnails"
                        link="https://thumbnailgame.herokuapp.com/"
                    />
                    <Projects
                        title="Covid Availability Alert"
                        date="April 2021"
                        description="Checks for vaccine appointment availability every 10 seconds and sends an email when a spot opens up at a desired cvs location"
                        link="https://github.com/minsooerickim/covid-availability-alert"
                    />
                    <Projects
                        title="Musiquity"
                        date="Feb 2021"
                        description="Given the name of a song, Musiquity provides the song's links to all the mainstream streaming platforms"
                        link="https://github.com/nd-0r/Musiquity"
                    />
                    <Projects
                        title="R-auncher"
                        date="Jan 2021"
                        description="Chrome extension made for UCR students to easily access commonly used websites by the institution"
                        link="https://chrome.google.com/webstore/detail/ucr-rauncher/phdbkgliobmemicbbkdhninmjgiklloc"
                    />
                    <Projects
                        title="Discount Selector"
                        date="Dec 2020"
                        description="Chrome extension that brings all the items with a discount up to the top and gets rid of duplicate listings"
                        link="https://chrome.google.com/webstore/detail/discount-selector/iocaejoljcpadopegifbepbilkgcmfck"
                    />
                    <Projects
                        title="UCR Professor Ratings"
                        date="Dec 2020"
                        description="Quick and easy access to professor ratings when registering for classes"
                        link="https://github.com/minsooerickim/UCR-Professor-Ratings"
                    />
                    <Projects
                        title="Snake Game"
                        date="Dec 2020"
                        description="Snake game with custom rules"
                        link="https://github.com/minsooerickim/snake-game"
                    />
                    <Projects
                        title="tic-tac-toe"
                        date="Dec 2020"
                        description="First game ever made!"
                        link="https://github.com/minsooerickim/tic-tac-toe"
                    />
                    
                </div>
            </div>
        </main>
    )
}



//   const [vantaEffect, setVantaEffect] = useState(0);
//   const vantaRef = useRef(null);
//   useEffect(() => {
//     if (!vantaEffect) {
//       setVantaEffect(
//         CLOUDS({
//           el: vantaRef.current,
//           THREE,
//         })
//       );
//     }
//     return () => {
//       if (vantaEffect) vantaEffect.destory();
//     };
//   }, [vantaEffect]);
//   return (
//     <div className={styles.container}>
//       <Head>
//         <title>Minsoo's Personal Website</title>
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <main className={styles.main} ref={vantaRef}>
//         <h1 class={styles.name}>Minsoo Kim</h1>
//       </main>
//     </div>
//   );