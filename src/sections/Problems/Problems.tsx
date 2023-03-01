import { TextField, Typography } from '@mui/material'
import { Box, Container, Stack } from '@mui/system';
import { observer } from 'mobx-react-lite';
import { useAppState } from '../../state/provider';

const Problems = () => {
  const { meetingInformation: {
    problems,
    setProblems
  }
  } = useAppState();

  return (
    < Container >
      <Box>
        <Stack justifyContent='center' alignItems='center' flexDirection='row' margin={2}>
          <Typography fontWeight={800} fontSize={24}>Issues/ Problems Discussed</Typography>
        </Stack>
      </Box>
      <Stack flexDirection='row' justifyContent='center' paddingBottom={3}>
        <TextField
          style={{ width: 540 }}
          id="problems-textarea"
          multiline
          fullWidth
          rows={20}
          value={problems}
          onChange={(e) => setProblems(e.target.value)}
          placeholder='Please summarize what was discussed during the meeting...'
        />
      </Stack>
    </Container >
  )
}

export default observer(Problems);
