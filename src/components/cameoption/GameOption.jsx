import styles from './GameOption.module.css'
import Icon from '../icon/Icon'

const GameIcon = ({ iconName }) => <Icon iconName={iconName} size="25px" />

function GameOption(props) {
    return(
        <div className={styles.gameOption}>
            {
                props.status === 1 && <Icon iconName="circle" size="25px" />
            }
            {
                props.status === -1 && <Icon iconName="x" size="25px" />
            }
        </div>
    )
}

export default GameOption