import { Instance, types } from "mobx-state-tree"
import {
    PossibleAnxietySymptom,
    PossibleDepressionSymptom,
    PossiblePTSDSymptom,
} from "../state/constants"

const SymptomsModel = types.model('SymptomsModel', {
    anxietySymptoms: types.array(types.string),
    depressionSymptoms: types.array(types.string),
    ptsdSymptoms: types.array(types.string),
    otherSymptoms: types.array(types.string),
    groupSymptomsTogether: types.boolean,
}).actions((self) => {
    return {
        toggleAnxietySymptom(symptom: PossibleAnxietySymptom): void {
            if (self.anxietySymptoms.includes(symptom)) {
                self.anxietySymptoms.replace(self.anxietySymptoms.filter(s => s !== symptom))
            } else {
                self.anxietySymptoms.push(symptom)
            }
        },
        toggleDepressionSymptom(symptom: PossibleDepressionSymptom): void {
            if (self.depressionSymptoms.includes(symptom)) {
                self.depressionSymptoms.replace(self.depressionSymptoms.filter(s => s !== symptom))
            } else {
                self.depressionSymptoms.push(symptom)
            }
        },
        togglePTSDSymptom(symptom: PossiblePTSDSymptom): void {
            if (self.ptsdSymptoms.includes(symptom)) {
                self.ptsdSymptoms.replace(self.ptsdSymptoms.filter(s => s !== symptom))
            } else {
                self.ptsdSymptoms.push(symptom)
            }
        },
        setOtherSymptom(index: number, symptoms: string): void {
            self.otherSymptoms[index] = symptoms
        },
        addOtherSymptom(): void {
            self.otherSymptoms.push("")
        },
        removeOtherSymptom(index: number): void {
            self.otherSymptoms.replace(self.otherSymptoms.filter((os, i) => i !== index))
        },
        setGroupSystemsTogether(groupSymptomsTogether: boolean): void {
            self.groupSymptomsTogether = groupSymptomsTogether
        },
    }
})

export default SymptomsModel;


export interface Symptoms extends Instance<typeof SymptomsModel> { }
