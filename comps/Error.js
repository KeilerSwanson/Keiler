import Link from 'next/link'
import styles from '../styles/Error.module.scss'
import button from '../styles/Button.module.scss'
import effects from '../styles/Effects.module.scss'

export default function Error({ code, message }) {

	return (
		<main className={styles.errorPage}>
			<header className={styles.error}>
				<h1 className={styles.code}>{code}</h1>
				<p className={styles.message}>{message}</p>
				<Link href='/' >
					<a className={`${button.button} ${effects.button}`}>Home</a>
				</Link>
			</header>
		</main>
	)
}