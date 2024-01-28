import styles from './Header.module.css'

function Header(props) {
    return(
        <header className={styles.header}>
            <h1>{props.children}</h1>
            <div className={styles.div}>
                <p>Criado por Pedro Aparecido</p>
                <img src="" alt="" />
            </div>
        </header>
    )
}

export default Header