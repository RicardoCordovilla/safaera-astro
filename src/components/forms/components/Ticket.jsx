import { useEffect, useState } from 'react'
import '../../../styles/ticket.style.css'
import Swal from 'sweetalert2'
import { API_METHODS } from '../../../utils/configs'
import axios from 'axios'
import { format } from "@formkit/tempo"


const Ticket = ({ data, setShowDialog }) => {


    const { nombre, cedula, cumple, personas, celular, fecha, hora, notes } = data

    const [submitting, setSubmitting] = useState(false)

    const fetchSubmit = (fetch) => {
        axios({
            method: fetch.method,
            url: fetch.url,
            data: fetch.body
        })
            .then(res => {
                if (res.data.message === "Reserva Creada") {
                    setShowDialog(false)
                    Swal.fire({
                        icon: 'success',
                        title: 'Reserva exitosa!',
                        text: 'Te esperamos en la farra!',
                        confirmButtonText: 'Ok',
                        confirmButtonColor: 'var(--color-cyan)'
                    })
                        .then((result) => {
                            if (result.isConfirmed) {
                                window.location.href = 'confirmacion'
                            }
                        })
                }
            })
    }


    const handleSubmit = () => {
        console.log('handleSubmit')
        // setShowDialog(false)
        fetchSubmit({
            url: API_METHODS.reservas.createReserva.url,
            method: 'POST',
            body: data
        })
    }



    useEffect(() => {
        console.log(submitting)
        if (submitting)
            handleSubmit()
    }, [submitting])

    return (
        <section className="tiketBx " id="tiketBx">
            <div className="tiketBody">
                <div className="tiket" id="tiket">
                    <figure className='ticketLogo'>
                        <img src="/images/logos/safaera_logo.png" alt="" />
                    </figure>
                    <h3>Confirmación de la reserva</h3>

                    <table>
                        <tr>
                            <td>Nombre:</td>
                            <td>{nombre}</td>
                        </tr>
                        <tr>
                            <td>Cédula:</td>
                            <td>{cedula}</td>
                        </tr>
                        <tr>
                            <td>Cumpleaños:</td>
                            <td>{cumple}</td>
                        </tr>
                        <tr>
                            <td>Celular:</td>
                            <td>{celular}</td>
                        </tr>
                        <tr>
                            <td>Personas:</td>
                            <td>{personas}</td>
                        </tr>
                        <tr>
                            <td>Día:</td>
                            <td>{format(fecha, 'dddd, D MMMM')}</td>
                        </tr>
                        <tr>
                            <td>Hora:</td>
                            {/* <td>{hora}</td> */}
                            <td>{hora}</td>
                        </tr>
                        <tr>
                            <td>Observaciones:</td>
                            <td>{notes}</td>
                        </tr>


                    </table>

                    <button
                        style={{
                            margin: 'auto',
                            display: submitting ? 'none'
                                : 'block'
                        }}
                        onClick={
                            // handleSubmit()
                            () => setSubmitting(true)
                        }
                        // disabled={!submitting}
                        type="button" className="btn" id="btn_enviar"
                    >
                        <i className="animation"
                        ></i>Reservar<i className="animation"></i>
                    </button>

                    <div className="tiket__condiciones">
                        <ul>
                            <li>El servicio de mesa es para el consumo permanente de botellas.</li>
                            <li>Estricto derecho de admisión</li>
                            <li>Una vez cumplido el aforo, SAFAERA se reserva el derecho de admision.
                                Recuerda cumplir con la hora de tu reserva.
                            </li>
                            <li>Tiempo estimado de espera para ingresar: 5-10 minutos</li>
                            <li>Dress code: Semi formal, prohibido prendas deportivas (Camisetas, sudaderas, gorras,
                                prendas
                                rotas, etc.)</li>
                            <li>Open door 20h00</li>
                            <li>Aforo limitado</li>
                            <li>Cumplir con la hora de llegada definida en la reserva(+/- 15min)</li>
                            <li>Presentación ID (cédula de identidad, licencia de conducir, pasaporte)
                            </li>

                        </ul>
                    </div>

                </div>
                <div className="btnsTiket">
                    {/* <button type="button" className="btnSave" id="btn_saveTiket"
                    // onClick={handleSubmit}
                    >
                        Guardar ticket
                    </button> */}
                </div>
            </div>
        </section >


    )
}

export default Ticket