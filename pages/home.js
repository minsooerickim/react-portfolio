// import Head from "next/head";
// import styles from "../styles/Header.module.css";
// import { useEffect, useRef, useState } from "react";
// import CLOUDS from "vanta/dist/vanta.clouds.min";
// import * as THREE from "three";
import { useEffect, useRef, useState } from "react";
import styles from "../styles/home.module.css"

import Nav from "../components/nav.js"
import Profile from "../components/profile.js"
import Socials from "../components/socials"
import Projects from "../components/projects"
import About from "../components/about"
import { motion } from "framer-motion"

import FOG from "vanta/dist/vanta.fog.min";
import * as THREE from "three";

export default function Home() {
    const [vantaEffect, setVantaEffect] = useState(0);
    const vantaRef = useRef(null);
    useEffect(() => {
      if (!vantaEffect) {
        setVantaEffect(
          FOG({
            el: 'html',
            THREE,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            highlightColor: 0x44455f,
            midtoneColor: 0x46ac,
            lowlightColor: 0x334f93
          })
        );
      }
      return () => {
        if (vantaEffect) vantaEffect.destory();
      };
    }, [vantaEffect]);

    return (
        <main id="home" className={styles.main}>            
            {/* <motion.div
              initial={{ y: '100vw' }}
              animate={{ y: 0 }}
              transition={{ type: 'spring', duration: 1, bounce: 0.3 }}
            > */}
              <Nav/>
              <Socials/>
            {/* </motion.div> */}
            <motion.div
              initial={{ y: '-100vw' }}
              animate={{ y: 0 }}
              transition={{ type: 'spring', duration: 1, bounce: 0.3 }}
            >
              <div className={styles.wrapper}>
                  <div className={styles.header}>
                      <motion.h1
                      animate={{ scale: 1.1,
                      rotate:[0,0,150,150,0] }}
                      whileTap={{ scale: 0.9 }}
                      >Welcome! I'm Minsoo Kim.</motion.h1>
                      <Profile/>
                      <p classname={styles.subHeading}>Software Engineer in Southern California</p>
                  </div>
                  <p className={styles.description}>I'm currently a Sophomore studying Computer Science at the University of California, Riverside. My interests include Web Development, Game Development, Mobile Applications, and Software Engineering!</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ x: '-100vw' }}
              animate={{ x: 0 }}
              transition={{ type: 'spring', duration: 1, bounce: 0.3 }}
            >
              <Projects/>
            </motion.div>
            <motion.div
              initial={{ y: '100vw' }}
              animate={{ y: 0 }}
              transition={{ type: 'spring', duration: 1, bounce: 0.3 }}
            >
              <About/>
            </motion.div>
            
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