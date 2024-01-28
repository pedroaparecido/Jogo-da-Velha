import styles from './Game.module.css'
import GameOption from '../cameoption/GameOption'

function Game() {
    return(
        <div className={styles.game}>
            <GameOption />
            <GameOption />
            <GameOption />
            <GameOption />
            <GameOption />
            <GameOption />
            <GameOption />
            <GameOption />
            <GameOption />
        </div>
    )
}

export default Game