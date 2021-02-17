import React from 'react';
import { BoldExtension } from 'remirror/extensions';
import { Remirror, useRemirror } from '@remirror/react';
import './App.css';

function App() {
  const { manager, onChange, state } = useRemirror({
    extensions: () => [new BoldExtension()],
    content: '<p><strong>I am strong.</strong> and <em>I am emphasized</em></p>',
    stringHandler: 'html',
  });

  return (
    <div className="App">
      <Remirror manager={manager} onChange={onChange} state={state} />
    </div>
  );
}

export default App;
