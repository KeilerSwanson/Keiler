import effects from '../styles/Effects.module.scss'
import styles from '../styles/Button.module.scss'

export default function Button({ text, handler, fadeClass }) {
	return (
		<button 
			className={`${styles.button} ${effects.button} ${fadeClass}`}
			onClick={handler}	
		>
			{text}
		</button>
	)
}