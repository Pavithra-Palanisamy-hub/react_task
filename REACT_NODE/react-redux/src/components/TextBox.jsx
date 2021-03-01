//import material UI
import TextField from '@material-ui/core/TextField';

//import css
import './TextBox.css'

function TextBox(props) {

    const {
        id,
        label,
        variant,
        value,
        onChange
    } = props

  return(
        <TextField
            id = {id}
            label = {label}
            variant = {variant}
            value = {value}
            onChange = {onChange}
        />
    )
}
export default TextBox;