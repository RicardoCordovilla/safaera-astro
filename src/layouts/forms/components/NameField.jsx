import { FloatLabel } from 'primereact/floatlabel'
import { InputText } from 'primereact/inputtext'

const NameField = ({ nombre, setNombre }) => {
    return (
        <div className="card flex justify-content-center">
            <FloatLabel>
                <InputText id="nombre"
                    style={{ width: '100%' }}
                    onChange={(e) => { setNombre(e.target.value) }}
                    value={nombre}
                    name='nombre'
                    keyfilter={/^[a-zA-Z\s]*$/}
                    minLength={3}
                    // className={`p-inputtext-lg ${isFormFieldInvalid('nombre') ? 'p-invalid' : ''}`}
                    type='text'
                    required
                />
                <label htmlFor="nombre">Nombre</label>
            </FloatLabel>
            {/* {getFormErrorMessage('nombre')} */}
        </div>
    )
}

export default NameField