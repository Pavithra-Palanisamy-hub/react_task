//import css
import './Button.css'

function Button  (props)  {

    const { onClick, name } = props;

    return(
        <button onClick = {onClick}>{name}</button>
    )
}

export default Button;