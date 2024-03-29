import { Button, Dialog, Snackbar, Typography } from '@mui/material'
import { useState } from 'react'
import { observer } from 'mobx-react-lite';
import { useAppState } from '../state/provider';
import { Box, Stack } from '@mui/system';


const ResetStateButton = () => {

    const { resetNoteState } = useAppState()
    const [snackBarOpen, setSnackbarOpen] = useState(false)
    const [dialogOpen, setDialogOpen] = useState(false)

    const handleClick = () => {
        resetNoteState()
        setSnackbarOpen(true)
        setDialogOpen(false)
    }

    return (
        <>
            <Button variant='contained' onClick={() => setDialogOpen(true)}>Reset Note</Button>
            <Dialog
                open={dialogOpen}
                onClose={() => setDialogOpen(false)}
            >
                <Box padding={3}>
                    <Stack flexDirection="column" alignItems="center">
                        <Typography color="red" fontWeight={800}> DON'T FORGET TO UPDATE THE CPT CODE IN YOUR CALENDAR</Typography>
                        <Typography>Do you really want to reset the note and lose any changes?</Typography>
                        <Stack flexDirection='row' justifyContent='space-evenly' padding={3} >
                            <Button
                                variant='contained'
                                onClick={() => handleClick()}
                                style={{marginRight: 15}}
                            >
                                Reset Note
                            </Button>
                            <Button
                                variant='contained'
                                onClick={() => setDialogOpen(false)}
                            >
                                Dont Reset Note
                            </Button>
                        </Stack>
                    </Stack>
                </Box>
            </Dialog>
            <Snackbar
                open={snackBarOpen}
                onClose={() => setSnackbarOpen(false)}
                autoHideDuration={2000}
                message="Note has been reset"
            />
        </>
    )
}

export default observer(ResetStateButton)