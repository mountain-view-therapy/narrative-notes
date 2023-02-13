import { Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, InputLabel, NativeSelect, Radio, RadioGroup, TextField, Typography } from '@mui/material'
import { Box, Container, Stack } from '@mui/system';
import { observer } from 'mobx-react-lite';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { getState } from '../../state/provider';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';

const MeetingLogistics = () => {
  const { meetingInformation: {
    meetingLogistics: {
      clientInitials,
      telehealthPlatform,
      //telehealthAppropriate,
      //telehealthConsent,
      physicalLocation,
      otherAddress,
      startTime,
      endTime,
      cptCode,
      clientPresent,
      spouseName,
      spousePresent,
      partnerName,
      partnerPresent,
      parentName,
      parentPresent,
      siblingName,
      siblingPresent,
      childName,
      childPresent,
      otherName,
      otherPresent,
    },
    setClientInitials,
    setClientPresent,
    setCptCode,
    setEndTime,
    setOtherName,
    setOtherPresent,
    setParentName,
    setParentPresent,
    setPartnerName,
    setPartnerPresent,
    setchildName,
    setSiblingName,
    setSiblingPresent,
    setSpouseName,
    setSpousePresent,
    setStartTime,
    //setTelehealthAppropriate,
    //setTelehealthConsent,
    setTelehealthPlatform,
    setchildPresent,
    setphyscialLocation,
    setOtherAddress,
  }
  } = getState();


  return (
    < Container >
      <Box>
        <Stack justifyContent='center' alignItems='center' flexDirection='row' border='green' margin={2}>
          <Typography fontWeight={800} fontSize={24}>Meeting Logistics</Typography>
        </Stack>
      </Box>
      <Stack flexDirection='column'>
      <TextField label="Client's Initials" value={clientInitials} onChange={(e) => setClientInitials(e.target.value)} style={{width:200}} />

        <FormControl>
          <FormLabel id="HIPAA-telehealth-platfrom-radio-buttons-group-label">HIPAA Compliant telehealth platform</FormLabel>
          <RadioGroup
            aria-labelledby="HIPAA-telehealth-platfrom-radio-buttons-group-label"
            defaultValue="Simple Practice"
            name="HIPAA-telehealth-platfrom-radio-buttons-group"
            onChange={(e) => setTelehealthPlatform(e.target.value)}
            value={telehealthPlatform}
          >
            <FormControlLabel value="Simple Practice" control={<Radio />} label="Simple Practice" />
            <FormControlLabel value="Google Meet" control={<Radio />} label="Google Meet" />
          </RadioGroup>
        </FormControl>


        <FormControl>
          <FormLabel id="telehealth-appropriate-radio-buttons-group-label">Is person-served appropriate for telehealth?</FormLabel>
          <RadioGroup
            aria-labelledby="telehealth-appropriate-radio-buttons-group-label"
            defaultValue="Yes"
            name="telehealth-appropriate-radio-buttons-group"
          >
            <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
          </RadioGroup>
        </FormControl>



        <FormControl>
          <FormLabel id="telehealth-consent-radio-buttons-group-label">Did you receive consent for telehealth meetings?</FormLabel>
          <RadioGroup
            aria-labelledby="telehealth-consent-radio-buttons-group-label"
            defaultValue="Yes"
            name="telehealth-consent-radio-buttons-group"
          >
            <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
          </RadioGroup>
        </FormControl>

        <Stack flexDirection='row' alignItems='center'>
          <FormControl>
            <FormLabel id="telehealth-location-radio-buttons-group-label">Person-served physical location during the meeting</FormLabel>
            <RadioGroup
              aria-labelledby="telehealth-location-radio-buttons-group-label"
              defaultValue="Home (Loc Code 10)"
              name="telehealth-location-radio-buttons-group"
              onChange={(e) => setphyscialLocation(e.target.value)}
              value={physicalLocation}
            >
              <FormControlLabel value="Home (Loc Code 10)" control={<Radio />} label="Home (Loc Code 10)" />
              <FormControlLabel value="Other (Loc Code 02)" control={<Radio />} label="Other (Loc Code 02)" />
            </RadioGroup>
          </FormControl>
          {physicalLocation.includes('Other') &&
            <TextField value={otherAddress} onChange={(e) => setOtherAddress(e.target.value)}/>
          }
        </Stack>

        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <FormLabel id="start-time">Start Time</FormLabel>
          <TimePicker onChange={(e) => setStartTime(e)} renderInput={(params) => <TextField {...params} style={{ width: 200 }} />} value={dayjs(startTime)} />
          <FormLabel id="end-time">End Time</FormLabel>
          <TimePicker onChange={(e) => setEndTime(e)} renderInput={(params) => <TextField {...params} style={{ width: 200 }} />} value={dayjs(endTime)} />
        </LocalizationProvider>

        <FormControl>
          <InputLabel variant="standard" htmlFor="cpt-code">
            CPT Code
          </InputLabel>
          <NativeSelect
            inputProps={{
              name: 'cpt-code',
              id: 'cpt-code',
            }}
            fullWidth
            style={{ width: 400 }}
            onChange={(e) => setCptCode(e.target.value)}
            value={cptCode}
          >
            <option value='90791 Diagnostic (50+ min)'>90791 Diagnostic (50+ min)</option>
            <option value='90832 Individual (17-37 min)'>90832 Individual (17-37 min)</option>
            <option value='90834 Individual (38-52 min)'>90834 Individual (38-52 min)</option>
            <option value='90837 Individual (53+ min)'>90837 Individual (53+ min)</option>
            <option value='90847 Couples/Family with client present (45+ min)'>90847 Couples/Family with client present (45+ min)</option>
            <option value='90846 Family without client present (45+ min)'>90846 Family without client present (45+ min)</option>
            <option value='Other'>Other</option>
          </NativeSelect>
        </FormControl>

        <FormGroup>
          <FormControlLabel control={<Checkbox
            checked={clientPresent}
            onChange={(e) => setClientPresent(e.target.checked)}
            inputProps={{ 'aria-label': 'controlled' }} />} label="Client" />

          <Stack flexDirection='row'>
            <FormControlLabel control={<Checkbox
              checked={spousePresent}
              onChange={(e) => setSpousePresent(e.target.checked)}
              inputProps={{ 'aria-label': 'controlled' }} />} label="Spouse" />
            {spousePresent &&
              <TextField label='Spouse Name' value={spouseName} onChange={(e) => setSpouseName(e.target.value)} />
            }
          </Stack>

          <Stack flexDirection='row'>
            <FormControlLabel control={<Checkbox
              checked={partnerPresent}
              onChange={(e) => setPartnerPresent(e.target.checked)}
              inputProps={{ 'aria-label': 'controlled' }} />} label="Partner" />
            {partnerPresent &&
              <TextField label='Partner Name' value={partnerName} onChange={(e) => setPartnerName(e.target.value)} />
            }
          </Stack>

          <Stack flexDirection='row'>
            <FormControlLabel control={<Checkbox
              checked={parentPresent}
              onChange={(e) => setParentPresent(e.target.checked)}
              inputProps={{ 'aria-label': 'controlled' }} />} label="Parent" />
            {parentPresent &&
              <TextField label='Parent Name' value={parentName} onChange={(e) => setParentName(e.target.value)} />
            }
          </Stack>

          <Stack flexDirection='row'>
            <FormControlLabel control={<Checkbox
              checked={siblingPresent}
              onChange={(e) => setSiblingPresent(e.target.checked)}
              inputProps={{ 'aria-label': 'controlled' }} />} label="Sibling" />
            {siblingPresent &&
              <TextField label='Sibling Name' value={siblingName} onChange={(e) => setSiblingName(e.target.value)} />
            }
          </Stack>

          <Stack flexDirection='row'>
            <FormControlLabel control={<Checkbox
              checked={childPresent}
              onChange={(e) => setchildPresent(e.target.checked)}
              inputProps={{ 'aria-label': 'controlled' }} />} label="Child" />
            {childPresent &&
              <TextField label='Child Name' value={childName} onChange={(e) => setchildName(e.target.value)} />
            }
          </Stack>

          <Stack flexDirection='row'>
            <FormControlLabel control={<Checkbox
              checked={otherPresent}
              onChange={(e) => setOtherPresent(e.target.checked)}
              inputProps={{ 'aria-label': 'controlled' }} />} label="Other" />
            {otherPresent &&
              <TextField label='Other Name' value={otherName} onChange={(e) => setOtherName(e.target.value)} />
            }
          </Stack>
        </FormGroup>
      </Stack>
    </Container >
  )
}

export default observer(MeetingLogistics);
