import { OPEN_WINDOW, CLOSE_WINDOW, FOCUS_WINDOW } from './windowActions';
import { type WindowState, type WindowInstance } from './windowTypes';
import { createWindow, normalizeZIndexes } from './createWindow';

export function windowReducer(state: WindowState, action: any) {
    switch(action.type) {
        case OPEN_WINDOW:
            const newWindow = createWindow(action.payload, state.windows, state.nextZIndex);
            const updatedWindows = [...state.windows, newWindow];
            const normalizedWindows = normalizeZIndexes(updatedWindows);

            return {
                ...state,
                windows: normalizedWindows,
                activeWindowId: newWindow.id,
                nextZIndex: Math.max(...normalizedWindows.map(w => w.zIndex)) + 10
            };

        case CLOSE_WINDOW:
            return {
                ...state,
                windows: state.windows.filter(
                    (window: WindowInstance) => window.id !== action.payload
                ),
                activeWindowId: state.activeWindowId === action.payload ? null : state.activeWindowId
            };
        
        case FOCUS_WINDOW:
            const focusedWindows = state.windows.map(window =>
                window.id === action.payload
                    ? { ...window, zIndex: state.nextZIndex }
                    : window
            );
            const refocusedWindows = normalizeZIndexes(focusedWindows);

            return {
                ...state,
                windows: refocusedWindows,
                activeWindowId: action.payload,
                nextZIndex: Math.max(...refocusedWindows.map(w => w.zIndex)) + 10
            };
        
        default:
            return state;
    }
}




