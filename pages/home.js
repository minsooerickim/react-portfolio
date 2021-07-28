// import Head from "next/head";
// import styles from "../styles/Header.module.css";
// import { useEffect, useRef, useState } from "react";
// import CLOUDS from "vanta/dist/vanta.clouds.min";
// import * as THREE from "three";

import styles from "../styles/home.module.css";

import Nav from "../components/nav.js"
import Profile from "../components/profile.js"
import Socials from "../components/socials"

export default function Home() {
    return (
        <main className={styles.main}>
            <Nav/>
            <Socials/>
            <div className={styles.wrapper}>
            
                <div className={styles.header}>
                    <h1>Welcome! I'm Minsoo Kim.</h1>
                    <Profile/>
                    <p classname={styles.subHeading}>Software Engineer in Southern California</p>
                </div>
                <p className={styles.description}>I'm currently a Sophomore studying Computer Science at the University of California, Riverside. My interests include Web Development, Game Development, Mobile Applications, and Software Engineering!</p>
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