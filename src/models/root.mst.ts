import { Instance, types } from 'mobx-state-tree';
import MeetingInformationModel from './MeetingInformationModel';

const RootModel = types
  .model('RootModel', {
    meetingInformation: MeetingInformationModel,
    currentTab: types.string,
    hydrated: false,
  }).actions((self) => {
    return {
      setCurrentTab(tab: string): void {
        self.currentTab = tab
      }
    }
  })

export default RootModel;

export interface IRoot extends Instance<typeof RootModel> { }
