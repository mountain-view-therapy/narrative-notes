import { Button, ButtonGroup, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, InputLabel, NativeSelect, Radio, RadioGroup, TextareaAutosize, TextField, Typography } from '@mui/material'
import { Box, Container, Stack } from '@mui/system';
import { observer } from 'mobx-react-lite';
import { affectStates, cognitiveFunctioningStates, functionalStatusStates, interpersonalStates, moodStates, riskLevels } from '../../models/MeetingInformationModel';
import { getState } from '../../state/provider';


const Problems = () => {
  const { meetingInformation: {
    problems,
    setProblems
  }
  } = getState();




  return (
    < Container >
      <Box>
        <Stack justifyContent='center' alignItems='center' flexDirection='row' margin={2}>
          <Typography fontWeight={800} fontSize={24}>Problems Discussed</Typography>
        </Stack>
      </Box>
      <Box padding={2}>
        <TextField
          id="problems-textarea"
          multiline
          fullWidth
          rows={20}
          value={problems}
          onChange={(e) => setProblems(e.target.value)}
        />

      </Box>
    </Container >
  )
}

export default observer(Problems);
