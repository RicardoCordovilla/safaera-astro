// import { Calendar } from "primereact/calendar"

// import { addLocale } from 'primereact/api';

import { useEffect, useState } from "react";
import axios from "axios";
import useFetch from "../../../utils/useFetch";
import { API_METHODS } from "../../../utils/configs";

import * as CldrPrime from "primereact/calendar";
const { Calendar } = CldrPrime;
export { Calendar };

// import * as LclPrime from "primereact/api";
// const { addLocale } = LclPrime;
// export { addLocale };


const CalendarField = ({ fecha, setFecha }) => {

    const [data, loding, error, fetch] = useFetch()
    // const [disabledDays, setDisabledDays] = useState([])
    const [enabledDays, setEnabledDays] = useState([])
    const [enabledDates, setEnabledDates] = useState([])
    const [disabledDates, setDisabledDates] = useState([])

    useEffect(() => {
        fetch(API_METHODS.configs.getConfigs)
    }, [])


    useEffect(() => {
        const response = data && data[0].data
        if (!data) return
        // console.log(response?.calendar)
        setEnabledDays(response?.weekdays)
        setDisabledDates([...disabledDates, new Date(response?.calendar.disable)])
        setEnabledDates([...enabledDates, new Date(response?.calendar.enable)])
    }, [data])



    // addLocale('es', {
    //     firstDayOfWeek: 1,
    //     showMonthAfterYear: true,
    //     dayNames: ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'],
    //     dayNamesShort: ['dom', 'lun', 'mar', 'mié', 'jue', 'vie', 'sáb'],
    //     dayNamesMin: ['D', 'L', 'M', 'X', 'J', 'V', 'S'],
    //     monthNames: ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'],
    //     monthNamesShort: ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'],
    //     today: 'Hoy',
    //     clear: 'Limpiar'
    // });

    const dateTemplate = (date) => {

        if (!date.selectable) {
            return (
                // <strong style={{ textDecoration: 'line-through', color: '#585858' }}>{date.day}</strong>
                <div style={{ backgroundColor: '#353535', borderRadius: '50%', width: '2em', height: '2em', lineHeight: '2em', color: '#353535' }}>{date.day}</div>
            );
        }

        if (date.selectable) {
            return (
                // change color of enabled dates with contrast color
                <div style={{ border: '1px solid var(--color-cyan)', borderRadius: '6px', width: '2em', height: '2em', lineHeight: '2em', color: 'var(---color-cyan)' }}>{date.day}</div>
            );
        }

        return date.day;
    }


    return (
        <div className="flex justify-content-center">
            <Calendar id="fecha"
                // locale="es"
                value={fecha}
                onChange={(e) => setFecha(e.value)}
                className="p-inputtext-lg"
                showIcon
                dateFormat="dd/mm/yy"
                placeholder="Fecha de tu reserva"
                minDate={new Date()}
                disabledDays={
                    [0, 1, 2, 3, 4, 5, 6].filter((day) => !enabledDays.includes(day))
                }
                // enabledDates={enabledDates}
                // disabledDates={disabledDates}
                dateTemplate={dateTemplate}
                disabled={loding}
                maxDate={new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0)}

            />
            {/* {getFormErrorMessage('fecha')} */}
        </div>
    )
}

export default CalendarField