import { Checkbox, FormControlLabel, TextField, Typography } from '@mui/material'
import { Box, Container, Stack } from '@mui/system';
import { observer } from 'mobx-react-lite';
import { possibleProgressions } from '../../models/MeetingInformationModel';
import { getState } from '../../state/provider';


const Progress = () => {
  const {
    meetingInformation: {
      meetingLogistics: {
        clientInitials,
      },
      progressions,
      setProgress,
      setProgressReplacementText,
      identifiedProblem,
      setIdentifedProblem,
      setClientInitials,
    } } = getState()

    const replaceText = (text: string, index: number) => {
      return text.replace('[PROBLEM]', identifiedProblem).replace('[CLIENT]', clientInitials).replace('[REPLACEMENT]',progressions.find(i => i.possibleProgressIndex === index)?.replacementText || "[REPLACE ME]")
      }


  return (
    <Container>
      <Box>
        <Stack justifyContent='center' alignItems='center' flexDirection='row' margin={2}>
          <Typography fontWeight={800} fontSize={24}>Progress</Typography>
        </Stack>
      </Box>
      <Stack>
        <Stack flexDirection='row' justifyContent='space-between'>
          <TextField label='Identified Problem' style={{ margin: 3, width: 400, fontSize: 12 }} value={identifiedProblem} onChange={(e) => setIdentifedProblem(e.target.value)} />
          <TextField label="Client's Initials" value={clientInitials} onChange={(e) => setClientInitials(e.target.value)} style={{ width: 200 }} />
        </Stack>
        {
          possibleProgressions.map((progress, index) => (
            < Stack flexDirection='row' >
              <FormControlLabel control={<Checkbox
                checked={Boolean(progressions.find(i => i.possibleProgressIndex === index))}
                onChange={(e) => setProgress(index, e.target.checked)}
                inputProps={{ 'aria-label': 'self-care-affected-checkbox' }}
              />} label={replaceText(progress.text, index)} />
              {progress.prompt && Boolean(progressions.find(i => i.possibleProgressIndex === index)) &&
                <TextField label={progress.prompt} style={{ margin: 3, width: 350, fontSize: 12 }} value={progressions.find(i => i.possibleProgressIndex === index)?.replacementText} onChange={(e) => setProgressReplacementText(index, e.target.value)} />
              }
            </Stack>
          ))
        }
      </Stack >
    </Container >
  )
}

export default observer(Progress);
