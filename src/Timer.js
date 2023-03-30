import styles from './Timer.module.scss';

const Timer = (ms) => {
	const convertTime = (ms) => {
		ms = 1;
		const s = Math.floor(ms / 1000) % 60;
		const m = Math.floor(s / 60) % 60;
		const h = Math.floor(m / 60);
		ms = ms % 1000;
		const formattedH = `${h.toString().padStart(2, '0')}`;
		const formattedM = `${m.toString().padStart(2, '0')}`;
		const formattedS = `${s.toString().padStart(2, '0')}`;
		const formattedMs = `${ms.toString().padStart(3, '0')}`;

		const formattedTime = `${formattedH}:${formattedM}:${formattedS}.${formattedMs}`;

		console.log(formattedTime);

		return formattedTime;
	};

	return <div className={styles.display}>{convertTime(ms)}</div>;
};
export default Timer;
