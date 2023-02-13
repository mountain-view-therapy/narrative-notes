import dayjs, { Dayjs } from "dayjs"
import { applySnapshot, Instance, types } from "mobx-state-tree"
import RootModel from "./root.mst"

export const cognitiveFunctioningStates = [
    'Oriented / Alert',
    'Disorganized',
    'Tangential',
    'Preoccupied',
    'Circumstantial',
    'Not Assessed',
]
type CognitiveFunctioningState = typeof cognitiveFunctioningStates[number]


export const affectStates = [
    'Appropriate',
    'Inappropriate',
    'Labile',
    'Constricted',
    'Blunted',
    'Flat',
    'Not Assessed',
]
type AffectStates = typeof affectStates[number]

export const moodStates = [
    'Euthymic',
    'Depressed',
    'Dysphoric',
    'Anxious',
    'Angry',
    'Euphoric',
    'Not Assessed'
]
type MoodStates = typeof moodStates[number]


export const interpersonalStates = [
    'Interactive',
    'Intermittently Interactive',
    'Guarded',
    'Withdrawn',
    'Hostile',
    'Not Assessed',
]
type InterpersonalStates = typeof interpersonalStates[number]

export const functionalStatusStates = [
    'Intact',
    'Impaired',
    'Variably Impaired',
    'Not Assessed',
]
type FunctionalStatusStates = typeof interpersonalStates[number]

export const riskLevels = [
    'Low',
    'Medium',
    'High',
]
type RiskLevels = typeof riskLevels[number]


export const possibleAnxietySymptoms = [
    'excessive worry that is difficult to control',
    'constantly feeling on edge',
    'restlessness',
    'racing thoughts',
    'insomnia',
    'shortness of breath',
    'heart palpitations',
    'dry mouth',
    'difficulty concentrating',
    'trouble falling asleep',
    'trouble staying asleep',
    'general state of irritability',
]
type PossibleAnxietySymptom = typeof possibleAnxietySymptoms[number]

export const possibleDepressionSymptoms = [
    'depressed mood',
    'irritable mood',
    'diminished interest or enjoyment in activities',
    'sleeplessness',
    'hypersomnia',
    'fatigue/lack of energy',
    'difficulty thinking or concentrating',
    'indecisiveness',
    'social withdrawal',
    'feelings of hopelessness and worthlessness',
    'feelings of inappropriate guilt',
    'lack of appetite',
    'recurrent suicidal ideation',
]
type PossibleDepressionSymptom = typeof possibleDepressionSymptoms[number]

export const possiblePTSDSymptoms = [
    'intrusive thoughts or memories of the traumatic event',
    'difficulty sleeping',
    'nightmares',
    'flashbacks',
    'hypervigilance',
    'difficulty concentrating',
    'avoidance of reminders of the traumatic event',
    'being easily startled',
    'feelings of guilt/shame',
    'feelings of hopelessness',
    'intense distress when exposed to reminders of the traumatic event',
]
type PossiblePTSDSymptom = typeof possiblePTSDSymptoms[number]

export const possibleSelfCareSymptoms = [
    ' is getting inadequate sleep, only 5 hours per night',
    ' is only eating 1 meal per day',
    ' is only showering twice a week when they\'d prefer to shower daily',
]
type PossibleSelfCareSymptom = typeof possibleSelfCareSymptoms[number]


export const possibleOccupationSymptoms = [
    ' is getting in frequent arguments with coworkers',
    ' is frequently late to work',
    ' frequently misses work',
    ' has received a written warning at work',
    ' is at risk of losing job',
]
type PossibleOccupationSymptom = typeof possibleOccupationSymptoms[number]


export const possibleAcademicSymptoms = [
    ' frequently arrives late to school',
    ' frequently misses school',
    ' lack of school attendance is negatively affecting grades',
    ' unable to keep up with coursework',
    ' is engaged in fights at school every month',
]
type PossibleAcademicSymptom = typeof possibleAcademicSymptoms[number]

export const possibleInterpersonalSymptoms = [
    ' is getting in frequent arguments with partner',
    ' has frequent arguments with family members',
    ' has frequent arguments with friends',
    ' is unable to partake in family obligations',
]
type PossibleInterpersonalSymptom = typeof possibleInterpersonalSymptoms[number]

