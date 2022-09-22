import { TextField } from '@mui/material'
import './style.css'

const PhoneInput = ({ handleChange, keyValue, value }) => {
    return (
        <div role="phone-input" className="phone-input">
            <TextField
                fullWidth
                label="Telefone"
                value={value}
                onChange={(event) => handleChange(keyValue, event.target.value)}
            />
        </div>
    )
}

export default PhoneInput
