import Payout from './components/Payout';
import GameBoard from './components/GameBoard';
import { BiLinkExternal } from 'react-icons/bi';

function App() {
	return (
		<div>
			<a className='github-button' href='https://github.com/AndyCChen/Mini-Cactpot' target='noreferrer'>
				GitHub
				<BiLinkExternal size={20}/>
			</a>
			<div className="GameArea-Container">
				<header className="Header">
					MINI CACTPOT
				</header>
				<GameBoard />
				<Payout />
			</div>
		</div>
	);
}

export default App;