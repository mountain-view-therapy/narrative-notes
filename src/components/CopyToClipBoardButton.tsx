import { Button, Snackbar } from '@mui/material'
import { useState } from 'react'
import { renderToString } from "react-dom/server"
import NoteContent from './NoteContent';
import { observer } from 'mobx-react-lite';
import { useAppState } from '../state/provider'


const CopyToClipboardButton = () => {
    const { meetingInformation: {
        meetingLogistics: {
            startTime,
            endTime,
        }
    } } = useAppState();

    const [open, setOpen] = useState(false)

    const handleClick = async () => {
        setOpen(true)
        const html = renderToString(<NoteContent />)
        const type = "text/html";
        const blob = new Blob([html], { type })
        const data = [new ClipboardItem({ [type]: blob })]
        await navigator.clipboard.write(data)
    }

    return (
        <>
            <Button
                variant='contained'
                onClick={handleClick}
                disabled={!startTime || !endTime}
            >
                Copy Note
            </Button>
            <Snackbar
                open={open}
                onClose={() => setOpen(false)}
                autoHideDuration={2000}
                message="Copied to clipboard"
            />
        </>
    )
}

export default observer(CopyToClipboardButton)