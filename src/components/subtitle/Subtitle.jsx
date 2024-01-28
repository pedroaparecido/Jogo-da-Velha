import styles from './Subtitle.module.css'

function Subtitle(props) {
    return(
        <h6 className={styles.subtitle}>{props.children}</h6>
    )
}

export default Subtitle