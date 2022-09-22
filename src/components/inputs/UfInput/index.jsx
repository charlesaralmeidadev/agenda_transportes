import { useState } from 'react'
import { InputLabel, Select, MenuItem, FormControl } from '@mui/material'
import './style.css'

const UfInput = ({ handleChange, keyValue, value }) => {
    return (
        <div role="uf-input" className="uf-input">
            <FormControl fullWidth>
                <InputLabel id="uf-select-label">UF</InputLabel>
                <Select
                    labelId="uf-select-label"
                    id="uf-select"
                    value={value}
                    label="UF"
                    onChange={(event) =>
                        handleChange(keyValue, event.target.value)
                    }
                >
                    <MenuItem value="SP">SP</MenuItem>
                    <MenuItem value="RJ">RJ</MenuItem>
                    <MenuItem value="BA">BA</MenuItem>
                </Select>
            </FormControl>
        </div>
    )
}

export default UfInput