export const possibleCommunitySymptoms = [
    ' has been unable to attend community functions',
    ' has been unable to fulfill community obligations',
]
type PossibleCommunitySymptom = typeof possibleCommunitySymptoms[number]

export const possibleInterventions = [
    { text: "Used/promoted externalized language to give [CLIENT] space to take a position on their relationship with [PROBLEM]." },
    { text: "Used deconstruction questions to help [CLIENT] name the problem, [PROBLEM]." },
    {
        text: "Used deconstruction questions to help [CLIENT] identify the effects of [PROBLEM] including; [REPLACEMENT]",
        prompt: "[effects of the problem on person served and their community].",
    },
    {
        text: "Used deconstruction questions to help [CLIENT] evaluate their stance on the problems' effects in their life. [REPLACEMENT]",
        prompt: "[Person served clear stance on the effects of the problem on their lives]",
    },
    {
        text: "Used deconstruction questions to help [CLIENT] richly describe their justification for their stance on [PROBLEM].",
        prompt: "[Person served justification for their stance]"
    },
    {
        text: "Helped [CLIENT] identify cultural discourse and societal norms thay may be supporting the [PROBLEM] including [REPLACEMENT].",
        prompt: "[name discourses/ norms]",
    },
    {
        text: "Used Narrative practice of double listening to identify unique outcomes including [REPLACEMENT].",
        prompt: "[name situations, events, circumstances free from Problem’s influence]",
    },
    { text: "Used Narrative practice of Re-Authoring to invite [CLIENT] into preferred story development." },
    {
        text: "Identified name for preferred story/project, [REPLACEMENT].",
        prompt: "[key word or phrase for emerging preferred story]",
    },
    {
        text: "Identified [CLIENT] actions that support the preferred story including: [REPLACEMENT].",
        prompt: "[list actions]",
    },
    {
        text: "Identified people that support the preferred story including: [REPLACEMENT].",
        prompt: "[list people]",
    },
    {
        text: "Identified situations that support the preferred story including: [REPLACEMENT].",
        prompt: "[list situations]",
    },
    {
        text: "Identified cultural contexts that support the preferred story including: [REPLACEMENT].",
        prompt: "[list discourses]",
    },
    {
        text: "Used Narrative practice of Re-membering Conversations to invoke the presences/memory of [REPLACEMENT] to thicken alternative/preferred story.",
        prompt: "[name person “re-membered”]",
    },
    { text: "Referred [CLIENT] to physician for medical evaluation. " },
    { text: "Referred to resources to learn meditation/mindfulness. Incorporated the use of these skills in alternative/preferred story development." },
    {
        text: "Developed a concrete preferred action plan in relation to [REPLACEMENT].",
        prompt: "[name activities of daily living ex. eating, sleeping, exercise]"
    },
    { text: "Reviewed intake paperwork, explained practice policies, HIPAA privacy policies, and patient rights, and obtained informed consent for therapy." },
    { text: "Reviewed Clinical Formulation" },
    { text: "Reviewed Treatment Plan" },
    { text: "Reviewed intake questionnaire" },
]

