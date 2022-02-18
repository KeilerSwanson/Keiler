import { RiGithubFill, RiLinkedinFill  } from 'react-icons/ri'
import styles from '../styles/Nav.module.scss'

export default function Nav({ menuOpen, toggleMenu, scrollToAbout }) {
	const menuClass = menuOpen ? styles.menuOpen : styles.menu
	const menuBtnClass = menuOpen ? styles.menuBtnCrossed : styles.menuBtn

	return (
		<nav className={styles.nav}>
			<menu className={menuClass}>
				<li
					className={styles.menuItem}
					onClick={scrollToAbout}
				>
					About
				</li>
				<li
					className={styles.menuItem}
					// onClick={}
				>
					Projects
				</li>
				<li
					className={styles.menuItem}
					// onClick={}
				>
					Contact
				</li>
				<li className={styles.links}>
					<a className={styles.link} href='https://github.com/KeilerSwanson' target='_blank' rel='noreferrer'>
						<RiGithubFill />
					</a>
					<a className={styles.link} href='https://linkedin.com/in/keiler-swanson/' target='_blank' rel='noreferrer'>
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