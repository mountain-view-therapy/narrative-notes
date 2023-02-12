import { Button, ButtonGroup, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, InputLabel, NativeSelect, Radio, RadioGroup, TextField, Typography } from '@mui/material'
import { Box, Container, Stack } from '@mui/system';
import { observer } from 'mobx-react-lite';
import { affectStates, cognitiveFunctioningStates, functionalStatusStates, interpersonalStates, moodStates, possibleAnxietySymptoms, possibleDepressionSymptoms, possiblePTSDSymptoms, riskLevels } from '../../models/MeetingInformationModel';
import { getState } from '../../state/provider';


const Symptoms = () => {
  const { meetingInformation: {
    mentalStatusExam: {
      affect,
      cognitiveFunctioning,
      functionalStatus,
      interpersonal,
      mood,
      noRisk,
      dangerToSelf,
      dangerToSelfRisk,
      dangerToSelfEvidence,
      dangerToSelfPlan,
      dangerToOthers,
      dangerToOthersRisk,
      dangerToOthersEvidence,
      dangerToOthersPlan,
      otherRisk,
      otherRiskInformation,
    },
    symptoms: {
      anxietySymptoms,
      depressionSymptoms,
      ptsdSymptoms,
      otherSymptoms,
      groupSymptomsTogether,
    },
    setAffect,
    setCognitiveFunctioning,
    setFunctionalStatus,
    setInterpersonal,
    setMood,
    setNoRisk,
    setDangerToSelf,
    setDangerToOthers,
    setOtherRisk,
    setDangerToSelfRisk,
    setDangerToOthersRisk,
    setDangerToSelfEvidence,
    setDangerToOthersEvidence,
    setDangerToSelfPlan,
    setDangerToOthersPlan,
    setOtherRiskInformation,
    toggleAnxietySymptom,
    toggleDepressionSymptom,
    togglePTSDSymptom,
    setOtherSymptoms,
    setGroupSystemsTogether,
  }
  } = getState();


  /*
  
Symptoms addressed during this meeting include:


These symptoms affect person-served 
Affecting person-served ability to function: Multichoice cloud- prompts for how it affects functioning

ADLs/Self-care (‘s self-care)
person-served is getting inadequate sleep, only 5 hours per night
person-served is only eating 1 meal per day
person-served is only showering twice a week when they'd prefer to shower daily
Other

Occupational (at work)


person-served is getting in frequent arguments with coworkers
person-served is frequently late to work
Person-served frequently misses work
person-served has received a written warning at work
person-served is at risk of losing job
Other

Academic (at school)

person-served frequently arrives late to school
person-served frequently misses school
Lack of school attendance is negatively affecting grades
person-served unable to keep up with coursework
person-served is engaged in fights at school every month
Other



Interpersonal (interpersonally)
person-served is getting in frequent arguments with partner
Person-served has frequent arguments with family members
Person-served has frequent arguments with friends
person-served is unable to partake in family obligations
other

Community


person-served has been unable to attend community functions
person-served has been unable to fulfill community obligations
other

  */


  return (
    < Container >
      <Box>
        <Stack justifyContent='center' alignItems='center' flexDirection='row' margin={2}>
          <Typography fontWeight={800} fontSize={24}>Symptoms</Typography>
        </Stack>
      </Box>
      <Stack flexDirection='column'>

        <Stack flexDirection='row' justifyContent='space-evenly'>
          <FormControl>
            <FormLabel>Anxiety Symptoms</FormLabel>
            {
              possibleAnxietySymptoms.map(symptom => <Button style={{ margin: 3, width: 350, fontSize: 12 }} size='small' variant='contained' key={symptom} onClick={() => toggleAnxietySymptom(symptom)} color={anxietySymptoms.includes(symptom) ? 'primary' : 'inherit'}>{symptom}</Button>)
            }
          </FormControl>

          <FormControl>
            <FormLabel>Depression Symptoms</FormLabel>
            {
              possibleDepressionSymptoms.map(symptom => <Button style={{ margin: 3, width: 350, fontSize: 12 }} size='small' variant='contained' key={symptom} onClick={() => toggleDepressionSymptom(symptom)} color={depressionSymptoms.includes(symptom) ? 'primary' : 'inherit'}>{symptom}</Button>)
            }
          </FormControl>
        </Stack>

        <Stack flexDirection='row' justifyContent='space-evenly'>
          <FormControl>
            <FormLabel>PTSD Symptoms</FormLabel>
            {
              possibleAnxietySymptoms.map(symptom => <Button style={{ margin: 3, width: 350, fontSize: 12 }} size='small' variant='contained' key={symptom} onClick={() => togglePTSDSymptom(symptom)} color={ptsdSymptoms.includes(symptom) ? 'primary' : 'inherit'}>{symptom}</Button>)
            }
          </FormControl>
          <Stack flexDirection='column'>
            <FormControl>
              <FormLabel>Other Symptoms</FormLabel>
              <TextField style={{ margin: 3, width: 350, fontSize: 12 }} value={otherSymptoms} onChange={(e) => setOtherSymptoms(e.target.value)} />
            </FormControl>
            <FormControlLabel control={<Checkbox
              checked={groupSymptomsTogether}
              onChange={(e) => setGroupSystemsTogether(e.target.checked)}
              inputProps={{ 'aria-label': 'controlled' }}
            />} label="Group Symptoms by Area" />
          </Stack>
        </Stack>










        <FormControl>
          <FormLabel>Affect</FormLabel>
          <ButtonGroup size='small' variant="contained" aria-label="outlined primary button group">
            {
              affectStates.map(state => <Button key={state} onClick={() => setAffect(state)} color={affect === state ? 'primary' : 'inherit'}>{state}</Button>)
            }
          </ButtonGroup>
        </FormControl>

        <FormControl>
          <FormLabel>Mood</FormLabel>
          <ButtonGroup size='small' variant="contained" aria-label="outlined primary button group">
            {
              moodStates.map(state => <Button key={state} onClick={() => setMood(state)} color={mood === state ? 'primary' : 'inherit'}>{state}</Button>)
            }
          </ButtonGroup>
        </FormControl>

        <FormControl>
          <FormLabel>Interpersonal</FormLabel>
          <ButtonGroup size='small' variant="contained" aria-label="outlined primary button group">
            {
              interpersonalStates.map(state => <Button key={state} onClick={() => setInterpersonal(state)} color={interpersonal === state ? 'primary' : 'inherit'}>{state}</Button>)
            }
          </ButtonGroup>
        </FormControl>

        <FormControl>
          <FormLabel>Functional Status</FormLabel>
          <ButtonGroup size='small' variant="contained" aria-label="outlined primary button group">
            {
              functionalStatusStates.map(state => <Button key={state} onClick={() => setFunctionalStatus(state)} color={functionalStatus === state ? 'primary' : 'inherit'}>{state}</Button>)
            }
          </ButtonGroup>
        </FormControl>


        <Box border="thick" margin={1} borderColor='black' borderRadius={2} borderTop={1} borderBottom={1} borderLeft={1} borderRight={1} paddingLeft={3}>
          <Box>
            <Stack justifyContent='left' alignItems='center' flexDirection='row' border='green' margin={2}>
              <Typography fontWeight={800} fontSize={24}>Risk Status</Typography>
            </Stack>
          </Box>

          <FormGroup>
            <FormControlLabel control={<Checkbox
              checked={noRisk}
              onChange={(e) => setNoRisk(e.target.checked)}
              inputProps={{ 'aria-label': 'controlled' }}
              disabled={dangerToOthers || dangerToSelf || otherRisk}
            />} label="No Significant Risk Factors presented" />

            <FormControlLabel control={<Checkbox
              checked={dangerToSelf}
              onChange={(e) => setDangerToSelf(e.target.checked)}
              inputProps={{ 'aria-label': 'controlled' }} />} label="Danger to Self"
              disabled={noRisk} />
            {dangerToSelf &&
              <Stack flexDirection='row'>
                <RadioGroup
                  onChange={(e) => setDangerToSelfRisk(e.target.value)}
                  value={dangerToSelfRisk}
                >
                  {riskLevels.map(level => <FormControlLabel value={level} control={<Radio />} label={level} />)}
                </RadioGroup>
                <TextField label='Evidence' value={dangerToSelfEvidence} onChange={(e) => setDangerToSelfEvidence(e.target.value)} />
                <TextField label='Plan' value={dangerToSelfPlan} onChange={(e) => setDangerToSelfPlan(e.target.value)} />
              </Stack>

            }

            <FormControlLabel control={<Checkbox
              checked={dangerToOthers}
              onChange={(e) => setDangerToOthers(e.target.checked)}
              inputProps={{ 'aria-label': 'controlled' }}
              disabled={noRisk}
            />} label="Danger to Other" />
            {dangerToOthers &&
              <Stack flexDirection='row'>
                <RadioGroup
                  onChange={(e) => setDangerToOthersRisk(e.target.value)}
                  value={dangerToOthersRisk}
                >
                  {riskLevels.map(level => <FormControlLabel value={level} control={<Radio />} label={level} />)}
                </RadioGroup>
                <TextField label='Evidence' value={dangerToOthersEvidence} onChange={(e) => setDangerToOthersEvidence(e.target.value)} />
                <TextField label='Plan' value={dangerToOthersPlan} onChange={(e) => setDangerToOthersPlan(e.target.value)} />
              </Stack>
            }

            <Stack flexDirection='row'>
              <FormControlLabel control={<Checkbox
                checked={otherRisk}
                onChange={(e) => setOtherRisk(e.target.checked)}
                inputProps={{ 'aria-label': 'controlled' }} />} label="Other"
                disabled={noRisk}
              />
              {otherRisk &&
                <TextField label='Other' value={otherRiskInformation} onChange={(e) => setOtherRiskInformation(e.target.value)} />
              }
            </Stack>
          </FormGroup>
        </Box>

      </Stack>
    </Container >
  )
}

export default observer(Symptoms);
