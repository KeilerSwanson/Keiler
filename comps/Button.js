import effects from '../styles/Effects.module.scss'
import styles from '../styles/Button.module.scss'

export default function Button({ text, handler, effectClass }) {

	return (
		<button className={`${styles.button} ${effects.button} ${effectClass}`} onClick={handler}>
			{text}
		</button>
	)
}