import './Tooltip.css'

const Tooltip = (props) => {
    return (
        <div className="tooltip">
            {props.text}
        </div>
    )
}

export default Tooltip;