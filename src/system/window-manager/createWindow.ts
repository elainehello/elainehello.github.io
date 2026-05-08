import { type AppDefinition } from '../../app/state/appRegistry';
import { SYSTEM_CONSTANTS, WINDOW_STATUS } from '../theme/constants';
import { type WindowInstance } from './windowTypes';

export function createWindow(
  app: AppDefinition,
  existingWindows: WindowInstance[],
  nextZIndex: number
): WindowInstance {
  const offset = existingWindows.length * SYSTEM_CONSTANTS.WINDOW_DEFAULT_OFFSET;

  return {
    id: `${app.id}-${Date.now()}`, // Generate unique ID
    appId: app.id,
    title: app.title,
    component: app.component,
    isOpen: true,
    status: WINDOW_STATUS.OPEN,
    zIndex: nextZIndex,
    position: {
      x: 100 + offset,
      y: 100 + offset,
    },
    size: {
      width: app.defaultWidth,
      height: app.defaultHeight,
    },
  };
}

export function clampWindowPosition(
  position: { x: number; y: number },
  size: { width: number; height: number }
): { x: number; y: number } {
  const maxX = window.innerWidth - size.width - SYSTEM_CONSTANTS.DESKTOP_PADDING;
  const maxY = window.innerHeight - size.height - SYSTEM_CONSTANTS.TASKBAR_HEIGHT - SYSTEM_CONSTANTS.DESKTOP_PADDING;

  return {
    x: Math.max(SYSTEM_CONSTANTS.DESKTOP_PADDING, Math.min(position.x, maxX)),
    y: Math.max(SYSTEM_CONSTANTS.DESKTOP_PADDING, Math.min(position.y, maxY)),
  };
}

export function normalizeZIndexes(windows: WindowInstance[]): WindowInstance[] {
  return windows
    .sort((a, b) => a.zIndex - b.zIndex)
    .map((window, index) => ({
      ...window,
      zIndex: SYSTEM_CONSTANTS.Z_INDEX_BASE + index * SYSTEM_CONSTANTS.Z_INDEX_STEP,
    }));
}