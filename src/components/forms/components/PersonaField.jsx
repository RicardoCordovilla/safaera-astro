// import { FloatLabel } from "primereact/floatlabel"
// import { InputText } from "primereact/inputtext"

import * as InpTxt from "primereact/inputtext";
const { InputText } = InpTxt;
export { InputText };

import * as FltLbl from "primereact/floatlabel";
const { FloatLabel } = FltLbl;
export { FloatLabel };


const PersonaField = ({ personas, setPersonas }) => {
    return (
        <div className="flex justify-content-center">
            <FloatLabel>
                <InputText id="personas"
                    style={{ width: '100%' }}
                    onChange={(e) => setPersonas(e.target.value)}
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
