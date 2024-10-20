import styles from "./Chips.module.css"

export default function Chips({text}) {
    return (
        <>
            <button className={styles.chip}>{text}</button>
        </>
    )
}