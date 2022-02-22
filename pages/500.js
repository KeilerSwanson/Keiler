import Error from '../comps/Error'
import styles from '../styles/Error.module.scss'

export default function Custom500() {
	return (
		<main className={styles.errorPage}>
			<Error message="Sorry, it looks like there was a server side error." />
		</main>
	)
}