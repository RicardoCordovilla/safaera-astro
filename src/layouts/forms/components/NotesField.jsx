import { FloatLabel } from 'primereact/floatlabel'
import { InputText } from 'primereact/inputtext'

const NotesField = ({ notes, setNotes }) => {
    return (
        <FloatLabel>
            <InputText id="notes"
                style={{ width: '100%' }}
                onChange={(e) => setNotes(e.target.value)}
                value={notes}
                name='notes'
                className="p-inputtext-lg"
                type='text'
            />
            <label htmlFor="notes">Observaciones adicionales</label>
        </FloatLabel>
    )
}

export default NotesField