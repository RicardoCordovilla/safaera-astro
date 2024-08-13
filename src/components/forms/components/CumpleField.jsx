// import { ToggleButton } from 'primereact/togglebutton'

import * as TglBtn from "primereact/togglebutton";
const { ToggleButton } = TglBtn;
export { ToggleButton };

const CumpleField = ({ cumple, setCumple }) => {
    return (
        <div className="">
            <span
                style={{
                    width: '100%', margin: '1rem 0',
                    display: 'flex', gap: '0.5rem', flexDirection: 'row',
                    alignItems: 'center'
                }}
            >
                <label htmlFor="cumple">¿Hay algún cumpleañero?</label>
                <ToggleButton id="cumple"
                    checked={cumple}
                    onChange={(e) => { setCumple(e.value) }}
                    onLabel="🎉 SI" offLabel="💙 NO"
                    className={`p-button-lg ${cumple ? 'p-button-success' : 'p-button-danger'}`}

                />
            </span>
        </div>
    )
}

export default CumpleField