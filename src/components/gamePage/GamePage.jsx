import Game from '../Game/Game'
import Header from '../header/Header'
import styles from './GamePage.module.css'

function Centro() {
    return(
        <div className="container">
            <Header />
            <Game />
        </div>
    )
}

export default Centro