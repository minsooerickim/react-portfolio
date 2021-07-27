import { Component } from "react";

import styles from "../styles/nav.module.css"
import Link from "next/link"

export default class NavBar extends Component {
    // state = {
    //     open: false
    // }

    // Toggle = () => {
    //     this.setState({
    //         open: !this.state.open
    //     })
    // }

    render() {
        return (
            <div>
                <div className={styles.nav}>
                    <Link href="/">
                        <p>Home</p>
                    </Link>
                    <Link href="/projects">
                        <p>Projects</p>
                    </Link>
                    <Link href="/about">
                        <p>About</p>
                    </Link>
                </div>
            </div>
        )
    }
}