export const possibleProgressions = [
    {
        text: "[CLIENT] identified and verbalized effects of the problem including [REPLACEMENT].",
        prompt: "[list effects identified]",
    },
    {
        text: "[CLIENT] will identified and verbalized tactics used by the problem including [REPLACEMENT].",
        prompt: "[list tactics identified]"
    },
    {
        text: "[CLIENT] developed and practiced strategies that counter the effects and tactics of the problem including [REPLCEMENT].",
        prompt: "[list strategies]"
    },
    {
        text: "[CLIENT] identified and verbalized  past experiences that support or sustain the problematic relationship with the problem including [REPLACEMENT].",
        prompt: "[name experiences]",
    },
    {
        text: "[CLIENT] identified and verbalized cultural discourses that support and sustain the relationship with the problem including [name discourses].",
        prompt: "[name discourses]",
    },
    {
        text: "[CLIENT] verbalized an experience-near name for the problem, [state name] and a clear stance on the problem narrative.",
    },
    {
        text: "[CLIENT] consistently speaks about the problem in externalized language during therapy meetings.",
    },
    {
        text: "[CLIENT] identified and verbalized values/preferences in relationship to the problem including [REPLACEMENT].",
        prompt: "[name values/preference]",
    },
    {
        text: "[CLIENT] verbalized a re-authored alternative/preferred narrative that does not compromise stated values/preferences and does not support the problems narrative.",
    },
    {
        text: "[CLIENT] identified and verbalized past experiences that support the preferred narrative including.",
    },
    {
        text: "[CLIENT] learned and implemented behavioral strategies to exert acute control over relationship with the problem including [list strategies].",
        prompt: "[list strategies].",
    },
    {
        text: "[CLIENT] reported connection to alternative/preferred stories as a means to decrease the problem’s influence.",
    },
    {
        text: "[CLIENT] identified [name person] as a person who will support their preferred narrative.",
    },
    {
        text: "[CLIENT]  connected with [name person] to help support their preferred narrative.",
    },
]


const InterventionModel = types.model('InterventionModel', {
    possibleInterventionsIndex: types.number,
    text: types.string,
    replacementText: types.string,
})

const ProgressModel = types.model('ProgressModel', {
    possibleProgressIndex: types.number,
    text: types.string,
    replacementText: types.string,
})

export interface Intervention extends Instance<typeof InterventionModel> { }


const SymptomsModel = types.model('SymptomsModel', {
    anxietySymptoms: types.array(types.string),
    depressionSymptoms: types.array(types.string),
    ptsdSymptoms: types.array(types.string),
    otherSymptoms: types.string,
    groupSymptomsTogether: types.boolean,
    selfCareAffected: types.boolean,
    selfCareSymptoms: types.array(types.string),
    otherSelfCareSymptoms: types.string,
    occupationAffected: types.boolean,
    occupationSymptoms: types.array(types.string),
    otherOccupationSymptoms: types.string,
    academicAffected: types.boolean,
    academicSymptoms: types.array(types.string),
    otherAcademicSymptoms: types.string,
    interpersonalAffected: types.boolean,
    interpersonalSymptoms: types.array(types.string),
    otherInterpersonalSymptoms: types.string,
    communitylAffected: types.boolean,
    communitySymptoms: types.array(types.string),
    otherCommunitySymptoms: types.string,
})

const MeetingLogisticsModel = types.model('MeetingLogisticsModel', {
    clientInitials: types.string,
    telehealthPlatform: types.enumeration('telehealthPlatform', ['Simple Practice', 'Google Meet']),
    telehealthAppropriate: types.enumeration('telehealthAppropriate', ['Yes', 'No']),
    telehealthConsent: types.enumeration('telehealthConsent', ['Yes', 'No']),
    physicalLocation: types.enumeration('physicalLocation', ['Home (Loc Code 10)', 'Other (Loc Code 02)']),
    otherAddress: types.string,
    startTime: types.string,
    endTime: types.string,
    cptCode: types.enumeration('cptCode', [
        '90791 Diagnostic (50+ min)',
        '90832 Individual (17-37 min)',
        '90834 Individual (38-52 min)',
        '90837 Individual (53+ min)',
        '90847 Couples/Family with client present (45+ min)',
        '90846 Family without client present (45+ min)',
        'Other',
    ]),
    clientPresent: types.boolean,
    spousePresent: types.boolean,
    partnerPresent: types.boolean,
    parentPresent: types.boolean,
    siblingPresent: types.boolean,
    childPresent: types.boolean,
    otherPresent: types.boolean,
    spouseName: types.optional(types.string, ""),
    partnerName: types.optional(types.string, ""),
    parentName: types.optional(types.string, ""),
    siblingName: types.optional(types.string, ""),
    childName: types.optional(types.string, ""),
    otherName: types.optional(types.string, ""),
})

