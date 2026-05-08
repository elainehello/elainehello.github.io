export const SYSTEM_CONSTANTS = {
  TASKBAR_HEIGHT: 40,
  WINDOW_DEFAULT_OFFSET: 30,
  WINDOW_MIN_WIDTH: 200,
  WINDOW_MIN_HEIGHT: 150,
  DESKTOP_PADDING: 16,
  Z_INDEX_BASE: 100,
  Z_INDEX_STEP: 10,
  Z_INDEX_MAX: 1000,
} as const;

export const WINDOW_STATUS = {
  CLOSED: 'closed',
  OPEN: 'open',
  MINIMIZED: 'minimized',
  MAXIMIZED: 'maximized',
} as const;

export type WindowStatus = typeof WINDOW_STATUS[keyof typeof WINDOW_STATUS];