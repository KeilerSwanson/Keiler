import Image from 'next/image'
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa'
import SectHead from './SectHead'
import Button from './Button'
import sections from '../styles/Sections.module.scss'
import styles from '../styles/About.module.scss'

export default function About() {
	return (
		<section className={`${styles.about} ${sections.main}`}>
			<SectHead num='01.' title='About' />
			<div>
				<span className={styles.avatar}>
					<Image 
						src='/images/avatar.jpeg' 
						// layout='fill'
						// objectFit='contain'
						width={500} 
						height={500} 
						placeholder='blur' 
						blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mOUUtP9DwACPQFuAJ/WoQAAAABJRU5ErkJggg=='
						alt='Keiler Swanson'
					/>
				</span>
				<div className={styles.textWrap}>
					<p className={styles.text}>
						I first started programming after an abrupt end to my amateur athletic career. Not quite sure what to do with myself, I took a handful of courses online, one of which was Harvard’s CS50: Introduction to Computer Science. I was immediately hooked. That seemingly anything could emerge from a well-ordered collection of zeroes and ones felt, and still feels, like magic. 
						<br /><br />
						In the time since I’ve focused primarily on the front-end, learning technologies from basic HTML and CSS to more advanced frameworks like NextJS. I'm always picking up new tools and methods but I'm currently most comfortable with: 
					</p>
					<ul className={styles.skillList}>
						<li className={styles.skill}>HTML</li>
						<li className={styles.skill}>CSS / SCSS</li>
						<li className={styles.skill}>JavaScript</li>
						<li className={styles.skill}>ReactJS</li>
						<li className={styles.skill}>NextJS</li>
						<li className={styles.skill}>Git</li>
						<li className={styles.skill}>Netlify</li>
					</ul>
				</div>
			</div>
		</section>
	)
}