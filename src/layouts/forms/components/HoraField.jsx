import RadioGroup from "../../../components/reservas/form/RadioGroup"

const HoraField = ({ hora, setHora, horas }) => {

    return (
        <div className=""
            style={{
                width: '100%',
                display: 'flex', gap: '1.7rem', flexDirection: 'column',
            }}
        >
            <label htmlFor="hora">
                Hora de tu llegada: <strong style={{
                    fontSize: '1.1rem',
                    color: '#fff',
                    backgroundColor: 'rgba(0, 0, 0, 0.4)',
                    padding: '0.5rem 1rem',
                    borderRadius: '0.3rem',
                }}>{hora}</strong>
            </label>
            {hora !== undefined && <RadioGroup
                horas={horas}
                onChange={(e) => {
                    setHora(e)
                }}
                selectedRadioHour={hora}
            />}
        </div>
    )
}

export default HoraField