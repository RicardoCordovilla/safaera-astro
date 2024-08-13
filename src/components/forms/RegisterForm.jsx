import React, { useEffect, useState } from 'react'
// import "primereact/resources/themes/viva-dark/theme.css"
import 'primeicons/primeicons.css';
import Swal from 'sweetalert2'
import { format } from "@formkit/tempo"

import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';

import NameField from './components/NameField';
import CedulaField from './components/CedulaField';
import CumpleField from './components/CumpleField';
import CelularField from './components/CelularField';
import PersonaField from './components/PersonaField';
import CalendarField from './components/CalendarField';
import HoraField from './components/HoraField';
import NotesField from './components/NotesField';
import { API_METHODS } from '../../utils/configs';
import Ticket from './components/Ticket';
import axios from 'axios';
import "primereact/resources/themes/bootstrap4-dark-blue/theme.css";

const RegisterForm = () => {
    const defaultSelectedHour = 4
    const [horas, setHoras] = useState(['08:00', '08:30', '09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30'])

    // const [dataHours, loading, error, fetch] = useFetch()

    // const [responseSubmit, loadingSubmit, errorSubmit, fetchSubmit] = useFetch()
    // useEffect(() => {
    //     fetch(API_METHODS.configs.getConfigs)
    // }, [])

    // useEffect(() => {
    //     const response = dataHours && dataHours[0].data
    //     if (!dataHours) return
    //     // console.log(response?.horas)
    //     setHoras(response?.horas)
    // }, [dataHours])

    useEffect(() => {
        setHora(horas[defaultSelectedHour])
        // console.log(horas[defaultSelectedHour])
    }, [horas])

    // const horas = ['18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00', '22:30', '23:00', '23:30', '00:00', '00:30', '01:00', '01:30', '02:00']



    const [nombre, setNombre] = useState('')
    const [cedula, setCedula] = useState('')
    const [cumple, setCumple] = useState(false)
    const [celular, setCelular] = useState('')
    const [personas, setPersonas] = useState(2)
    const [fecha, setFecha] = useState('')
    const [hora, setHora] = useState()
    const [notes, setNotes] = useState('')

    const [data, setData] = useState({})

    const [showDialog, setShowDialog] = useState(false)

    const getHoras = () =>
        axios.get(API_METHODS.configs.getConfigs.url)
            .then(res => {
                console.log(res.data[0].data.horas)
                setHoras(res.data[0].data.horas)
            })
            .catch(err => console.log(err))

    useEffect(() => {
        getHoras()
    }, [])


    const handleTicket = () => {
        const date = format(fecha, "YYYY-MM-DD", 'es')
        const data = {
            nombre: nombre,
            cedula: cedula,
            cumple: cumple,
            celular: celular,
            personas: personas,
            fecha: date,
            hora: hora,
            notes: notes
        }
        console.log(data)
        if (!nombre || !cedula || !celular || !personas || !fecha || !hora)
            return Swal.fire({
                icon: 'error',
                title: 'Completa los campos!',
                text: `
                ${!nombre ? 'Nombre, ' : ''}
                ${!cedula ? 'Cédula, ' : ''} 
                ${!celular ? 'Celular, ' : ''}
                ${!personas ? 'Personas, ' : ''}
                ${!fecha ? 'Fecha, ' : ''}
                ${!hora ? 'Hora, ' : ''}`
            })
        setData(data)
        setShowDialog(true)
    }


    // useEffect(() => {
    //     console.log('responseSubmit', responseSubmit)
    //     if (responseSubmit?.message === "Reserva Creada" && !loadingSubmit && !errorSubmit) {

    //         Swal.fire({
    //             icon: 'success',
    //             title: 'Reserva exitosa!',
    //             text: 'Te esperamos en la farra!'
    //         })
    //     }
    // }, [responseSubmit])




    return (

        <div>
            <span>adas</span>
        </div>
        // <Card title="Reserva" subTitle="Completa este formulario"
        //     style={{
        //         width: '80%', margin: 'auto',
        //         borderRadius: '1rem', boxShadow: '0 0 1rem 0.5rem rgba(200, 200, 200, 0.5)',
        //         marginTop: '1.5em',
        //         marginBottom: '4 em',
        //     }}
        // >
        //     <div
        //         style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}
        //     >

        //         <NameField
        //             nombre={nombre}
        //             setNombre={setNombre}
        //         />

        //         <CedulaField
        //             cedula={cedula}
        //             setCedula={setCedula}
        //         />
        //         <CumpleField
        //             cumple={cumple}
        //             setCumple={setCumple}
        //         />

        //         <CelularField
        //             celular={celular}
        //             setCelular={setCelular}
        //         />

        //         <PersonaField
        //             personas={personas}
        //             setPersonas={setPersonas}
        //         />

        //         <CalendarField
        //             fecha={fecha}
        //             setFecha={setFecha}
        //         />

        //         <HoraField
        //             hora={hora}
        //             setHora={setHora}
        //             horas={horas}
        //         />

        //         <NotesField
        //             notes={notes}
        //             setNotes={setNotes}
        //         />


        //         <Button label="Generar ticket" className="p-button-lg"
        //             style={{ width: '100%' }}
        //             severity='success'
        //             onClick={handleTicket}
        //             type='submit'
        //         />

        //     </div>



        // </Card >

    )
}

export default RegisterForm