import * as React from 'react';
import Board from './Board';

const App: React.StatelessComponent = () => (
	<div className="App">
		<Board
			width={4}
			height={4}
		/>
	</div>
);

export default App;
