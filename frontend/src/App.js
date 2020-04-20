import React from 'react';
import Game from './tictactoe/Game';
import GridSystem from "./drafts/GridSystem";

import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
		<div className="container-fluid">
			<Game />
			<GridSystem />
		</div>
  );
}

export default App;
