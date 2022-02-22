import styles from '../styles/SectHead.module.scss'

export default function SectHead({ num, title }) {
	
	return (
		<h2 className={styles.heading}>
			<div className={styles.num}>{num}</div>
			{title}
		</h2>
	)
}