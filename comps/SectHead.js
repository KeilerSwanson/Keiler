import styles from '../styles/SectHead.module.scss'

export default function SectHead({ num, title }) {
	return (
		<h2 className={styles.heading}>
			<span className={styles.num}>{num}</span>
			{title}
		</h2>
	)
}