import { useWindowManager } from '../../app/hooks/useWindowManager';
import { CLOSE_WINDOW, FOCUS_WINDOW } from './windowActions';
import WindowFrame from '../../app/components/window/WindowFrame';
import ErrorBoundary from '../../app/components/ErrorBoundary';
import { type WindowInstance } from './windowTypes';

interface Props {
  window: WindowInstance;
  isActive: boolean;
}

function WindowContainer({ window, isActive }: Props) {
  const { dispatch } = useWindowManager();

  const handleClose = () => {
    dispatch({ type: CLOSE_WINDOW, payload: window.id });
  };

  const handleFocus = () => {
    dispatch({ type: FOCUS_WINDOW, payload: window.id });
  };

  return (
    <WindowFrame
      title={window.title}
      position={window.position}
      size={window.size}
      zIndex={window.zIndex}
      isActive={isActive}
      onClose={handleClose}
      onFocus={handleFocus}
    >
      <ErrorBoundary>
        <window.component />
      </ErrorBoundary>
    </WindowFrame>
  );
}

export default WindowContainer;