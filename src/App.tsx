import { AppBar, Box, Toolbar, Stack, Tab, Tabs } from "@mui/material";
import { Container } from "@mui/system";
import { observer } from "mobx-react-lite";
import * as React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Interventions from "./sections/interventions/Interventions";
import MeetingLogistics from "./sections/meetingLogistics/MeetingLogistics";
import MentalStatusExam from "./sections/mentalStatusExam/MentalStatusExam";
import NextMeeting from "./sections/nextMeeting/NextMeeting";
import Note from "./sections/note/Note";
import Problems from "./sections/problems/Problems";
import Progress from "./sections/progress/Progress.tsx";
import Symptoms from "./sections/symptoms/Symptoms";
import { getState } from "./state/provider";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MeetingLogistics />} />
        <Route path="meeting-logistics" element={<MeetingLogistics />} />
        <Route path="mental-status-exam" element={<MentalStatusExam />} />
        <Route path="problems" element={<Problems />} />
        <Route path="symptoms" element={<Symptoms />} />
        <Route path="interventions" element={<Interventions />} />
        <Route path="progress" element={<Progress />} />
        <Route path="next-meeting" element={<NextMeeting />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
}

const Layout = observer(props => {
  const { currentTab, setCurrentTab } = getState()
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setCurrentTab(newValue)
  }

  return (
    <Box border="thick" margin={1} borderColor='black' borderRadius={2} borderTop={1} borderBottom={1} borderLeft={1} borderRight={1} >
      <Stack flexDirection='row' justifyContent='space-evenly'>
        <Box maxWidth='60%' border="thick" margin={1} borderColor='black' borderRadius={2} borderTop={1} borderBottom={1} borderLeft={1} borderRight={1}>
          <AppBar position='static'>
            <Container>
              <Toolbar disableGutters={true}>
                <Tabs value={currentTab}
                  onChange={handleChange}
                  aria-label="main tabs"
                  textColor="secondary"
                  indicatorColor='secondary'
                  variant='fullWidth'
                  TabIndicatorProps={{style: {background:'white'}}}
                >
                  <Tab
                    value='/meeting-logstics'
                    label="Meeting Logistics"
                    component={Link}
                    to='/meeting-logistics'
                    style={{ fontSize: '12px', color: 'white' }}
                  />

                  <Tab
                    value='/mental-status-exam'
                    label="MSE/Risk"
                    component={Link}
                    to='/mental-status-exam'
                    style={{ fontSize: '12px', color: 'white' }}
                  />
                  <Tab
                    value='/problems'
                    label="Problem(s)"
                    component={Link}
                    to='/problems'
                    style={{ fontSize: '12px', color: 'white' }}
                  />
                  <Tab
                    value='/symptoms'
                    label="Symptoms"
                    component={Link}
                    to='/symptoms'
                    style={{ fontSize: '12px', color: 'white' }}

                  />
                  <Tab
                    value='/interventions'
                    label="Interventions"
                    component={Link}
                    to='/interventions'
                    style={{ fontSize: '12px', color: 'white' }}

                  />
                  <Tab
                    value='/progress'
                    label="Progress"
                    component={Link}
                    to='/progress'
                    style={{ fontSize: '12px', color: 'white' }}

                  />
                  <Tab
                    value='/next-meeting'
                    label="Next Meeting"
                    component={Link}
                    to='/next-meeting'
                    style={{ fontSize: '12px', color: 'white' }}

                  />
                </Tabs>
              </Toolbar>
            </Container>
          </AppBar>
            <Outlet />
        </Box>
        <Box flexGrow={2}>
          <Box minWidth={700} minHeight={700} border="thick" margin={1} borderColor='black' borderRadius={2} borderTop={1} borderBottom={1} borderLeft={1} borderRight={1}>
            <Note />
          </Box>
        </Box>
      </Stack>
    </Box >
  )
})

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}



export default App
