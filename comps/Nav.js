import { useState, useEffect } from 'react'
import { RiGithubFill, RiLinkedinFill } from 'react-icons/ri'
import styles from '../styles/Nav.module.scss'
import effects from '../styles/Effects.module.scss'

export default function Nav({ menuOpen, toggleMenu, scrollTo, navRef, aboutRef, projectsRef, contactRef }) {
	const [faded, setFaded] = useState(false)
	const navClass = menuOpen ? styles.navClear : styles.nav
	const menuBtnClass = menuOpen ? styles.menuBtnCrossed : styles.menuBtn
	const fadeClass = faded ? effects.fadeUp : effects.preFadeUp

	useEffect(() => {
		setFaded(true)
	}, [])

	return (
		<nav ref={navRef} className={navClass}>
			<menu className={styles.menu}>
				<li className={`${styles.menuItem} ${effects.menuItem} ${fadeClass}`} onClick={() => scrollTo(aboutRef)}>
					About
				</li>
				<li className={`${styles.menuItem} ${effects.menuItem} ${fadeClass}`} onClick={() => scrollTo(projectsRef)}>
					Projects
				</li>
				<li className={`${styles.menuItem} ${effects.menuItem} ${fadeClass}`} onClick={() => scrollTo(contactRef)}>
					Contact
				</li>
				<li className={styles.links}>
					<a 
						className={`${styles.link} ${effects.link} ${fadeClass}`} 
						href='https://linkedin.com/in/keiler-swanson/' 
						target='_blank' 
						rel='noreferrer'
						aria-label='LinkedIn'
					>
						<RiLinkedinFill />
					</a>
					<a 
						className={`${styles.link} ${effects.link} ${fadeClass}`} 
						href='https://github.com/KeilerSwanson' 
						target='_blank' 
						rel='noreferrer'
						aria-label='Github'
					>
						<RiGithubFill />
					</a>
				</li>
			</menu>
			<div className={`${styles.menuBtnWrap} ${fadeClass}`}>
				<button 
					className={`${menuBtnClass}`} 
					onClick={toggleMenu}
					aria-label='Open menu'
				>
					<div className={styles.bar1} />
					<div className={styles.bar2} />
				</button>
			</div>
		</nav>
	)
}