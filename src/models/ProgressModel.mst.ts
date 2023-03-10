import { Instance, types } from "mobx-state-tree"

const ProgressModel = types.model('ProgressModel', {
    possibleProgressIndex: types.number,
    text: types.string,
    replacementText: types.string,
    checked: false,
})

export default ProgressModel;
export interface Progress extends Instance<typeof ProgressModel> { }


