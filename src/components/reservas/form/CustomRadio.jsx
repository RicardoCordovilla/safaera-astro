import { Card } from 'primereact/card'
import React from 'react'

const CustomRadio = ({ hora, setSelectedHour, selectedHour }) => {
    // console.log('CustomRadio', typeof (hora), selectedHour)
    return (
        <span
            className={`customRadio ${selectedHour === hora ? 'selected' : ''}`}
            onClick={() => setSelectedHour(hora)}
        >
            {hora}
        </span>
    )
}

export default CustomRadio