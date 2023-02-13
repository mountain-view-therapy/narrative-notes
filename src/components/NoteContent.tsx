import dayjs from "dayjs"
import { observer } from "mobx-react-lite"
import { getState } from "../state/provider"

const NoteContent = () => {

    const { meetingInformation: {
        meetingLogistics: {
            clientInitials,
            telehealthPlatform,
            telehealthAppropriate,
            telehealthConsent,
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
        progressions,
        identifiedProblem,
    } } = getState()

    const replaceText = (text: string, replacementText: string) => {
        return text.replace('[PROBLEM]', identifiedProblem).replace('[CLIENT]', clientInitials).replace('[REPLACEMENT]', replacementText)
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
                <b>Person-served physical location during the meeting: </b>
                {physicalLocation}
                {physicalLocation === 'Other (Loc Code 02)' &&
                    <p>{otherAddress}</p>
                }
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
                        {anxietySymptoms.length && groupSymptomsTogether ? (
                            <li>Anxiety Symptoms<ul>
                                {
                                    anxietySymptoms.map(symptom => <li key={symptom}>{symptom}</li>)
                                }
                            </ul></li>
                        )
                            :
                            anxietySymptoms.map(symptom => <li>{symptom}</li>)
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
                    {selfCareSymptoms.map(s => <span> {clientInitials} {s}. </span>)}
                    {otherSelfCareSymptoms}
                </p>
            }
            {clientInitials && occupationAffected &&
                <p>
                    These symptoms affect {clientInitials}'s occupational functioning.
                    {occupationSymptoms.map(s => <span> {clientInitials} {s}. </span>)}
                    {otherOccupationSymptoms}
                </p>
            }
            {clientInitials && academicAffected &&
                <p>
                    These symptoms affect {clientInitials}'s academic functioning.
                    {academicSymptoms.map(s => <span> {clientInitials} {s}. </span>)}
                    {otherAcademicSymptoms}
                </p>
            }
            {clientInitials && interpersonalAffected &&
                <p>
                    These symptoms affect {clientInitials}'s interpersonal functioning.
                    {interpersonalSymptoms.map(s => <span> {clientInitials} {s}. </span>)}
                    {otherInterpersonalSymptoms}
                </p>
            }
            {clientInitials && communitylAffected &&
                <p>
                    These symptoms affect {clientInitials}'s community functioning.
                    {communitySymptoms.map(s => <span> {clientInitials} {s}. </span>)}
                    {otherCommunitySymptoms}
                </p>
            }
            {interventions.length > 0 &&
                <b>In Meeting Interventions:</b>
            }
            {interventions.map(intervention => (
                <p>{replaceText(intervention.text, intervention.replacementText)}</p>
            )
            )
            }

            {progressions.length > 0 &&
                <b>In Meeting Progress:</b>
            }
            {progressions.map(progress => (
                <p>{replaceText(progress.text, progress.replacementText)}</p>
            )
            )
            }
        </div >
    )

}

export default observer(NoteContent)