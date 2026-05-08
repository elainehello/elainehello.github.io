import { useContext } from 'react';

import { WindowContext } from '../../system/window-manager/windowContext';

export function useWindowManager() {
    return useContext(WindowContext);
}
