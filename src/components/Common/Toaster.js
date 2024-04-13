import { Position, Toaster, Intent } from '@blueprintjs/core';
import mixpanel from 'mixpanel-browser';
mixpanel.init("YOUR_MIXPANEL_PROJECT_TOKEN");

export const AppToaster = Toaster.create({
  icon: 'info-sign',
  intent: Intent.SUCCESS,
});

export function showSuccessNotification(message) {
  AppToaster.show({
    message: message,
    icon: 'info-sign',
    intent: Intent.SUCCESS,
  });
  mixpanel.track("Success Notification Shown", {
    "Type": "Info",
    "Message": message,
  });
}