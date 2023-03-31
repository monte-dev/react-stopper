import styles from './Timer.module.scss';

const Timer = ({ value }) => {
	const convertTime = (ms) => {
		const s = Math.floor(ms / 1000) % 60;
		const m = Math.floor(s / 60) % 60;
		const h = Math.floor(m / 60);
		ms = ms % 1000;
		const formattedH = `${h.toString().padStart(2, '0')}`;
		const formattedM = `${m.toString().padStart(2, '0')}`;
		const formattedS = `${s.toString().padStart(2, '0')}`;
		const formattedMs = `${ms.toString().padStart(1, '0')}`;

		const formattedTime = `${formattedH}:${formattedM}:${formattedS}.${formattedMs}`;

		console.log(formattedTime);

		return formattedTime;
	};

	return <h1 className={styles.display}>{convertTime(value)}</h1>;
};
export default Timer;
