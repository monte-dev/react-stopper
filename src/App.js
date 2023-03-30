import styles from './App.module.scss';
import Timer from './Timer';
import { useState } from 'react';

const App = () => {
	const [time, setTime] = useState(0);
	const [interval, setIntervalId] = useState(null);
	let ms = 0;

	const startTime = () => {
		ms += 1;
		setInterval(() => {}, 1);
	};

	return (
		<div className={styles.stopwatch}>
			<Timer value={ms} />
			<div>
				<button type="button" className="btn" onClick={startTime}>
					Start
				</button>
				<button type="button" className="btn">
					Stop
				</button>
				<button
					type="button"
					className="btn"
					onClick={clearInterval(startTime)}
				>
					Reset
				</button>
			</div>
		</div>
	);
};

export default App;
