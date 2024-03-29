import { Button, Checkbox, FormControlLabel, TextField, Typography } from '@mui/material'
import { Box, Container, Stack } from '@mui/system';
import { observer } from 'mobx-react-lite';
import { possibleProgressions } from '../../state/constants';
import { useAppState } from '../../state/provider';


const Progress = () => {
  const {
    meetingInformation: {
      meetingLogistics: {
        clientInitials,
        setClientInitials,
      },
      progressions,
      otherProgressions,
      setProgress,
      setProgressReplacementText,
      setOtherProgression,
      addOtherProgression,
      removeOtherProgression,
      identifiedProblem,
      setIdentifedProblem,
    } } = useAppState()

    const replaceText = (text: string, index: number) => {
      return text.replace('[PROBLEM]', identifiedProblem).replace('[CLIENT]', clientInitials).replace('[REPLACEMENT]',progressions.find(i => i.possibleProgressIndex === index)?.replacementText || "[REPLACE ME]")
      }

      let section = "";

      const displayProgression = (progression: { text: string, prompt?: string, section: string }, index: number) => {
        let showSectionHeading = false
        if (section !== progression.section) {
          section = progression.section
          showSectionHeading = true
        }
        return (
          <>
            {showSectionHeading && <Typography fontSize={30} fontWeight={800} marginY={4}>{progression.section}</Typography>}
            < Stack flexDirection='row' key={`progress-${index}`}>
              <FormControlLabel control={<Checkbox
                checked={Boolean(progressions.find(i => i.possibleProgressIndex === index)?.checked)}
                onChange={(e) => setProgress(index, e.target.checked)}
                inputProps={{ 'aria-label': 'self-care-affected-checkbox' }}
              />} label={replaceText(progression.text, index)} />
              {progression.prompt && Boolean(progressions.find(i => i.possibleProgressIndex === index)) &&
                <TextField label={progression.prompt} style={{ margin: 3, width: 350, fontSize: 12 }} value={progressions.find(i => i.possibleProgressIndex === index)?.replacementText} onChange={(e) => setProgressReplacementText(index, e.target.value)} />
              }
            </Stack>
          </>
        )
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
          <TextField label='Identified Issue' style={{ margin: 3, width: 400, fontSize: 12 }} value={identifiedProblem} onChange={(e) => setIdentifedProblem(e.target.value)} />
          <TextField label="Client's Initials" value={clientInitials} onChange={(e) => setClientInitials(e.target.value)} style={{ width: 200 }} />
        </Stack>
        {
          possibleProgressions.map((progress, index) => (
            displayProgression(progress, index)
          ))
        }
      </Stack >
      <Stack flexDirection='column' spacing={1} marginTop={3}>
          <Stack flexDirection='column' >
            {otherProgressions.map((otherProgression, idx) =>
              <Stack flexDirection='row' alignItems='center' key={`otherPrgression-${idx}`}>
                <TextField label={`Other Progression ${idx + 1}`} fullWidth style={{ margin: 3, }} value={otherProgression} onChange={(e) => setOtherProgression(idx, e.target.value)} />
                <Button
                  variant='contained'
                  style={{ height: 30 }}
                  disabled={otherProgressions.length < 2}
                  onClick={() => removeOtherProgression(idx)}
                >
                  -
                </Button>
              </Stack>
            )}
          </Stack>
          <Button
            variant='contained'
            style={{ width: 20 }}
            onClick={() => addOtherProgression()}
          >
            +
          </Button>
        </Stack>
    </Container >
  )
}

export default observer(Progress);
