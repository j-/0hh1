import * as React from 'react';
import Board from '../containers/Board';
import Complete from '../containers/Complete';
import Warnings from '../containers/Warnings';

const App: React.StatelessComponent = () => (
	<div className="App">
		<Board />

		<br />
		<Complete />

		<br />
		<Warnings />
	</div>
);

export default App;
