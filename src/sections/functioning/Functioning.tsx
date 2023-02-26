import { Checkbox, FormControlLabel, FormLabel, TextField, Typography } from '@mui/material'
import { Box, Container, Stack } from '@mui/system';
import { observer } from 'mobx-react-lite';
import {
  possibleAcademicSymptoms,
  possibleCommunitySymptoms,
  possibleInterpersonalSymptoms,
  possibleOccupationSymptoms,
  possibleSelfCareSymptoms
} from '../../state/constants';
import { getState } from '../../state/provider';

const Functioning = () => {
  const { meetingInformation: {
    symptoms: {
      selfCareAffected,
      selfCareSymptoms,
      otherSelfCareSymptoms,
      occupationAffected,
      occupationSymptoms,
      otherOccupationSymptoms,
      academicAffected,
      academicSymptoms,
      otherAcademicSymptoms,
      interpersonalAffected,
      interpersonalSymptoms,
      otherInterpersonalSymptoms,
      communitylAffected,
      communitySymptoms,
      otherCommunitySymptoms,
      setSelfCareAffected,
      setSelfCareSymptom,
      setOtherSelfCareSymptoms,
      setOccupationAffected,
      setOccupationSymptom,
      setOtherOccupationSymptoms,
      setAcademicAffected,
      setAcademicSymptom,
      setOtherAcademicSymptoms,
      setInterpersonalAffected,
      setInterpersonalSymptom,
      setOtherInterpersonalSymptoms,
      setCommunityAffected,
      setCommunitySymptom,
      setOtherCommunitySymptoms,
    },
  }
  } = getState()

  return (
    < Container >
        <Stack>
          <Box>
            <Stack justifyContent='center' alignItems='center' flexDirection='row' margin={2}>
              <Typography fontWeight={800} fontSize={24}>Effects on Functioning</Typography>
            </Stack>
          </Box>

          <FormControlLabel control={<Checkbox
            checked={selfCareAffected}
            onChange={(e) => setSelfCareAffected(e.target.checked)}
            inputProps={{ 'aria-label': 'self-care-affected-checkbox' }}
          />} label="Self Care" />
          <Stack flexDirection='column' marginLeft={2}>

            {possibleSelfCareSymptoms.map(symptom =>
              <FormControlLabel control={<Checkbox
                checked={selfCareAffected && Boolean(selfCareSymptoms.find(selected => symptom === selected))}
                onChange={(e) => setSelfCareSymptom(symptom, e.target.checked)}
                disabled={!selfCareAffected}

              />} label={symptom} key={'sc-' + symptom} />
            )}
            <FormLabel>Other Self Care Symptoms</FormLabel>
            <TextField disabled={!selfCareAffected} style={{ margin: 3, width: 350, fontSize: 12 }} value={otherSelfCareSymptoms} onChange={(e) => setOtherSelfCareSymptoms(e.target.value)} />
          </Stack>


          <FormControlLabel control={<Checkbox
            checked={occupationAffected}
            onChange={(e) => setOccupationAffected(e.target.checked)}
            inputProps={{ 'aria-label': 'self-care-affected-checkbox' }}
          />} label="Occupational" />
          <Stack flexDirection='column' marginLeft={2}>

            {possibleOccupationSymptoms.map(symptom =>
              <FormControlLabel control={<Checkbox
                checked={occupationAffected && Boolean(occupationSymptoms.find(selected => symptom === selected))}
                onChange={(e) => setOccupationSymptom(symptom, e.target.checked)}
                disabled={!occupationAffected}

              />} label={symptom} key={'pos-' + symptom} />
            )}
            <FormLabel>Other Occupational Symptoms</FormLabel>
            <TextField disabled={!occupationAffected} style={{ margin: 3, width: 350, fontSize: 12 }} value={otherOccupationSymptoms} onChange={(e) => setOtherOccupationSymptoms(e.target.value)} />
          </Stack>

          <FormControlLabel control={<Checkbox
            checked={academicAffected}
            onChange={(e) => setAcademicAffected(e.target.checked)}
            inputProps={{ 'aria-label': 'self-care-affected-checkbox' }}
          />} label="Academic" />
          <Stack flexDirection='column' marginLeft={2}>

            {possibleAcademicSymptoms.map(symptom =>
              <FormControlLabel control={<Checkbox
                checked={academicAffected && Boolean(academicSymptoms.find(selected => symptom === selected))}
                onChange={(e) => setAcademicSymptom(symptom, e.target.checked)}
                disabled={!academicAffected}

              />} label={symptom} key={'pas-' + symptom} />
            )}
            <FormLabel>Other Academic Symptoms</FormLabel>
            <TextField disabled={!academicAffected} style={{ margin: 3, width: 350, fontSize: 12 }} value={otherAcademicSymptoms} onChange={(e) => setOtherAcademicSymptoms(e.target.value)} />
          </Stack>

          <FormControlLabel control={<Checkbox
            checked={interpersonalAffected}
            onChange={(e) => setInterpersonalAffected(e.target.checked)}
            inputProps={{ 'aria-label': 'self-care-affected-checkbox' }}
          />} label="Interpersonal" />
          <Stack flexDirection='column' marginLeft={2}>

            {possibleInterpersonalSymptoms.map(symptom =>
              <FormControlLabel control={<Checkbox
                checked={interpersonalAffected && Boolean(interpersonalSymptoms.find(selected => symptom === selected))}
                onChange={(e) => setInterpersonalSymptom(symptom, e.target.checked)}
                disabled={!interpersonalAffected}

              />} label={symptom} key={'pis-' + symptom} />
            )}
            <FormLabel>Other Interpersonal Symptoms</FormLabel>
            <TextField disabled={!interpersonalAffected} style={{ margin: 3, width: 350, fontSize: 12 }} value={otherInterpersonalSymptoms} onChange={(e) => setOtherInterpersonalSymptoms(e.target.value)} />
          </Stack>

          <FormControlLabel control={<Checkbox
            checked={communitylAffected}
            onChange={(e) => setCommunityAffected(e.target.checked)}
            inputProps={{ 'aria-label': 'self-care-affected-checkbox' }}
          />} label="Community" />
          <Stack flexDirection='column' marginLeft={2}>

            {possibleCommunitySymptoms.map(symptom =>
              <FormControlLabel control={<Checkbox
                checked={communitylAffected && Boolean(communitySymptoms.find(selected => symptom === selected))}
                onChange={(e) => setCommunitySymptom(symptom, e.target.checked)}
                disabled={!communitylAffected}

              />} label={symptom} key={'pcs' + symptom} />
            )}
            <FormLabel>Other Community Symptoms</FormLabel>
            <TextField disabled={!communitylAffected} style={{ margin: 3, width: 350, fontSize: 12 }} value={otherCommunitySymptoms} onChange={(e) => setOtherCommunitySymptoms(e.target.value)} />
          </Stack>
      </Stack>
    </Container >
  )
}

export default observer(Functioning);