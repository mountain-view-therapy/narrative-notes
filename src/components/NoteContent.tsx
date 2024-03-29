import { Typography } from "@mui/material"
import { Box } from "@mui/system"
import dayjs from 'dayjs-ext'
import timeZonePlugin from 'dayjs-ext/plugin/timeZone'
import { observer } from "mobx-react-lite"
import { useAppState } from "../state/provider"
import sanitizeHtml from 'sanitize-html';

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
        },
        functioning: {
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
        otherProgressions,
        identifiedProblem,
        recommendationForMovingForward,
        frequencyChangeExplanation,
        nextMeeting,
    } } = useAppState()

    dayjs.extend(timeZonePlugin).locale('cs')

    const replaceText = (text: string, replacementText: string) => {
        return text.replace('[PROBLEM]', identifiedProblem).replace('[CLIENT]', clientInitials).replace('[REPLACEMENT]', replacementText)
    }

    const replaceClientsIntitals = (text: string) => {
        return text.replace('[CLIENT]', clientInitials)
    }

    if (endTime === startTime) {
        return (
            <Box>
                <Typography>Please fill out all necessary fields</Typography>

                <Typography>Missing Fields</Typography>
                <ul>
                    <li>Start and End Time in <a href="/narrative-notes/#/meeting-logistics">Meeting Logistics tab</a></li>
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

            <div><b>Mental Status Exam</b>
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
                </ul>

                {(noRisk || dangerToOthers || dangerToSelf || otherRisk) &&
                    <>
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
                    </>
                }
            </div>
            {problems &&
                <div>
                    <div>
                        <b>Issues discussed in this meeting include: </b>
                    </div>
                    <p dangerouslySetInnerHTML={{ __html: sanitizeHtml(problems.replace(/ /g, '&ensp;').replace(/\n/g, '<br />')) }} />
                </div>
            }
            {(anxietySymptoms.length || depressionSymptoms.length || ptsdSymptoms.length || otherSymptoms.length > 1 || otherSymptoms[0].length > 0) &&
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
                        {(otherSymptoms.length > 1 || otherSymptoms[0].length > 0) &&
                            ((otherSymptoms && groupSymptomsTogether) ? (
                                <li>Other Symptoms<ul>
                                    {
                                        otherSymptoms.map(symptom => <li key={symptom}>{symptom}</li>)
                                    }
                                </ul></li>
                            )
                                :
                                otherSymptoms.map(symptom => <li key={symptom}>{symptom}</li>)

                            )}
                    </ul>
                </div>
            }
            {selfCareAffected &&
                <p>
                    These symptoms affect {clientInitials || <b>Client's Initials</b>}'s self care.
                    {selfCareSymptoms.map(s => <span key={s}> {replaceClientsIntitals(s)}. </span>)}
                    <span> {otherSelfCareSymptoms} </span>
                </p>
            }
            {occupationAffected &&
                <p>
                    These symptoms affect {clientInitials || <b>Client's Initials</b>}'s occupational functioning.
                    {occupationSymptoms.map(s => <span key={s}> {replaceClientsIntitals(s)}. </span>)}
                    <span> {otherOccupationSymptoms} </span>
                </p>
            }
            {academicAffected &&
                <p>
                    These symptoms affect {clientInitials || <b>Client's Initials</b>}'s academic functioning.
                    {academicSymptoms.map(s => <span key={s}> {replaceClientsIntitals(s)}. </span>)}
                    <span> {otherAcademicSymptoms} </span>
                </p>
            }
            {interpersonalAffected &&
                <p>
                    These symptoms affect {clientInitials || <b>Client's Initials</b>}'s interpersonal functioning.
                    {interpersonalSymptoms.map(s => <span key={s}> {replaceClientsIntitals(s)}. </span>)}
                    <span> {otherInterpersonalSymptoms} </span>
                </p>
            }
            {communitylAffected &&
                <p>
                    These symptoms affect {clientInitials || <b>Client's Initials</b>}'s community functioning.
                    {communitySymptoms.map(s => <span key={s}> {replaceClientsIntitals(s)}. </span>)}
                    <span> {otherCommunitySymptoms} </span>
                </p>
            }
            {(interventions.length > 0 || otherInterventions.length > 0) &&
                <b>In Meeting Interventions:</b>
            }
            {interventions.filter(i => i.checked).map(intervention => (
                <p key={intervention.text}>{replaceText(intervention.text, intervention.replacementText)}</p>)
            )
            }

            {otherInterventions.map(intervention => (
                <p key={intervention}>{intervention}</p>)
            )
            }

            {(progressions.length > 0 || otherProgressions.length > 1 || otherProgressions[0].length > 0) &&
                <b>Progress Towards Goals:</b>
            }
            {progressions.filter(i => i.checked).map(progress => (
                <p key={progress.text}>{replaceText(progress.text, progress.replacementText)}</p>
            ))}
            {otherProgressions.map(progress => (
                <p key={progress}>{progress}</p>
            ))}
            <p><b>Recommendation For Moving Forward :</b> {recommendationForMovingForward}</p>
            {nextMeeting &&
                <p><b>Next meeting :</b> {new Date(nextMeeting).toLocaleString("en-US", { timeStyle: "full", dateStyle: "full" })}</p>
            }
            <p dangerouslySetInnerHTML={{ __html: sanitizeHtml(frequencyChangeExplanation.replace(/ /g, '&ensp;').replace(/\n/g, '<br />')) }} />
        </div >
    )

}

export default observer(NoteContent)