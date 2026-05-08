import Desktop from '../system/desktop/Desktop';
import Taskbar from '../system/taskbar/Taskbar';
import WindowManagerProvider from './providers/WindowManagerProvider';

function App() {
    return (
        <WindowManagerProvider>
            <Desktop />
            <Taskbar />
        </WindowManagerProvider>
    );
}

export default App;
