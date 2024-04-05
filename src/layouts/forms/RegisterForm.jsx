import React, { useEffect, useState } from 'react'
import "primereact/resources/themes/viva-dark/theme.css"
import 'primeicons/primeicons.css';
import Swal from 'sweetalert2'
import { format } from "@formkit/tempo"

// import { Card } from 'primereact/card';
// import { Button } from 'primereact/button';
// import { Dialog } from 'primereact/dialog';

import NameField from './components/NameField';
import CedulaField from './components/CedulaField';
import CumpleField from './components/CumpleField';
import CelularField from './components/CelularField';
import PersonaField from './components/PersonaField';
import CalendarField from './components/CalendarField';
import HoraField from './components/HoraField';
import NotesField from './components/NotesField';
// import useFetch from '../../utils/useFetch';
import { API_METHODS } from '../../utils/configs';
import Ticket from './components/Ticket';
import axios from 'axios';

import * as BtnPrime from "primereact/button";
const { Button } = BtnPrime;
export { Button };

import * as CardPrime from "primereact/card";
const { Card } = CardPrime;
export { Card };

import * as DlgPrime from "primereact/dialog";
const { Dialog } = DlgPrime;
export { Dialog };



const RegisterForm = () => {
    const defaultSelectedHour = 4
    const [horas, setHoras] = useState([])

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
            .then(res => setHoras(res.data[0].data.horas))
            .catch(err => console.log(err))

    useEffect(() => {
        getHoras()
    }, [])


    // const formik = useFormik({
    //     initialValues: {
    //         nombre: '',
    //         cedula: '',
    //         // celular: '',
    //         cumple: false,
    //         // personas: 2,
    //         // fecha: '',
    //         // hora: horas[defaultSelectedHour],
    //         // notes: ''
    //     },
    //     validate: (data) => {
    //         let errors = {}
    //         !data.nombre && (errors.nombre = 'Completar el nombre')
    //         !data.cedula && (errors.cedula = 'Cédula 10 dígitos min')
    //         // if (!data.celular) {
    //         //     errors.celular = 'Completar el celular'
    //         // }
    //         // if (!data.fecha) {
    //         //     errors.fecha = 'Seleccionar una fecha'
    //         // }
    //         // if (!data.personas) {
    //         //     errors.personas = 'Min 2 personas'
    //         // }

    //         return errors
    //     },

    //     onSubmit: (data) => {
    //         // setNombre(data.nombre)
    //         setSubmitting(true)
    //         if (!formik.errors.nombre
    //             && !formik.errors.cedula
    //             // && !formik.errors.celular
    //             // && !formik.errors.fecha
    //             // && !formik.errors.personas
    //         ) {
    //             console.log('onSubmit', data)
    //             // setShowDialog(true)
    //             // formik.resetForm()
    //             setSubmitting(false)
    //         }
    //     }
    // })

    const isFormFieldInvalid = (name) => {

    }
    // !!(formik.touched[name] && formik.errors[name])

    const getFormErrorMessage = (name) => {
        return isFormFieldInvalid(name) &&
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'left',
                }}
            >
                <small className="p-error"
                    style={{
                        position: 'relative',
                        // left: '0.2rem',
                        backgroundColor: 'rgba(0, 0, 0, 0.8)',
                        alignSelf: 'left',
                        justifySelf: 'left',
                        padding: '0.2rem 0.5rem',
                        borderRadius: '0 0 0.3rem 0.3rem',
                        textShadow: 'none'

                    }}
                >{formik.errors[name]}</small>
            </div>
    }


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

        <Card title="Reserva" subTitle="Completa este formulario"
            style={{
                width: '80%', margin: 'auto',
                borderRadius: '1rem', boxShadow: '0 0 1rem 0.5rem rgba(200, 200, 200, 0.5)',
                marginTop: '1.5em',
                marginBottom: '4 em',
            }}
        >
            <div
                style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}
            >

                <NameField
                    nombre={nombre}
                    setNombre={setNombre}
                />

                <CedulaField
                    cedula={cedula}
                    setCedula={setCedula}
                />
                <CumpleField
                    cumple={cumple}
                    setCumple={setCumple}
                />

                <CelularField
                    celular={celular}
                    setCelular={setCelular}
                />

                <PersonaField
                    personas={personas}
                    setPersonas={setPersonas}
                />

                <CalendarField
                    fecha={fecha}
                    setFecha={setFecha}
                />

                <HoraField
                    hora={hora}
                    setHora={setHora}
                    horas={horas}
                />

                <NotesField
                    notes={notes}
                    setNotes={setNotes}
                />


                <Button label="Generar ticket" className="p-button-lg"
                    style={{ width: '100%' }}
                    severity='success'
                    onClick={handleTicket}
                    type='submit'
                />

            </div>

            <Dialog
                // open={showDialog}
                visible={showDialog}
                style={{
                    width: '100%',
                    height: '100%',
                    backgroundColor: '#fff',
                    // zIndex: '-1',
                }}
                position='top'
                modal
                onHide={() => setShowDialog(false)}>

                <Ticket
                    data={data}
                    setShowDialog={setShowDialog}
                />
            </Dialog>


        </Card >

    )
}

export default RegisterForm