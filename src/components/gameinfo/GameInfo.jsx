import styles from './GameInfo.module.css'
import Icon from '../icon/Icon'
import Button from '../button/Button'

function GameInfo(props) {

    const shouldEnableButton = () => props.winner !== 0 || props.isDraw

    return(
        <div className={styles.gameInfo}>

            {
                !props.isDraw && props.winner === 0 &&
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
                !props.isDraw && props.winner !== 0 &&
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
            {
                props.isDraw && <h4>Empate!</h4>
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