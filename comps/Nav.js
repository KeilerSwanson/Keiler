import styles from '../styles/Nav.module.scss'

export default function Nav({ menuOpen, toggleMenu }) {
	const menuClass = menuOpen ? styles.menuOpen : styles.menu
	const menuBtnClass = menuOpen ? styles.menuBtnCrossed : styles.menuBtn

	return (
		<nav className={styles.nav}>
			<menu className={menuClass}>
				<li
					className={styles.menuItem}
					// onClick={}
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
			</menu>
			<button 
				className={menuBtnClass}
				onClick={toggleMenu}
			>
				<span className={styles.barOne} />
				<span className={styles.barTwo} />
			</button>
		</nav>
	)
}