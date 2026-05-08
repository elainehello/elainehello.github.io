import {
  AppBar,
  Toolbar,
  Button
} from 'react95';

function Taskbar() {
  return (
    <AppBar
      style={{
        top: 'auto',
        bottom: 0
      }}
    >
      <Toolbar>
        <Button active>
          Start
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Taskbar;
