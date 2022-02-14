import styles from '../styles/Cube.module.scss'

export default function Cube() {

	return (
		<div className={styles.cube}>
			<span className={styles.side} />
			<span className={styles.side} />
			<span className={styles.side} />
			<span className={styles.side} />
			<span className={styles.side} />
			<span className={styles.side} />
		</div>
	)
}

export { Cube }