import { useEffect, useState, memo } from 'react'
import { setupObserver } from '../lib/observer'
import Image from 'next/image'
import SectHead from './SectHead'
import sections from '../styles/Sections.module.scss'
import styles from '../styles/About.module.scss'
import effects from '../styles/Effects.module.scss'

function About({ sectRef }) {
	const [faded, setFaded] = useState(false)
	const fadeClass = faded ? effects.fadeUp : effects.preFadeUp

	useEffect(() => {
		setupObserver(sectRef.current, setFaded)
	}, [sectRef])

	return (
		<section ref={sectRef} className={`${styles.aboutSect} ${sections.main} ${fadeClass}`}>
			<SectHead num='01.' title='About' />
			<div className={styles.about}>
				<div className={`${styles.avatar} ${effects.avatar}`}>
					<Image 
						src='/assets/avatar-color-min.jpeg' 
						width={500} 
						height={500} 
						placeholder='blur' 
						blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mOUUtP9DwACPQFuAJ/WoQAAAABJRU5ErkJggg=='
						alt='Image of Keiler Swanson'
					/>
				</div>
				<div className={styles.textWrap}>
					<p className={styles.text}>
						I first started programming after an abrupt end to my amateur athletic career. Not quite sure what to do with myself, I took a handful of courses online, one of which was Harvard’s CS50: Intro to Computer Science. I was immediately hooked. That seemingly anything could emerge from a well-ordered collection of zeroes and ones felt, and still feels, like magic. 
					</p>
					<p className={styles.text}>
						In the time since I’ve focused primarily on the front-end, learning technologies from basic HTML and CSS to more advanced frameworks like NextJS. I'm always picking up new tools and methods but I'm currently most comfortable with: 
					</p>
					<ul className={styles.stack}>
						<li className={styles.tool}>HTML</li>
						<li className={styles.tool}>CSS / SCSS</li>
						<li className={styles.tool}>JavaScript</li>
						<li className={styles.tool}>ReactJS</li>
						<li className={styles.tool}>NextJS</li>
						<li className={styles.tool}>Git</li>
						<li className={styles.tool}>Netlify</li>
					</ul>
				</div>
			</div>
		</section>
	)
}

export default memo(About)