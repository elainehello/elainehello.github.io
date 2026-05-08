interface Props {
  label: string;
}

function DesktopIcon({ label }: Props) {
  return (
    <button
      style={{
        width: 80,
        background: 'transparent',
        border: 'none',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        cursor: 'pointer'
      }}
    >
      <span style={{ fontSize: 32 }}>🖥️</span>

      <span>{label}</span>
    </button>
  );
}

export default DesktopIcon;
