import { appRegistry, type AppDefinition } from '../../app/state/appRegistry';
import { OPEN_WINDOW } from '../window-manager/windowActions';

export function launchApplication(appId: string) {
  const app: AppDefinition | undefined = appRegistry[appId];

  if (!app) {
    console.error(`Application ${appId} not found in registry`);
    return null;
  }

  return {
    type: OPEN_WINDOW,
    payload: app,
  };
}

export function getAvailableApplications(): AppDefinition[] {
  return Object.values(appRegistry);
}

export function getApplicationById(appId: string): AppDefinition | undefined {
  return appRegistry[appId];
}