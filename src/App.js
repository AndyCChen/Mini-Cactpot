import Payout from './components/Payout';
import GameBoard from './components/GameBoard';

function App() {
	return (
		<div className="GameArea-Container">
			<header className="Header">
				MINI CACTPOT
			</header>
			<GameBoard />
			<Payout />
		</div>
	);
}

export default App;
