import React, { useEffect, useState } from 'react'
import CustomRadio from './CustomRadio'
import './radiogroup.style.css'
import { RadioButton } from 'primereact/radiobutton'

const RadioGroup = ({ horas, onChange, selectedRadioHour }) => {

    // console.log(selectedRadioHour)

    const [selectedHour, setSelectedHour] = useState(selectedRadioHour)

    useEffect(() => {
        onChange(selectedHour)
    }, [selectedHour])

    
    return (
        <div className='hourBx'>
            {horas.map((hora, index) => (

                <CustomRadio key={index} hora={hora}
                    selectedHour={selectedHour}
                    setSelectedHour={setSelectedHour}
                />
            ))}
        </div>
    )
}

export default RadioGroup