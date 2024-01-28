import styles from './button.module.css'

function Button(props, { onClick }) {

    function onClick() {}

    return(
        <button
            className={styles.button}
            onClick={onClick}
        >
            {props.children}
        </button>
    )
}

export default Button