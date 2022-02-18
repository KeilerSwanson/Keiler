import { RiGithubFill, RiLinkedinFill  } from 'react-icons/ri'
import styles from '../styles/Nav.module.scss'
import effects from '../styles/Effects.module.scss'

export default function Nav({ menuOpen, toggleMenu, scrollTo, navRef, aboutRef, projectsRef, contactRef }) {
	const navClass = menuOpen ? styles.navClear : styles.nav
	const menuBtnClass = menuOpen ? styles.menuBtnCrossed : styles.menuBtn

	console.log(aboutRef)

	return (
		<nav 
			ref={navRef} 
			className={navClass}
		>
			<menu className={styles.menu}>
				<li
					className={styles.menuItem}
					onClick={() => scrollTo(aboutRef)}
				>
					About
				</li>
				<li
					className={styles.menuItem}
					onClick={() => scrollTo(projectsRef)}
				>
					Projects
				</li>
				<li
					className={styles.menuItem}
					onClick={() => scrollTo(contactRef)}
				>
					Contact
				</li>
				<li className={styles.links}>
					<a 
						className={`${styles.link} ${effects.link}`} 
						href='https://github.com/KeilerSwanson' 
						target='_blank' 
						rel='noreferrer'
					>
						<RiGithubFill />
					</a>
					<a 
						className={`${styles.link} ${effects.link}`} 
						href='https://linkedin.com/in/keiler-swanson/' 
						target='_blank' 
						rel='noreferrer'
					>
						<RiLinkedinFill />
					</a>
				</li>
			</menu>
			<button 
				className={menuBtnClass}
				onClick={toggleMenu}
			>
				<span className={styles.bar1} />
				<span className={styles.bar2} />
			</button>
		</nav>
	)
}