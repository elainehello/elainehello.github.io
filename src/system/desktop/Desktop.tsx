import '../../styles/desktop.css';

import DesktopIcons from './DesktopIcons';

import WindowManager from '../window-manager/WindowManager';

function Desktop() {
  return (
    <main className="desktop-shell">
      <DesktopIcons />

      <WindowManager />
    </main>
  );
}

export default Desktop;
