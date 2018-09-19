import * as React from 'react';
import Board from '../containers/Board';
import Filled from '../containers/Filled';

const App: React.StatelessComponent = () => (
	<div className="App">
		<Board />

		<br />
		<Filled />
	</div>
);

export default App;
