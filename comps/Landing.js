import { useEffect, useState } from 'react'
import Button from './Button'
import styles from '../styles/Landing.module.scss'
import effects from '../styles/Effects.module.scss'

export default function Landing({ projectsRef, scrollTo }) {
	const [faded, setFaded] = useState(false)
	const fadeClass = faded ? effects.fadeLeft : effects.preFadeLeft

	useEffect(() => {
		setFaded(true)
	}, [])

	return (
		<section className={styles.landingSect}>
			<header className={styles.landing}>
				<h1 className={`${styles.heading} ${fadeClass}`}>
					I'm Keiler,
					<br />
					I build stuff with bits.
				</h1>
				<p className={`${styles.text} ${fadeClass}`}>
					I’m a frontend developer who loves problem solving and good whiskey. My current focus is building delightful and performant applications for the web.
				</p>
				<Button 
					text='Check Out My Work'
					handler={() => scrollTo(projectsRef)}
					effectClass={fadeClass}
				/>
			</header>
		</section>
	)
}