const MentalStatusExamModel = types.model('MentalStatusExamModel', {
    cognitiveFunctioning: types.optional(types.enumeration('cognitiveFunctioning', cognitiveFunctioningStates), 'Disorganized'),
    affect: types.optional(types.enumeration('affect', affectStates), 'Appropriate'),
    mood: types.optional(types.enumeration('mood', moodStates), 'Euthymic'),
    interpersonal: types.optional(types.enumeration('interpersonal', interpersonalStates), 'Interactive'),
    functionalStatus: types.optional(types.enumeration('functionalStatus', functionalStatusStates), 'Intact'),
    noRisk: types.boolean,
    dangerToSelf: types.boolean,
    dangerToOthers: types.boolean,
    otherRisk: types.boolean,
    dangerToSelfRisk: types.enumeration('dangerToSelfRisk', ['Low', 'Medium', 'High']),
    dangerToOthersRisk: types.enumeration('dangerToOthersRisk', ['Low', 'Medium', 'High']),
    dangerToSelfEvidence: types.string,
    dangerToOthersEvidence: types.string,
    dangerToSelfPlan: types.string,
    dangerToOthersPlan: types.string,
    otherRiskInformation: types.string,
})



const MeetingInformationModel = types.model('MeetingInformationModel', {
    meetingLogistics: MeetingLogisticsModel,
    mentalStatusExam: MentalStatusExamModel,
    problems: types.string,
    symptoms: SymptomsModel,
    interventions: types.array(InterventionModel),
    progressions: types.array(ProgressModel),
    identifiedProblem: types.string,
}).actions((self) => {
    return {
        // reset(): void {
        //     applySnapshot(self, initialState.meetingInformation)
        // },
        setClientInitials(intitals: string): void {
            self.meetingLogistics.clientInitials = intitals
        },
        setTelehealthPlatform(platform: string): void {
            self.meetingLogistics.telehealthPlatform = platform
        },
        setTelehealthAppropriate(appropriate: string): void {
            self.meetingLogistics.telehealthAppropriate = appropriate
        },
        setTelehealthConsent(consent: string): void {
            self.meetingLogistics.telehealthConsent = consent
        },
        setphyscialLocation(location: string): void {
            self.meetingLogistics.physicalLocation = location
        },
        setOtherAddress(address: string): void {
            self.meetingLogistics.otherAddress = address
        },
        setStartTime(startTime: Dayjs | null): void {
            self.meetingLogistics.startTime = startTime?.toString() || dayjs().toString()
        },
        setEndTime(endTime: Dayjs | null): void {
            self.meetingLogistics.endTime = endTime?.toString() || dayjs.toString()
        },
        setCptCode(code: string): void {
            self.meetingLogistics.cptCode = code
        },

        setClientPresent(present: boolean): void {
            self.meetingLogistics.clientPresent = present
        },
        setSpousePresent(present: boolean): void {
            self.meetingLogistics.spousePresent = present
        },
        setPartnerPresent(present: boolean): void {
            self.meetingLogistics.partnerPresent = present
        },
        setParentPresent(present: boolean): void {
            self.meetingLogistics.parentPresent = present
        },
        setSiblingPresent(present: boolean): void {
            self.meetingLogistics.siblingPresent = present
        },
        setchildPresent(present: boolean): void {
            self.meetingLogistics.childPresent = present
        },
        setOtherPresent(present: boolean): void {
            self.meetingLogistics.otherPresent = present
        },
        setSpouseName(name: string): void {
            self.meetingLogistics.spouseName = name
        },
        setPartnerName(name: string): void {
            self.meetingLogistics.partnerName = name
        },
        setParentName(name: string): void {
            self.meetingLogistics.parentName = name
        },
        setSiblingName(name: string): void {
            self.meetingLogistics.siblingName = name
        },
        setchildName(name: string): void {
            self.meetingLogistics.childName = name
        },
        setOtherName(name: string): void {
            self.meetingLogistics.otherName = name
        },
        setCognitiveFunctioning(cognitiveFunctioningState: CognitiveFunctioningState): void {
            self.mentalStatusExam.cognitiveFunctioning = cognitiveFunctioningState
        },
        setAffect(affect: AffectStates): void {
            self.mentalStatusExam.affect = affect
        },
        setMood(mood: MoodStates): void {
            self.mentalStatusExam.mood = mood
        },
        setInterpersonal(interpersonal: InterpersonalStates): void {
            self.mentalStatusExam.interpersonal = interpersonal
        },
        setFunctionalStatus(functionalStatus: FunctionalStatusStates): void {
            self.mentalStatusExam.functionalStatus = functionalStatus
        },
        setNoRisk(risk: boolean): void {
            self.mentalStatusExam.noRisk = risk
        },
        setDangerToSelf(risk: boolean): void {
            self.mentalStatusExam.dangerToSelf = risk
        },
        setDangerToOthers(risk: boolean): void {
            self.mentalStatusExam.dangerToOthers = risk
        },
        setOtherRisk(risk: boolean): void {
            self.mentalStatusExam.otherRisk = risk
        },
        setDangerToSelfRisk(risk: RiskLevels): void {
            self.mentalStatusExam.dangerToSelfRisk = risk
        },
        setDangerToOthersRisk(risk: RiskLevels): void {
            self.mentalStatusExam.dangerToOthersRisk = risk
        },
        setDangerToSelfEvidence(evidence: string): void {
            self.mentalStatusExam.dangerToSelfEvidence = evidence
        },
        setDangerToOthersEvidence(evidence: string): void {
            self.mentalStatusExam.dangerToOthersEvidence = evidence
        },
        setDangerToSelfPlan(plan: string): void {
            self.mentalStatusExam.dangerToSelfPlan = plan
        },
        setDangerToOthersPlan(plan: string): void {
            self.mentalStatusExam.dangerToOthersPlan = plan
        },
        setOtherRiskInformation(plan: string): void {
            self.mentalStatusExam.otherRiskInformation = plan
        },
        setProblems(problems: string): void {
            self.problems = problems
        },
        toggleAnxietySymptom(symptom: PossibleAnxietySymptom): void {
            if (self.symptoms.anxietySymptoms.includes(symptom)) {
                self.symptoms.anxietySymptoms.replace(self.symptoms.anxietySymptoms.filter(s => s !== symptom))
            } else {
                self.symptoms.anxietySymptoms.push(symptom)
            }
        },
        toggleDepressionSymptom(symptom: PossibleDepressionSymptom): void {
            if (self.symptoms.depressionSymptoms.includes(symptom)) {
                self.symptoms.depressionSymptoms.replace(self.symptoms.depressionSymptoms.filter(s => s !== symptom))
            } else {
                self.symptoms.depressionSymptoms.push(symptom)
            }
        },
        togglePTSDSymptom(symptom: PossiblePTSDSymptom): void {
            if (self.symptoms.ptsdSymptoms.includes(symptom)) {
                self.symptoms.ptsdSymptoms.replace(self.symptoms.ptsdSymptoms.filter(s => s !== symptom))
            } else {
                self.symptoms.ptsdSymptoms.push(symptom)
            }
        },
        setOtherSymptoms(symptoms: string): void {
            self.symptoms.otherSymptoms = symptoms
        },
        setGroupSystemsTogether(groupSymptomsTogether: boolean): void {
            self.symptoms.groupSymptomsTogether = groupSymptomsTogether
        },
        setSelfCareAffected(selfCareAffected: boolean): void {
            self.symptoms.selfCareAffected = selfCareAffected
        },
        setSelfCareSymptom(symptom: PossibleSelfCareSymptom, value: boolean): void {
            if (value === true) {
                if (!self.symptoms.selfCareSymptoms.includes(symptom)) {
                    self.symptoms.selfCareSymptoms.push(symptom)
                }
            } else {
                self.symptoms.selfCareSymptoms.replace(self.symptoms.selfCareSymptoms.filter(s => s !== symptom))
            }
        },
        setOtherSelfCareSymptoms(symptoms: string): void {
            self.symptoms.otherSelfCareSymptoms = symptoms
        },
        setOccupationAffected(occupationAffected: boolean): void {
            self.symptoms.occupationAffected = occupationAffected
        },
        setOccupationSymptom(symptom: PossibleOccupationSymptom, value: boolean): void {
            if (value === true) {
                if (!self.symptoms.occupationSymptoms.includes(symptom)) {
                    self.symptoms.occupationSymptoms.push(symptom)
                }
            } else {
                self.symptoms.occupationSymptoms.replace(self.symptoms.occupationSymptoms.filter(s => s !== symptom))
            }
        },
        setOtherOccupationSymptoms(symptoms: string): void {
            self.symptoms.otherOccupationSymptoms = symptoms
        },
        setAcademicAffected(academicAffected: boolean): void {
            self.symptoms.academicAffected = academicAffected
        },
        setAcademicSymptom(symptom: PossibleAcademicSymptom, value: boolean): void {
            if (value === true) {
                if (!self.symptoms.academicSymptoms.includes(symptom)) {
                    self.symptoms.academicSymptoms.push(symptom)
                }
            } else {
                self.symptoms.academicSymptoms.replace(self.symptoms.academicSymptoms.filter(s => s !== symptom))
            }
        },
        setOtherAcademicSymptoms(symptoms: string): void {
            self.symptoms.otherAcademicSymptoms = symptoms
        },
        setInterpersonalAffected(interpersonalAffected: boolean): void {
            self.symptoms.interpersonalAffected = interpersonalAffected
        },
        setInterpersonalSymptom(symptom: PossibleInterpersonalSymptom, value: boolean): void {
            if (value === true) {
                if (!self.symptoms.interpersonalSymptoms.includes(symptom)) {
                    self.symptoms.interpersonalSymptoms.push(symptom)
                }
            } else {
                self.symptoms.interpersonalSymptoms.replace(self.symptoms.interpersonalSymptoms.filter(s => s !== symptom))
            }
        },
        setOtherInterpersonalSymptoms(symptoms: string): void {
            self.symptoms.otherInterpersonalSymptoms = symptoms
        },
        setCommunityAffected(communityAffected: boolean): void {
            self.symptoms.communitylAffected = communityAffected
        },
        setCommunitySymptom(symptom: PossibleCommunitySymptom, value: boolean): void {
            if (value === true) {
                if (!self.symptoms.communitySymptoms.includes(symptom)) {
                    self.symptoms.communitySymptoms.push(symptom)
                }
            } else {
                self.symptoms.communitySymptoms.replace(self.symptoms.communitySymptoms.filter(s => s !== symptom))
            }
        },
        setOtherCommunitySymptoms(symptoms: string): void {
            self.symptoms.otherCommunitySymptoms = symptoms
        },
        setIntervention(interventionIndex: number, value: boolean): void {
            if (value === false) {
                if (self.interventions.find(i => i.possibleInterventionsIndex === interventionIndex)) {
                    self.interventions.replace(self.interventions.filter(s => s.possibleInterventionsIndex !== interventionIndex))
                }
            } else {
                if (!self.interventions.find(i => i.possibleInterventionsIndex === interventionIndex)) {
                    self.interventions.push({
                        possibleInterventionsIndex: interventionIndex,
                        text: possibleInterventions[interventionIndex].text,
                        replacementText: "",
                    })
                }
            }
        },
        setInterventionReplacementText(index: number, text: string): void {
            const intervention = self.interventions.find(i => i.possibleInterventionsIndex === index)
            if (intervention) {
                intervention.replacementText = text
            }
        },
        setProgress(progressIndex: number, value: boolean): void {
            if (value === false) {
                if (self.progressions.find(i => i.possibleProgressIndex === progressIndex)) {
                    self.progressions.replace(self.progressions.filter(s => s.possibleProgressIndex !== progressIndex))
                }
            } else {
                if (!self.progressions.find(i => i.possibleProgressIndex === progressIndex)) {
                    self.progressions.push({
                        possibleProgressIndex: progressIndex,
                        text: possibleProgressions[progressIndex].text,
                        replacementText: "",
                    })
                }
            }
        },
        setProgressReplacementText(index: number, text: string): void {
            const progress = self.progressions.find(i => i.possibleProgressIndex === index)
            if (progress) {
                progress.replacementText = text
            }
        },
        setIdentifedProblem(problem: string): void {
            self.identifiedProblem = problem
        }
    }
})

export default MeetingInformationModel;


export interface IMeetingInformationModel extends Instance<typeof MeetingInformationModel> { }
