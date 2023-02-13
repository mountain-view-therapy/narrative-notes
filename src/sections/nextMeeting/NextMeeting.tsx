import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField, Typography } from '@mui/material'
import { Box, Container, Stack } from '@mui/system';
import { observer } from 'mobx-react-lite';
import { possibleRecommendationsForMovingForward } from '../../state/constants';
import { getState } from '../../state/provider';
import { useState } from 'react';



const NextMeeting = () => {
  const {
    meetingInformation: {
      recommendationForMovingForward,
      setRecommendationForMovingForward,
      frequencyChangeExplanation,
      setFrequencyChangeExplanation,
    } } = getState()

    const [value, onChange] = useState(new Date());
  return (
    <Container>
      <Box>
        <Stack justifyContent='center' alignItems='center' flexDirection='row' margin={2}>
          <Typography fontWeight={800} fontSize={24}>Next Meeting</Typography>
        </Stack>
      </Box>
      <Stack spacing={3}>
        <Stack flexDirection='row'>
          <FormControl>
            <FormLabel id="Recommendations-moving-forward">Recommendations moving forward</FormLabel>
            <RadioGroup
              aria-labelledby="Recommendations-moving-forward"
              name="Recommendations-moving-forward"
              onChange={(e) => setRecommendationForMovingForward(e.target.value)}
              value={recommendationForMovingForward}
            >
              {
                possibleRecommendationsForMovingForward.map(rec =>
                  <FormControlLabel value={rec} control={<Radio />} label={rec} key={rec} />
                )
              }
            </RadioGroup>
          </FormControl>
        </Stack>

        <TextField
          placeholder='Explain if frequency has changed or not scheduling'
          label='Optional Frequency or Schedulign Change Explanation'
          multiline
          fullWidth
          rows={20}
          value={frequencyChangeExplanation}
          onChange={(e) => setFrequencyChangeExplanation(e.target.value)} />
      </Stack >
    </Container >
  )
}
export default observer(NextMeeting);