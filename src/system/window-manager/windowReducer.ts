import { OPEN_WINDOW, CLOSE_WINDOW, FOCUS_WINDOW } from './windowActions';
import { type WindowState, type WindowInstance } from './windowTypes';

export function windowReducer(state: WindowState, action: any) {
    switch(action.type) {
        case OPEN_WINDOW:
            return {
                ...state,
                windows: [...state.windows, action.payload as WindowInstance]
            };

        case CLOSE_WINDOW:
            return {
                ...state,
                windows: state.windows.filter(
                    (window: WindowInstance) => window.id !== action.payload
                )
            };
        
        case FOCUS_WINDOW:
            return {
                ...state,
                activeWindowId: action.payload
            };
        
        default:
            return state;
    }
}




