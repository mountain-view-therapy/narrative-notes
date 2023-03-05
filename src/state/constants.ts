export const locationCodes = ["Home (Loc Code 10)", "Other (Loc Code 02)"]
export type LocationCode = typeof locationCodes[number]

export const possibleCptCodes = [
    "90791 Diagnostic (50+ min)",
    "90832 Individual (17-37 min)",
    "90834 Individual (38-52 min)",
    "90837 Individual (53+ min)",
    "90847 Couples/Family with client present (45+ min)",
    "90846 Family without client present (45+ min)",
    "1111 Narrative Consulting (45 min)",
    "Other",
]
export type PossibleCptCode = typeof possibleCptCodes[number]


export const cognitiveFunctioningStates = [
    "Oriented / Alert",
    "Disorganized",
    "Tangential",
    "Preoccupied",
    "Circumstantial",
    "Not Assessed",
]
export type CognitiveFunctioningState = typeof cognitiveFunctioningStates[number]


export const affectStates = [
    "Appropriate",
    "Inappropriate",
    "Labile",
    "Constricted",
    "Blunted",
    "Flat",
    "Not Assessed",
]
export type AffectStates = typeof affectStates[number]

export const moodStates = [
    "Euthymic",
    "Depressed",
    "Dysphoric",
    "Anxious",
    "Angry",
    "Euphoric",
    "Not Assessed"
]
export type MoodStates = typeof moodStates[number]


export const interpersonalStates = [
    "Interactive",
    "Intermittently Interactive",
    "Guarded",
    "Withdrawn",
    "Hostile",
    "Not Assessed",
]
export type InterpersonalStates = typeof interpersonalStates[number]

export const functionalStatusStates = [
    "Intact",
    "Impaired",
    "Variably Impaired",
    "Not Assessed",
]
export type FunctionalStatusStates = typeof interpersonalStates[number]

export const riskLevels = [
    "Low",
    "Medium",
    "High",
]
export type RiskLevels = typeof riskLevels[number]


export const possibleAnxietySymptoms = [
    "excessive worry that is difficult to control",
    "constantly feeling on edge",
    "restlessness",
    "racing thoughts",
    "insomnia",
    "shortness of breath",
    "heart palpitations",
    "dry mouth",
    "difficulty concentrating",
    "trouble falling asleep",
    "trouble staying asleep",
    "general state of irritability",
]
export type PossibleAnxietySymptom = typeof possibleAnxietySymptoms[number]

export const possibleDepressionSymptoms = [
    "depressed mood",
    "irritable mood",
    "diminished interest or enjoyment in activities",
    "sleeplessness",
    "hypersomnia",
    "fatigue/lack of energy",
    "difficulty thinking or concentrating",
    "indecisiveness",
    "social withdrawal",
    "feelings of hopelessness and worthlessness",
    "feelings of inappropriate guilt",
    "lack of appetite",
    "recurrent suicidal ideation",
]
export type PossibleDepressionSymptom = typeof possibleDepressionSymptoms[number]

export const possiblePTSDSymptoms = [
    "intrusive thoughts or memories of the traumatic event",
    "difficulty sleeping",
    "nightmares",
    "flashbacks",
    "hypervigilance",
    "difficulty concentrating",
    "avoidance of reminders of the traumatic event",
    "being easily startled",
    "feelings of guilt/shame",
    "feelings of hopelessness",
    "intense distress when exposed to reminders of the traumatic event",
]
export type PossiblePTSDSymptom = typeof possiblePTSDSymptoms[number]

export const possibleSelfCareSymptoms = [
    "[CLIENT] is getting inadequate sleep, only 5 hours per night",
    "[CLIENT] is only eating 1 meal per day",
    "[CLIENT] is only showering twice a week when they\"d prefer to shower daily",
]
export type PossibleSelfCareSymptom = typeof possibleSelfCareSymptoms[number]


export const possibleOccupationSymptoms = [
    "[CLIENT] is getting in frequent arguments with coworkers",
    "[CLIENT] is frequently late to work",
    "[CLIENT] frequently misses work",
    "[CLIENT] has received a written warning at work",
    "[CLIENT] is at risk of losing job",
]
export type PossibleOccupationSymptom = typeof possibleOccupationSymptoms[number]


export const possibleAcademicSymptoms = [
    "[CLIENT] frequently arrives late to school",
    "[CLIENT] frequently misses school",
    "[CLIENT] lack of school attendance is negatively affecting grades",
    "[CLIENT] unable to keep up with coursework",
    "[CLIENT] is engaged in fights at school every month",
]
export type PossibleAcademicSymptom = typeof possibleAcademicSymptoms[number]

export const possibleInterpersonalSymptoms = [
    "[CLIENT] is getting in frequent arguments with partner",
    "[CLIENT] has frequent arguments with family members",
    "[CLIENT] has frequent arguments with friends",
    "[CLIENT] is unable to partake in family obligations",
]
export type PossibleInterpersonalSymptom = typeof possibleInterpersonalSymptoms[number]

