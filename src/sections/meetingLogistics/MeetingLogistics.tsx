import { Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, NativeSelect, Radio, RadioGroup, TextField, Typography } from '@mui/material'
import { Box, Container, Stack } from '@mui/system';
import { observer } from 'mobx-react-lite';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { getState } from '../../state/provider';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import { locationCodes, possibleCptCodes } from '../../state/constants';

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
      otherCptCode,
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
      setClientInitials,
      setClientPresent,
      setCptCode,
      setOtherCptCode,
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
    },

  }
  } = getState();


  return (
    < Container >
      <Box>
        <Stack justifyContent='center' alignItems='center' flexDirection='row' border='green' margin={2}>
          <Typography fontWeight={800} fontSize={24}>Meeting Logistics</Typography>
        </Stack>
      </Box>
      <Stack flexDirection='column' spacing={6}>
        <TextField label="Client's Initials" value={clientInitials} onChange={(e) => setClientInitials(e.target.value)} style={{ width: 200 }} />

        <FormControl>
          <FormLabel id="HIPAA-telehealth-platfrom-radio-buttons-group-label">HIPAA Compliant telehealth platform: </FormLabel>
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

        <Stack flexDirection='row' alignItems='center' >
          <FormControl>
            <FormLabel id="telehealth-location-radio-buttons-group-label">Person-served physical location during the meeting</FormLabel>
            <RadioGroup
              aria-labelledby="telehealth-location-radio-buttons-group-label"
              defaultValue="Home (Loc Code 10)"
              name="telehealth-location-radio-buttons-group"
              onChange={(e) => setphyscialLocation(e.target.value)}
              value={physicalLocation}
            >
              {
                locationCodes.map(location =>
                  <FormControlLabel value={location} control={<Radio />} label={location} />
                )
              }
            </RadioGroup>
          </FormControl>
          {physicalLocation.includes('Other') &&
            <TextField style={{ width: 340 }} label='Other Address' value={otherAddress} onChange={(e) => setOtherAddress(e.target.value)} />
          }
        </Stack>
        <Stack flexDirection='row'>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <TimePicker label='Start Time' onChange={(e) => setStartTime(e)} renderInput={(params) => <TextField {...params} style={{ width: 200, marginRight: 100 }} />} value={dayjs(startTime)} />
            <TimePicker label='End Time' onChange={(e) => setEndTime(e)} renderInput={(params) => <TextField {...params} style={{ width: 200 }} />} value={dayjs(endTime)} />
          </LocalizationProvider>
        </Stack>

        <Stack flexDirection='row'>
          <FormControl>
            <Typography fontWeight={400} fontSize={16} color='rgba(0, 0, 0, 0.6)'>
              CPT Code
            </Typography>
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
              {possibleCptCodes.map(code =>
                <option value={code}>{code}</option>

              )
              }
            </NativeSelect>
          </FormControl>
          {cptCode === 'Other' &&
            <TextField label='Enter Other Cpt Code' value={otherCptCode} onChange={(e) => setOtherCptCode(e.target.value)} />
          }
        </Stack>

        <Box>
          <Typography fontWeight={400} fontSize={16} color='rgba(0, 0, 0, 0.6)'>Who was present at the meeting?</Typography>
            <FormGroup>
              <FormControlLabel control={<Checkbox
                checked={clientPresent}
                onChange={(e) => setClientPresent(e.target.checked)}
                inputProps={{ 'aria-label': 'controlled' }} />} label="Client" />

              <Stack flexDirection='row'>
                <FormControlLabel control={<Checkbox
                  checked={spousePresent}
                  onChange={(e) => setSpousePresent(e.target.checked)}
                  inputProps={{ 'aria-label': 'controlled' }} />} label="Spouse"
                  style={{ width: 100 }}
                />
                {spousePresent &&
                  <TextField size='small' label='Spouse Name' value={spouseName} onChange={(e) => setSpouseName(e.target.value)} />
                }
              </Stack>

              <Stack flexDirection='row'>
                <FormControlLabel control={<Checkbox
                  checked={partnerPresent}
                  onChange={(e) => setPartnerPresent(e.target.checked)}
                  inputProps={{ 'aria-label': 'controlled' }}
                />} label="Partner"
                  style={{ width: 100 }}
                />
                {partnerPresent &&
                  <TextField size='small' label='Partner Name' value={partnerName} onChange={(e) => setPartnerName(e.target.value)} />
                }
              </Stack>

              <Stack flexDirection='row'>
                <FormControlLabel control={<Checkbox
                  checked={parentPresent}
                  onChange={(e) => setParentPresent(e.target.checked)}
                  inputProps={{ 'aria-label': 'controlled' }} />} label="Parent"
                  style={{ width: 100 }}
                />
                {parentPresent &&
                  <TextField size='small' label='Parent Name' value={parentName} onChange={(e) => setParentName(e.target.value)} />
                }
              </Stack>

              <Stack flexDirection='row'>
                <FormControlLabel control={<Checkbox
                  checked={siblingPresent}
                  onChange={(e) => setSiblingPresent(e.target.checked)}
                  inputProps={{ 'aria-label': 'controlled' }} />} label="Sibling"
                  style={{ width: 100 }}
                />
                {siblingPresent &&
                  <TextField size='small' label='Sibling Name' value={siblingName} onChange={(e) => setSiblingName(e.target.value)} />
                }
              </Stack>

              <Stack flexDirection='row'>
                <FormControlLabel control={<Checkbox
                  checked={childPresent}
                  onChange={(e) => setchildPresent(e.target.checked)}
                  inputProps={{ 'aria-label': 'controlled' }} />} label="Child"
                  style={{ width: 100 }}
                />
                {childPresent &&
                  <TextField size='small' label='Child Name' value={childName} onChange={(e) => setchildName(e.target.value)} />
                }
              </Stack>

              <Stack flexDirection='row'>
                <FormControlLabel control={<Checkbox
                  checked={otherPresent}
                  onChange={(e) => setOtherPresent(e.target.checked)}
                  inputProps={{ 'aria-label': 'controlled' }} />} label="Other"
                  style={{ width: 100 }}
                />
                {otherPresent &&
                  <TextField size='small' label='Other Name' value={otherName} onChange={(e) => setOtherName(e.target.value)} />
                }
              </Stack>
            </FormGroup>
        </Box>
      </Stack>
    </Container >
  )
}

export default observer(MeetingLogistics);
