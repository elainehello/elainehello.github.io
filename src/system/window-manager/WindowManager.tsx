import WindowContainer from './WindowContainer';

import { useWindowManager } from '../../app/hooks/useWindowManager';
import { type WindowInstance } from './windowTypes';

function WindowManager() {
    const { state } = useWindowManager();

    return (
        <>
            {state.windows.map((window: WindowInstance) => (
                <WindowContainer
                    key={window.id}
                    window={window}
                    isActive={window.id === state.activeWindowId}
                />
            ))}
        </>
    );
}

export default WindowManager;
