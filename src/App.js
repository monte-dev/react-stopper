import styles from './App.module.scss';
import Timer from './Timer';
import { useState, useEffect } from 'react';

const App = () => {
	const [time, setTime] = useState(0);
	const [timer, setTimer] = useState(null);

	const startWatch = () => {
		if (timer === null) {
			// add Date.now to improve accuracy over setInterval manual increments
			const appTime = Date.now() - time;
			setTimer(
				setInterval(() => {
					setTime(Date.now() - appTime);
				}, 1)
			);
		}
	};

	const stopWatch = () => {
		if (timer) {
			clearInterval(timer);
			setTimer(null);
		}
	};

	const resetWatch = () => {
		setTime(0);
		if (timer) {
			stopWatch();
		}
	};

	useEffect(() => {
		return () => {
			if (timer) {
				clearInterval(timer);
			}
		};
	}, [timer]);

	return (
		<div className={styles.stopwatch}>
			<Timer value={time} />
			<div>
				<button
					type="button"
					className={styles.btn}
					onClick={startWatch}
				>
					Start
				</button>
				<button
					type="button"
					className={styles.btn}
					onClick={stopWatch}
				>
					Stop
				</button>
				<button
					type="button"
					className={styles.btn}
					onClick={resetWatch}
				>
					Reset
				</button>
			</div>
		</div>
	);
};

export default App;
