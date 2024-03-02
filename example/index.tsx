import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AbButton, AbModal } from '../.';

// in order to import new components from your storybook, 
// remember to run npm run build
const App = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <div>
      <AbButton text='Abrir modal' onClick={() => setOpen(true)} />
      <AbModal title='Testando' open={open} onClose={() => setOpen(false)}>
        <p>Conteúdo muuuuuuuuito legal</p>
      </AbModal>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
