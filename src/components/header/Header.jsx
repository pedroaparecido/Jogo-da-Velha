import styles from './Header.module.css'

import Title from '../title/Title'
import Subtitle from '../subtitle/Subtitle'

function Header(props) {
    return(
        <div className={styles.header}>
            <Title>Jogo da Velha</Title>
            <Subtitle>Criado por Pedro Aparecido</Subtitle>
        </div>
    )
}

export default Header