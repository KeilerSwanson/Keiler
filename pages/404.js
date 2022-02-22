import Error from '../comps/Error'
import styles from '../styles/Error.module.scss'

export default function Custom404() {
	return (
		<main className={styles.errorPage}>
			<Error message="Sorry, there's nothing to see here." />
		</main>
	)
}