import React from 'react';
import RootModel, { IRoot } from '../models/root.mst';
import localForage from "localforage";
import persist from '../mst-persist';


export const root = RootModel.create({
  meetingInformation: {
    meetingLogistics: {
      telehealthPlatform: "Google Meet",
      telehealthAppropriate: "Yes",
      telehealthConsent: "Yes",
      physicalLocation: 'Home (Loc Code 10)',
      otherAddress: '',
      startTime: '1:00 PM',
      endTime: '2:00 PM',
      cptCode: '90791 Diagnostic (50+ min)',
      clientPresent: false,
      spousePresent: false,
      partnerPresent: false,
      parentPresent: false,
      siblingPresent: false,
      childPresent: false,
      otherPresent: false,
      spouseName: "",
      partnerName: "",
      parentName: "",
      siblingName: "",
      childName: "",
      otherName: "",
    },
    mentalStatusExam: {
      cognitiveFunctioning: undefined,
      affect: undefined,
      mood: undefined,
      interpersonal: undefined,
      functionalStatus: undefined,
      noRisk: false,
      dangerToSelf: false,
      dangerToOthers: false,
      otherRisk: false,
      dangerToSelfRisk: 'Low',
      dangerToOthersRisk: 'Low',
      dangerToSelfEvidence: '',
      dangerToOthersEvidence: '',
      dangerToSelfPlan: '',
      dangerToOthersPlan: '',
      otherRiskInformation: "",
    },
    problems: "",
    symptoms: {
      anxietySymptoms: [],
      depressionSymptoms: [],
      ptsdSymptoms: [],
      otherSymptoms: '',
      groupSymptomsTogether: false,
      selfCareAffected: false,
      selfCareSymptoms: [],
      otherSelfCareSymptoms: "",
      occupationAffected: false,
      occupationSymptoms: [],
      otherOccupationSymptoms: "",
      academicAffected: false,
      academicSymptoms: [],
      otherAcademicSymptoms: "",
      interpersonalAffected: false,
      interpersonalSymptoms: [],
      otherInterpersonalSymptoms: "",
      communitylAffected: false,
      communitySymptoms: [],
      otherCommunitySymptoms: "",
    }
  },
  currentTab: "/meeting-logstics",
})


persist('root4', root, {
  storage: localForage,  // or AsyncStorage in react-native.
  // default: localStorage
  jsonify: false,  // if you use AsyncStorage, this shoud be true
  // default: true
  // whitelist: ['name']  // only these keys will be persisted
}).then(() => console.log('Information has been hydrated'))

const StateContext = React.createContext<IRoot>(root);

export const getState = (): IRoot => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const state = React.useContext(StateContext);
  if (!state)
    throw new Error(
      'No MST!',
    );
  return state;
};

export const StateProvider = ({
  children,
}: React.PropsWithChildren<Record<string, unknown>>) => {
  return (
    <StateContext.Provider value={root}>{children}</StateContext.Provider>
  );
};
