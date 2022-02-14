import Button from './Button'
import styles from '../styles/Landing.module.scss'

export default function Landing() {

	return (
		<section className={styles.landing}>
			<header className={styles.header}>
				<h1 className={styles.heading}>
					I'm Keiler,
					<br />
					I build stuff with bits.
				</h1>
				<p className={styles.text}>I’m a self taught front-end developer with a love for problem solving and nineties hip hop. My current focus is developing unique and performant user experiences for the web.</p>
				<Button 
					text='Check Out My Work'
					// handler={}
				/>
			</header>
		</section>
	)
}