export const possibleCommunitySymptoms = [
    "[CLIENT] has been unable to attend community functions",
    "[CLIENT] has been unable to fulfill community obligations",
]
export type PossibleCommunitySymptom = typeof possibleCommunitySymptoms[number]

export const possibleInterventions = [
    { text: "Used/promoted externalized language to give [CLIENT] space to take a position on their relationship with [PROBLEM]." },
    { text: "Used deconstruction questions to help [CLIENT] name the problem, [PROBLEM]." },
    { text: "Used deconstruction questions to help [CLIENT] identify the effects of [PROBLEM]." },
    { text: "Used deconstruction questions to help [CLIENT] identify the tactics of [PROBLEM]." },
    { text: "Used deconstruction questions to help [CLIENT] explore the history of their relationship with [PROBLEM]." },
    { text: "Helped [CLIENT] identify cultural discourse and societal norms thay may be supporting [PROBLEM]." },
    { text: "Invited [CLIENT] to take a stance on their relationship with [PROBLEM]. Used deconstruction questions to help them richly describe their values and preferences that  justify their stance." },
    { text: "Used Narrative practice of double listening to identify unique outcomes invite [CLIENT] to richly describe situation where [PROBLEM] has less influence. " },
    { text: "Used Re-Authoring to invite [CLIENT] to richly describe their agency in evading [PROBLEM]’s influence." },
    { text: "Used Narrative practice of Re-Authoring to invite [CLIENT] into preferred story development." },
    {
        text: "Used Re-Authoring questions to identify name for preferred narrative, [REPLACEMENT].",
        prompt: "[key word or phrase for emerging preferred narrative]",
    },
    { text: "Used Re-Authoring questions to invite  [CLIENT] to identify their actions that support their preferred narrative." },
    { text: "Used Re-Authoring questions to invite [CLIENT] to identify people that support their preferred narrative including." },
    { text: "Used Re-Authoring questions to invite [CLIENT] to identify situations that support their preferred narrative." },
    { text: "Used Re-Authoring questions to invite [CLIENT] consider how their preferred narrative fits with their cultural context" },
    { text: "Used Re-Authoring questions to invite [CLIENT] to identify past experiences that support their preferred narrative." },
    { text: "Used Re-Authoring questions to invite [CLIENT] to making meaning of their life through the lens of their preferred narrative" },
    { text: "Used Re-Authoring questions to invite [CLIENT] to imagine the possbilities of living their preferred narrative" },
    { text: "Used the narrative practice of Re-Authoring Conversations to invite [CLIENT] to make meaning of themself through the lens of their preferred narrative." },
    { text: "Invited [CLIENT] to reflect on the juxtaposition between their preferred narrative and [PROBLEM]’s narrative." },
    {
        text: "Used Narrative practice of Re-membering Conversations to invoke the presences/memory of [REPLACEMENT] to thicken their preferred narrative.",
        prompt: "[name person “re-membered”]",
    },
    { text: "Worked with [CLIENT] to cultivate strategies to counter [PROBLEM]'s influence." },
    {
        text: "Worked with [CLIENT] to develop a concrete preferred action plan in relation to [REPLACEMENT].",
        prompt: "[specify activity of daily living or symptom]"
    },
    { text: "Referred to resources to learn meditation/mindfulness. Incorporated the use of these skills in preferred story development." },
    { text: "Referred [CLIENT] to physician for medical evaluation. " },
    { text: "Reviewed intake paperwork, explained practice policies, HIPAA privacy policies, and patient rights, and obtained informed consent for therapy." },
    { text: "Reviewed Clinical Formulation" },
    { text: "Reviewed Treatment Plan" },
    { text: "Reviewed intake questionnaire" },
    { text: "Started work on CANS assessment with [CLIENT] and parent. Will complete within 21 days" },
    { text: "Completed CANS assessment" },
]

