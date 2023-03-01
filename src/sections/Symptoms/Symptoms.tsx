import { Button, Checkbox, FormControl, FormControlLabel, FormLabel, TextField, Typography } from '@mui/material'
import { Box, Container, Stack } from '@mui/system';
import { observer } from 'mobx-react-lite';
import {
  possibleAnxietySymptoms,
  possibleDepressionSymptoms,
  possiblePTSDSymptoms,
} from '../../state/constants';
import { getState } from '../../state/provider';

const Symptoms = () => {
  const { meetingInformation: {
    symptoms: {
      anxietySymptoms,
      depressionSymptoms,
      ptsdSymptoms,
      otherSymptoms,
      groupSymptomsTogether,
      toggleAnxietySymptom,
      toggleDepressionSymptom,
      togglePTSDSymptom,
      setOtherSymptom,
      addOtherSymptom,
      removeOtherSymptom,
      setGroupSystemsTogether,
    },
  }
  } = getState()

  return (
    < Container >
      <Box>
        <Stack justifyContent='center' alignItems='center' flexDirection='row' margin={2}>
          <Typography fontWeight={800} fontSize={24}>Symptoms</Typography>
        </Stack>
      </Box>
      <Stack flexDirection='column' spacing={6}>

        <Stack flexDirection='row' justifyContent='space-evenly'>
          <FormControl>
            <FormLabel>Anxiety Symptoms</FormLabel>
            {
              possibleAnxietySymptoms.map(symptom =>
                <Button
                  style={{ margin: 3,  fontSize: 12 }}
                  size='small'
                  variant='contained'
                  key={'anxiety-' + symptom}
                  onClick={() => toggleAnxietySymptom(symptom)}
                  color={anxietySymptoms.includes(symptom) ? 'primary' : 'inherit'}>
                  {symptom}
                </Button>)
            }
          </FormControl>

          <FormControl>
            <FormLabel>Depression Symptoms</FormLabel>
            {
              possibleDepressionSymptoms.map(symptom =>
                <Button
                  style={{ margin: 3, fontSize: 12 }}
                  size='small'
                  variant='contained'
                  key={'depression-' + symptom}
                  onClick={() => toggleDepressionSymptom(symptom)} color={depressionSymptoms.includes(symptom) ? 'primary' : 'inherit'}>
                  {symptom}
                </Button>)
            }
          </FormControl>
        </Stack>

        <Stack flexDirection='row' justifyContent='space-evenly'>
          <FormControl>
            <FormLabel>PTSD Symptoms</FormLabel>
            {
              possiblePTSDSymptoms.map(symptom =>
                <Button
                  style={{ margin: 3, maxWidth: 350, fontSize: 12 }}
                  size='small'
                  variant='contained'
                  key={'PTSD-' + symptom}
                  onClick={() => togglePTSDSymptom(symptom)} color={ptsdSymptoms.includes(symptom) ? 'primary' : 'inherit'}>
                  {symptom}
                </Button>)
            }
          </FormControl>
          <Stack flexDirection='column' spacing={5} justifyContent='center'>

            <Stack flexDirection='column' spacing={1}>
              <Stack flexDirection='column' >
                {otherSymptoms.map((otherSymptom, idx) =>
                  <Stack flexDirection='row' alignItems='center' key={`other-symptom-${idx}`}>
                    <TextField label={`Other Symptom ${idx + 1}`} style={{ margin: 3, fontSize: 12 }} value={otherSymptom} onChange={(e) => setOtherSymptom(idx, e.target.value)} />
                    <Button
                      variant='contained'
                      style={{ height: 30 }}
                      disabled={otherSymptoms.length < 2}
                      onClick={() => removeOtherSymptom(idx)}
                    >
                      -
                    </Button>
                  </Stack>
                )}
              </Stack>
              <Button
                variant='contained'
                style={{ width: 20 }}
                onClick={() => addOtherSymptom()}
              >
                +
              </Button>
            </Stack>
            <FormControlLabel control={<Checkbox
              checked={groupSymptomsTogether}
              onChange={(e) => setGroupSystemsTogether(e.target.checked)}
              inputProps={{ 'aria-label': 'controlled' }}
            />} label="Group Symptoms by Area" />


          </Stack>
        </Stack>
      </Stack>
    </Container >
  )
}

export default observer(Symptoms);
