
import styles from "../styles/projects.module.css"

export default function projects(props) {
    return(
        <a href={props.link} target="_blank">
            <div className={styles.project}>
                <div className={styles.title}>{props.title}</div>
                <div className={styles.description}>
                    <div>{props.date}</div>
                    <div>{props.description}</div>
                </div>
            </div>
        </a>
    )
}