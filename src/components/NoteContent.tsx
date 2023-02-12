import dayjs from "dayjs"
import { observer } from "mobx-react-lite"
import { getState } from "../state/provider"

const NoteContent = () => {

    const { meetingInformation: {
        meetingLogistics: {
            telehealthPlatform,
            telehealthAppropriate,
            telehealthConsent,
            physicalLocation,
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
        mentalStatusExam: {
            cognitiveFunctioning,
            affect,
            mood,
            interpersonal,
            functionalStatus,
            noRisk,
            dangerToSelf,
            dangerToOthers,
            otherRisk,
            dangerToSelfRisk,
            dangerToOthersRisk,
            dangerToSelfEvidence,
            dangerToOthersEvidence,
            dangerToSelfPlan,
            dangerToOthersPlan,
            otherRiskInformation,
        },
        problems,
        symptoms: {
            anxietySymptoms,
            depressionSymptoms,
            ptsdSymptoms,
            otherSymptoms,
            groupSymptomsTogether,
        }
    } } = getState()

    return (
        <div>
            <div>
                <b>HIPAA Compliant telehealth platform: </b>
                {telehealthPlatform}
            </div>
            <div>
                <b>Is person-served appropriate for telehealth? </b>
                {telehealthAppropriate}
            </div>
            <div>
                <b>Did you receive consent for telehealth meetings? </b>
                {telehealthConsent}
            </div>
            <div>
                <b>Person-served physical location during the meeting: </b>
                {physicalLocation}
            </div>
            <div>
                <b>Start Time: </b>
                {dayjs(startTime).format('h:mm A')}
            </div>
            <div>
                <b>End Time: </b>
                {dayjs(endTime).format('h:mm A')}
            </div>
            <div>
                <b>CPT Code: </b>
                {cptCode}
            </div>
            <div>
                <b>Persons Present: </b>
                <ul>
                    {clientPresent && <li>Client</li>}
                    {spousePresent && <li>Spouse: {spouseName}</li>}
                    {partnerPresent && <li>Partner: {partnerName}</li>}
                    {parentPresent && <li>Parent: {parentName}</li>}
                    {siblingPresent && <li>Silbling: {siblingName}</li>}
                    {childPresent && <li>Child: {childName}</li>}
                    {otherPresent && <li>Other: {otherName}</li>}
                </ul>
            </div>


            {cognitiveFunctioning &&
                <div>
                    <b>Cognitive Functioning: </b> {cognitiveFunctioning}
                </div>
            }
            {affect &&
                <div>
                    <b>Affect: </b> {affect}
                </div>
            }
            {mood &&
                <div>
                    <b>Mood: </b> {mood}
                </div>
            }
            {interpersonal &&
                <div>
                    <b>Interpersonal: </b> {interpersonal}
                </div>
            }
            {functionalStatus &&
                <div>
                    <b>Functional Status: </b> {functionalStatus}
                </div>
            }
            {(noRisk || dangerToOthers || dangerToSelf || otherRisk) &&
                <div>
                    <b>Risk Status: </b>
                    <ul>
                        {noRisk && <li>No Significant Risk Factors presented</li>}
                        {dangerToSelf &&
                            <li>
                                Danger to Self
                                <ul>
                                    <li>Risk Level: {dangerToSelfRisk}</li>
                                    <li>Evidence: {dangerToSelfEvidence}</li>
                                    <li>Plan: {dangerToSelfPlan}</li>
                                </ul>
                            </li>
                        }
                        {dangerToOthers &&
                            <li>
                                Danger to Others
                                <ul>
                                    <li>Risk Level: {dangerToOthersRisk}</li>
                                    <li>Evidence: {dangerToOthersEvidence}</li>
                                    <li>Plan: {dangerToOthersPlan}</li>
                                </ul>
                            </li>
                        }
                        {otherRisk &&
                            <li>
                                Other Risk
                                <ul>
                                    <li>Information: {otherRiskInformation}</li>
                                </ul>
                            </li>
                        }
                    </ul>
                </div>
            }
            {problems &&
                <div>
                    <div>
                        <b>Problems Discussed in the meeting include: </b>
                    </div>
                    <pre>{problems}</pre>
                </div>
            }
            {(anxietySymptoms.length || depressionSymptoms.length || ptsdSymptoms.length || otherSymptoms) &&
                <div>
                    <b>Symptoms addressed during this meeting include: </b>
                    <ul>
                        {groupSymptomsTogether ? (
                            <li>Anxiety Symptoms <ul>
                                {
                                    anxietySymptoms.map(symptom => <li>{symptom}</li>)
                                }
                            </ul></li>
                        )
                            :

                            anxietySymptoms.map(symptom => <li>{symptom}</li>)


                        }
                        {groupSymptomsTogether ? (
                            <li>Depression Symptoms <ul>
                                {
                                    depressionSymptoms.map(symptom => <li>{symptom}</li>)
                                }
                            </ul></li>
                        )
                            :
                            depressionSymptoms.map(symptom => <li>{symptom}</li>)
                        }
                        {groupSymptomsTogether ? (
                            <li>PTSD Symptoms <ul>
                                {
                                    ptsdSymptoms.map(symptom => <li>{symptom}</li>)
                                }
                            </ul></li>
                        )
                            :
                            ptsdSymptoms.map(symptom => <li>{symptom}</li>)
                        }

                    </ul>
                </div>
            }
        </div >
    )

}

export default observer(NoteContent)

/* <Stack flexDirection='row'>


<Stack flexDirection='column'>
    <Typography fontWeight={700}>
        Persons Present:
    </Typography>
    {clientPresent &&
        <Typography marginLeft={3}>
            Client
        </Typography>
    }
    {spousePresent &&
        <Typography marginLeft={3}>
            Spouse: {spouseName}
        </Typography>
    }
    {partnerPresent &&
        <Typography marginLeft={3}>
            Partner: {partnerName}
        </Typography>
    }
    {parentPresent &&
        <Typography marginLeft={3}>
            Parent: {parentName}
        </Typography>
    }
    {siblingPresent &&
        <Typography marginLeft={3}>
            Sibling: {siblingName}
        </Typography>
    }
    {childPresent &&
        <Typography marginLeft={3}>
            Child: {childName}
        </Typography>
    }
    {otherPresent &&
        <Typography marginLeft={3}>
            Other: {otherName}
        </Typography>
    }
</Stack>
</Box> */

//    )
//}