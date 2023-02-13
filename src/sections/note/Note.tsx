import { Box } from "@mui/system";
import { observer } from "mobx-react-lite";
import CopyToClipboardButton from "../../components/CopyToClipBoardButton";
import NoteContent from "../../components/NoteContent";

// const { meetingInformation: {reset} } = getState()

const Note = () => {
    return (
        <Box>
            <CopyToClipboardButton />
            {/* <Button
                onClick={() => reset()}
            >Reset</Button> */}
            <Box border="thick" margin={1} borderColor='black' borderRadius={2} borderTop={1} borderBottom={1} borderLeft={1} borderRight={1}>
                <NoteContent />
            </Box>
        </Box>
    )
}



export default observer(Note)