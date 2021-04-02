import React from 'react';
import '../styles/App.scss';
import Game from './Game';

/**
 * Main application
 * Master that routes users to name selection screen, and game screen
 * Currently displays game container.
 */
const App: React.FC = () => {
  return (
    <div className="App">
      <Game />
    </div>
  );
}

export default App;
