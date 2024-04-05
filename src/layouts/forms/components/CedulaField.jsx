// import { FloatLabel } from 'primereact/floatlabel'
// import { InputText } from 'primereact/inputtext'

import * as InpTxt from "primereact/inputtext";
const { InputText } = InpTxt;
export { InputText };

import * as FltLbl from "primereact/floatlabel";
const { FloatLabel } = FltLbl;
export { FloatLabel };


const CedulaField = ({ cedula, setCedula }) => {
    return (
        <div className="flex justify-content-center">
            <FloatLabel>
                <InputText id="cedula"
                    style={{ width: '100%' }}
                    onChange={(e) => { setCedula(e.target.value) }}
                    keyfilter={/[0-9]+$/}
                    value={cedula}
                    name='cedula'
                    minLength={10}
                    maxLength={20}
                    // className={`p-inputtext-lg ${isFormFieldInvalid('cedula') ? 'p-invalid' : ''}`}
                    type='tel'
                />
                <label htmlFor="cedula">Cédula</label>
            </FloatLabel>
            {/* {getFormErrorMessage('cedula')} */}
        </div>
    )
}

export default CedulaField