export const possibleProgressions = [
    {
        text: "[CLIENT] has maintained current level of fuctioning in realtion to [PROBLEM]’s influence.",
    },
    { text: "[CLIENT] consistently speaks about [PROBLEM] in externalized language during therapy meetings.", },
    {
        text: "[CLIENT] identified and verbalized an experience near name for the problem, [REPLACEMENT].",
        prompt: "[state name]",
    },
    {
        text: "[CLIENT] identified and verbalized effects of [PROBLEM] including [REPLACEMENT]",
        prompt: "[list effects identified]",
    },
    {
        text: "[CLIENT] identified and verbalized tactics used by [PROBLEM] including [REPLACEMENT]",
        prompt: "[list tactics identified]"
    },
    {
        text: "[CLIENT] identified and verbalized past experiences that support or sustain the problematic relationship with [PROBLEM] including [REPLACEMENT]",
        prompt: "[name experiences]",
    },
    {
        text: "[CLIENT] identified people that support or sustain the problematic relationship with [PROBLEM] including [REPLACEMENT]",
        prompt: "[name people]",
    },
    {
        text: "[CLIENT] identified situations that support or sustain the problematic relationship with [PROBLEM] including [REPLACEMENT]",
        prompt: "[name situations]",
    },
    {
        text: "[CLIENT] identified and verbalized cultural discourses that support and sustain their relationship with [PROBLEM] including [REPLACEMENT]",
        prompt: "[name discourses]",
    },
    {
        text: "[CLIENT] named and verbalized a rich description of their values/preferences in relationship to [PROBLEM] including [REPLACEMENT]",
        prompt: "[name values/preferences]",
    },
    {
        text: "[CLIENT] named and richly decribed strategies that counter [PROBLEM] including [REPLACEMENT]",
        prompt: "[list strategies]"
    },
    {
        text: "[CLIENT] practiced strategies that counter [PROBLEM] including [REPLACEMENT]",
        prompt: "[list strategies]"
    },
    {
        text: "[CLIENT] named and richly decribed times when [PROBLEM] had less influence including [REPLACEMENT]",
        prompt: "[name times when problem had less influence]"
    },
    {
        text: "[CLIENT] identified and verbalized actions they have taken to support their preferred narrative including [REPLACEMENT]",
        prompt: "[list actions]",
    },
    {
        text: "[CLIENT] identified and verbalized situations that support their preferred narrative including [REPLACEMENT]",
        prompt: "[list situations]",
    },
    {
        text: "[CLIENT] identified [REPLACEMENT] as a person who will support their preferred narrative.",
        prompt: "[name person]",
    },
    {
        text: "[CLIENT] identified [REPLACEMENT] as people who will support their preferred narrative.",
        prompt: "[name group of people]",
    },
    {
        text: "[CLIENT] identified and verbalized past experiences that support their preferred narrative including [REPLACEMENT]",
        prompt: "[list experiences]",
    },
    {
        text: "[CLIENT] considered their how their preferred narrative fits with their cultural context ([REPLACEMENT]).",
        prompt: "[name discouses discussed]",
    },
    {
        text: "[CLIENT] considered how their preferred narrative fits with their cultural context ([REPLACEMENT]).",
        prompt: "[name discouses discussed]",
    },

    { text: "[CLIENT] named and richly described their preferred narrative that incorporates their stated values and preferences." },
    {
        text: "[CLIENT] reported the were able to counter [PROBLEM] by ([REPLACEMENT]).",
        prompt: "[how where they able to counter the problem?]",
    },
    {
        text: "[CLIENT] connected with [REPLACEMENT] to help support their preferred narrative.",
        prompt: "[name person/people]."
    },
    {
        text: "[CLIENT] learned and implemented behavioral strategies to exert acute control over relationship with [PROBLEM] including [REPLACEMENT]",
        prompt: "[list strategies].",
    },
    {
        text: "[CLIENT] spent the majority of the meeting sharing accounts of living their preferred story including [REPLACEMENT]",
        prompt: "[accounts of living their preferred story].",
    },
    {
        text: "[CLIENT] consistently spoke about themselves through the lens of their preferred story.",
    },
    {
        text: "[CLIENT] reported connection to their preferred stories as a means to decrease the [PROBLEM]’s influence.",
    },

]


export const possibleRecommendationsForMovingForward = [
    "N/A-This is the initial diagnostic meeting",
    "Continue with current treatment plan",
    "Update treatment plan",
    "Discontinue therapy",
]
export type PossibleRecommendationsForMovingForward = typeof possibleRecommendationsForMovingForward[number]


export const initialState = {
    meetingInformation: {
        meetingLogistics: {
            clientInitials: "",
            telehealthPlatform: "Simple Practice",
            telehealthAppropriate: "Yes",
            telehealthConsent: "Yes",
            otherAddress: "",
            startTime: "12:00 AM",
            endTime: "12:00 AM",
            cptCode: "90837 Individual (53+ min)",
            otherCptCode: "",
            clientPresent: true,
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
            cognitiveFunctioning: "Oriented / Alert",
            affect: "Appropriate",
            mood: "Euthymic",
            interpersonal: "Interactive",
            functionalStatus: "Intact",
            noRisk: false,
            dangerToSelf: false,
            dangerToOthers: false,
            otherRisk: false,
            dangerToSelfRisk: "Low",
            dangerToOthersRisk: "Low",
            dangerToSelfEvidence: "",
            dangerToOthersEvidence: "",
            dangerToSelfPlan: "",
            dangerToOthersPlan: "",
            otherRiskInformation: "",
        },
        problems: "",
        symptoms: {
            anxietySymptoms: [],
            depressionSymptoms: [],
            ptsdSymptoms: [],
            otherSymptoms: [""],
            groupSymptomsTogether: false,
        },
        functioning: {
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
        },
        identifiedProblem: "",
        recommendationForMovingForward: "Continue with current treatment plan",
        frequencyChangeExplanation: "",
        nextMeeting: "",
        otherInterventions: [""],
        otherProgressions: [""],

    },
    currentTab: "/meeting-logstics",
}