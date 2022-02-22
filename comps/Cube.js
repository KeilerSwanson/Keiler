import styles from '../styles/Cube.module.scss'

export default function Cube() {

	return (
		<div className={styles.cube}>
			<div className={styles.side} />
			<div className={styles.side} />
			<div className={styles.side} />
			<div className={styles.side} />
			<div className={styles.side} />
			<div className={styles.side} />
		</div>
	)
}