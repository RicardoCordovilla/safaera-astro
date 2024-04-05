import { FloatLabel } from "primereact/floatlabel"
import { InputText } from "primereact/inputtext"

const PersonaField = ({ personas, setPersona }) => {
    return (
        <div className="flex justify-content-center">
            <FloatLabel>
                <InputText id="personas"
                    style={{ width: '100%' }}
                    onChange={(e) => setPersona(e.target.value)}
                    keyfilter={/[0-9]+$/}
                    value={personas}
                    name='personas'
                    minLength={1}
                    maxLength={3}
                    className="p-inputtext-lg"
                    type='tel'
                />
                <label htmlFor="personas">¿Cuántas perersonas vienen?(aprox.)</label>
            </FloatLabel>
            {/* {getFormErrorMessage('personas')} */}
        </div>
    )
}

export default PersonaField