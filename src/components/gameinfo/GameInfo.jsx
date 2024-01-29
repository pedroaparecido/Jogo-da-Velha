import styles from './GameInfo.module.css'
import Icon from '../icon/Icon'
import Button from '../button/Button'

function GameInfo(props) {

    const shouldEnableButton = () => {
        if(props.winner !== 0) return true
    }

    return(
        <div className={styles.gameInfo}>

            {
                props.winner === 0 &&
                <>
                    <h4>Próximo a jogar:</h4>
                    {
                        props.currentPlayer === 1 && <Icon iconName="circle" />
                    }
                    {
                        props.currentPlayer === -1 && <Icon iconName="x" />
                    }
                </>
            }
            {
                props.winner !== 0 &&
                <>
                    <h4>Fim de jogo! Campeão:</h4>
                    {
                        props.winner === 1 && <Icon iconName="circle" />
                    }
                    {
                        props.winner === -1 && <Icon iconName="x" />
                    }
                </>
            }
            <Button
                onClick={props.onReset}
                disabled={!shouldEnableButton()}
            >
                Reiniciar
            </Button>
            </div>
    )
}

export default GameInfo