import { Typography } from "@mui/material"
import { Box } from "@mui/system"
import dayjs from 'dayjs-ext'
import timeZonePlugin from 'dayjs-ext/plugin/timeZone'
import { observer } from "mobx-react-lite"
import { getState } from "../state/provider"

const NoteContent = () => {

    const { meetingInformation: {
        meetingLogistics: {
            clientInitials,
            telehealthPlatform,
            telehealthAppropriate,
            telehealthConsent,
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
            selfCareAffected,
            selfCareSymptoms,
            otherSelfCareSymptoms,
            occupationAffected,
            occupationSymptoms,
            otherOccupationSymptoms,
            academicAffected,
            academicSymptoms,
            otherAcademicSymptoms,
            interpersonalAffected,
            interpersonalSymptoms,
            otherInterpersonalSymptoms,
            communitylAffected,
            communitySymptoms,
            otherCommunitySymptoms,
        },
        interventions,
        otherInterventions,
        progressions,
        identifiedProblem,
        recommendationForMovingForward,
        frequencyChangeExplanation,
        nextMeeting,
    } } = getState()

    dayjs.extend(timeZonePlugin).locale('cs')

    const replaceText = (text: string, replacementText: string) => {
        return text.replace('[PROBLEM]', identifiedProblem).replace('[CLIENT]', clientInitials).replace('[REPLACEMENT]', replacementText)
    }

    if (!startTime || !endTime) {
        return (
            <Box>
                <Typography>Please fill out all necessary fields</Typography>
                <Typography>Missing Fields</Typography>
                <ul>
                    {!startTime &&
                        <li>Start Time in <a href="/narrative-notes/#/meeting-logistics">Meeting Logistics tab</a></li>
                    }
                    {!endTime &&
                        <li>End Time in <a href="/narrative-notes/#/meeting-logistics">Meeting Logistics tab</a></li>
                    }
                </ul>
            </Box>
        )
    }

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
                <b>Start Time: </b>
                {startTime}
            </div>
            <div>
                <b>End Time: </b>
                {endTime}
            </div>
            <div>
                <b>CPT Code: </b>
                {cptCode === 'Other' ? otherCptCode : cptCode}
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

            <div><b>Mental Status Exam / Risk</b>
                <ul>
                    {cognitiveFunctioning &&
                        <li>
                            <b>Cognitive Functioning: </b> {cognitiveFunctioning}
                        </li>
                    }
                    {affect &&
                        <li>
                            <b>Affect: </b> {affect}
                        </li>
                    }
                    {mood &&
                        <li>
                            <b>Mood: </b> {mood}
                        </li>
                    }
                    {interpersonal &&
                        <li>
                            <b>Interpersonal: </b> {interpersonal}
                        </li>
                    }
                    {functionalStatus &&
                        <li>
                            <b>Functional Status: </b> {functionalStatus}
                        </li>
                    }
                    {(noRisk || dangerToOthers || dangerToSelf || otherRisk) &&
                        <li>
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
                        </li>
                    }
                </ul>
            </div>
            {problems &&
                <div>
                    <div>
                        <b>Problems Discussed in the meeting include: </b>
                    </div>
                    <pre style={{ width: 504, whiteSpace: "pre-wrap", overflowWrap: "break-word", fontSize: 16, fontWeight: 400, fontFamily: 'sans-serif' }}>{problems}</pre>
                </div>
            }
            {(anxietySymptoms.length || depressionSymptoms.length || ptsdSymptoms.length || otherSymptoms) &&
                <div>
                    <b>Symptoms addressed during this meeting include: </b>
                    <ul>
                        {anxietySymptoms.length && groupSymptomsTogether ? (
                            <li>Anxiety Symptoms<ul>
                                {
                                    anxietySymptoms.map(symptom => <li key={symptom}>{symptom}</li>)
                                }
                            </ul></li>
                        )
                            :
                            anxietySymptoms.map(symptom => <li key={symptom}>{symptom}</li>)
                        }
                        {depressionSymptoms.length && groupSymptomsTogether ? (
                            <li>Depression Symptoms<ul>
                                {
                                    depressionSymptoms.map(symptom => <li key={symptom}>{symptom}</li>)
                                }
                            </ul></li>
                        )
                            :
                            depressionSymptoms.map(symptom => <li key={symptom}>{symptom}</li>)
                        }
                        {ptsdSymptoms.length && groupSymptomsTogether ? (
                            <li>PTSD Symptoms<ul>
                                {
                                    ptsdSymptoms.map(symptom => <li key={symptom}>{symptom}</li>)
                                }
                            </ul></li>
                        )
                            :
                            ptsdSymptoms.map(symptom => <li key={symptom}>{symptom}</li>)
                        }
                        {otherSymptoms && groupSymptomsTogether ? (
                            <li>Other Symptoms<ul>
                                <li>{otherSymptoms}</li>
                            </ul></li>
                        )
                            :
                            (otherSymptoms && <li>{otherSymptoms}</li>)
                        }
                    </ul>
                </div>
            }
            {clientInitials && selfCareAffected &&
                <p>
                    These symptoms affect {clientInitials}'s self care.
                    {selfCareSymptoms.map(s => <span key={s}> {clientInitials} {s}. </span>)}
                    {otherSelfCareSymptoms}
                </p>
            }
            {clientInitials && occupationAffected &&
                <p>
                    These symptoms affect {clientInitials}'s occupational functioning.
                    {occupationSymptoms.map(s => <span key={s}> {clientInitials} {s}. </span>)}
                    {otherOccupationSymptoms}
                </p>
            }
            {clientInitials && academicAffected &&
                <p>
                    These symptoms affect {clientInitials}'s academic functioning.
                    {academicSymptoms.map(s => <span key={s}> {clientInitials} {s}. </span>)}
                    {otherAcademicSymptoms}
                </p>
            }
            {clientInitials && interpersonalAffected &&
                <p>
                    These symptoms affect {clientInitials}'s interpersonal functioning.
                    {interpersonalSymptoms.map(s => <span key={s}> {clientInitials} {s}. </span>)}
                    {otherInterpersonalSymptoms}
                </p>
            }
            {clientInitials && communitylAffected &&
                <p>
                    These symptoms affect {clientInitials}'s community functioning.
                    {communitySymptoms.map(s => <span key={s}> {clientInitials} {s}. </span>)}
                    {otherCommunitySymptoms}
                </p>
            }
            {(interventions.length > 0 || otherInterventions.length > 0) &&
                <b>In Meeting Interventions:</b>
            }
            {interventions.map(intervention => (
                <p key={intervention.text}>{replaceText(intervention.text, intervention.replacementText)}</p>)
            )
            }
            { otherInterventions &&
            <p>{otherInterventions}</p>
            }

            {progressions.length > 0 &&
                <b>In Meeting Progress:</b>
            }
            {progressions.map(progress => (
                <p key={progress.text}>{replaceText(progress.text, progress.replacementText)}</p>
            )
            )
            }
            <p><b>Recomendation For Moving Forward :</b> {recommendationForMovingForward}</p>
            {nextMeeting &&
                <p><b>Next meeting :</b> {new Date(nextMeeting).toLocaleString("en-US", {timeStyle: "full", dateStyle: "full"})}</p>
            }
            <pre style={{ width: 504, whiteSpace: "pre-wrap", overflowWrap: "break-word", fontSize: 16, fontWeight: 400, fontFamily: 'sans-serif' }}>{frequencyChangeExplanation}</pre>

        </div >
    )

}

export default observer(NoteContent)