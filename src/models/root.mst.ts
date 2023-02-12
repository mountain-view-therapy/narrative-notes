import { Instance, types } from 'mobx-state-tree';
import MeetingInformationModel from './MeetingInformationModel';

const RootModel = types
  .model('RootModel', {
    meetingInformation: MeetingInformationModel,
    hydrated: false,
  }).actions((self) => {
    return {
    }
  })

export default RootModel;

export interface IRoot extends Instance<typeof RootModel> { }
