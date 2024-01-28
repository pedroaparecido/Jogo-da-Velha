import Button from '../button/Button'
import styles from './Centro.module.css'

function Centro() {
    return(
        <div className={styles.principal}>
            <div className={styles.esquerda}>
                <div className={styles.retangulo}>
                    <button className={styles.q}></button>
                    <button className={styles.q}></button>
                    <button className={styles.q}></button>
                </div>
                <div className={styles.retangulo}>
                    <button className={styles.q}></button>
                    <button className={styles.q}></button>
                    <button className={styles.q}></button>
                </div>
                <div className={styles.retangulo}>
                    <button className={styles.q}></button>
                    <button className={styles.q}></button>
                    <button className={styles.q}></button>
                </div>
            </div>
            <div className={styles.direita}>
                <div className={styles.direitaComponents}>
                    <p>Próximo a jogar:</p>
                    <img src="" alt="" />
                    <div className={styles.button}>
                        <Button>Reiniciar</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Centro