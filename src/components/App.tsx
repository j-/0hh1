import * as React from 'react';
import Board from '../containers/Board';
import Filled from '../containers/Filled';
import Warnings from '../containers/Warnings';

const App: React.StatelessComponent = () => (
	<div className="App">
		<Board />

		<br />
		<Filled />

		<br />
		<Warnings />
	</div>
);

export default App;
