import { useState } from 'react'
import { InputLabel, Select, MenuItem, FormControl } from '@mui/material'
import './style.css'

const CityInput = ({ handleChange, keyValue, value }) => {
    return (
        <div role="city-input" className="city-input">
            <FormControl fullWidth>
                <InputLabel id="city-select-label">Cidade</InputLabel>
                <Select
                    labelId="city-select-label"
                    id="city-select"
                    value={value}
                    label="Cidade"
                    onChange={(event) =>
                        handleChange(keyValue, event.target.value)
                    }
                >
                    <MenuItem value="Campinas">Campinas</MenuItem>
                    <MenuItem value="São Paulo">São Paulo</MenuItem>
                    <MenuItem value="Sumaré">Sumaré</MenuItem>
                </Select>
            </FormControl>
        </div>
    )
}

export default CityInput
