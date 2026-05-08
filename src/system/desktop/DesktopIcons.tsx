import DesktopIcon from '../../app/components/icons/DesktopIcon';

function DesktopIcons() {
  return (
    <div
      style={{
        padding: '1rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem'
      }}
    >
      <DesktopIcon appId="about" />
      <DesktopIcon appId="projects" />
      <DesktopIcon appId="terminal" />
      <DesktopIcon appId="explorer" />
    </div>
  );
}

export default DesktopIcons;
