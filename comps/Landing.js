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
					I’m a self taught web developer with a love for problem solving and nineties hip hop. My current focus is developing unique and performant user experiences for the web.
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