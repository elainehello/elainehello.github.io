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
      <DesktopIcon label="About Me" />
      <DesktopIcon label="Projects" />
      <DesktopIcon label="Terminal" />
    </div>
  );
}

export default DesktopIcons;
