import Link from 'next/link'
import styles from '../styles/Error.module.scss'
import button from '../styles/Button.module.scss'
import effects from '../styles/Effects.module.scss'

export default function Error({ message }) {
	return (
		<header className={styles.error}>
			<h1 className={styles.message}>{message}</h1>
			<Link href='/' >
				<a className={`${button.button} ${effects.button}`}>Home</a>
			</Link>
		</header>
	)
}