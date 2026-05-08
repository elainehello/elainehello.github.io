import { type ReactNode, useReducer } from 'react';

import { WindowContext } from '../../system/window-manager/windowContext';
import { windowReducer } from '../../system/window-manager/windowReducer';
import { type WindowState } from '../../system/window-manager/windowTypes';

const initialState: WindowState = {
    windows: [],
    activeWindowId: null,
    nextZIndex: 1
};

interface Props {
    children: ReactNode;
}

function WindowManagerProvider({ children }: Props) {
    const [state, dispatch ] = useReducer(windowReducer, initialState);

    return (
        <WindowContext.Provider value={{ state, dispatch }}>
            {children}
        </WindowContext.Provider>
    );
}

export default WindowManagerProvider;
