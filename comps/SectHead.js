import styles from '../styles/SectHead.module.scss'

export default function SectHead({ title }) {
	
	return (
		<h2 className={styles.heading}>{title}</h2>
	)
}