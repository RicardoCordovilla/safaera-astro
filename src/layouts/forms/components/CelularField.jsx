import { FloatLabel } from 'primereact/floatlabel'
import { InputText } from 'primereact/inputtext'

const CelularField = ({ celular, setCelular }) => {
    return (
        <div className="flex justify-content-center">
            <FloatLabel>
                <InputText id="celular"
                    style={{ width: '100%' }}
                    onChange={(e) => setCelular(e.target.value)}
                    keyfilter={/[0-9]+$/}
                    value={celular}
                    name='celular'
                    minLength={10}
                    maxLength={10}
                    className="p-inputtext-lg"
                    type='tel'
                />
                <label htmlFor="celular">Celular</label>
            </FloatLabel>
            {/* {getFormErrorMessage('celular')} */}
        </div>
    )
}

export default CelularField