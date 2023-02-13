import { TextField, Typography } from '@mui/material'
import { Box, Container, Stack } from '@mui/system';
import { observer } from 'mobx-react-lite';
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
      <TextField
        id="problems-textarea"
        multiline
        fullWidth
        rows={20}
        value={problems}
        onChange={(e) => setProblems(e.target.value)}
        placeholder='Please desxcribe the problems here....'
      />

    </Container >
  )
}

export default observer(Problems);
