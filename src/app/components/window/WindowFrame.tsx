import {
  Window,
  WindowHeader,
  WindowContent,
  Button
} from 'react95';

interface Props {
  title: string;
  children: React.ReactNode;
}

function WindowFrame({ title, children }: Props) {
  return (
    <Window
      style={{
        position: 'absolute',
        top: 100,
        left: 200,
        width: 400
      }}
    >
      <WindowHeader
        style={{
          display: 'flex',
          justifyContent: 'space-between'
        }}
      >
        <span>{title}</span>

        <Button size="sm">
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
