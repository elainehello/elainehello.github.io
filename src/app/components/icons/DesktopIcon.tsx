import { useWindowManager } from '../../hooks/useWindowManager';
import { launchApplication } from '../../../system/services/applicationService';
import { appRegistry, type AppDefinition } from '../../state/appRegistry';

interface Props {
  appId: string;
}

function DesktopIcon({ appId }: Props) {
  const { dispatch } = useWindowManager();

  const app: AppDefinition = appRegistry[appId];

  const handleClick = () => {
    const action = launchApplication(appId);
    if (action) {
      dispatch(action);
    }
  };

  return (
    <button
      onClick={handleClick}
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
      <span style={{ fontSize: 32 }}>{app.icon}</span>

      <span>{app.title}</span>
    </button>
  );
}

export default DesktopIcon;
