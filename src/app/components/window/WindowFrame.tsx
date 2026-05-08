import {
  Window,
  WindowHeader,
  WindowContent,
  Button
} from 'react95';

interface Props {
  title: string;
  children: React.ReactNode;
  position: { x: number; y: number };
  size: { width: number; height: number };
  zIndex: number;
  isActive: boolean;
  onClose: () => void;
  onFocus: () => void;
}

function WindowFrame({ title, children, position, size, zIndex, isActive, onClose, onFocus }: Props) {
  return (
    <Window
      style={{
        position: 'absolute',
        top: position.y,
        left: position.x,
        width: size.width,
        height: size.height,
        zIndex: zIndex,
        border: isActive ? '2px solid #000080' : '2px solid #c0c0c0'
      }}
      onClick={onFocus}
    >
      <WindowHeader
        style={{
          display: 'flex',
          justifyContent: 'space-between'
        }}
      >
        <span>{title}</span>

        <Button size="sm" onClick={onClose}>
          X
        </Button>
      </WindowHeader>

      <WindowContent>
        {children}
      </WindowContent>
    </Window>
  );
}

export default WindowFrame;
