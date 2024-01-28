function Icon(props) {
    return(
        <a href={props.link} target="_blank"><img src={`/icons/${props.iconName}.svg`} width={props.size} /></a>
    )
}

Icon.defaultProps = {
    size: '30px'
}

export default Icon