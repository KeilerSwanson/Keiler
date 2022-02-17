import Image from 'next/image'
import SectHead from './SectHead'
import { BsGithub, BsFillArrowUpCircleFill } from 'react-icons/bs'
import sections from '../styles/Sections.module.scss'
import styles from '../styles/Projects.module.scss'

export default function Projects() {
	return (
		<section className={`${styles.projects} ${sections.main}`}>
			<SectHead
				num='02.'
				title='Projects'
			/>
			<div className={styles.content}>
				<li className={styles.project}>
					{/* <span className={styles.image}>
						<Image 
							src='/images/rhetoric.gif'
							width={1200}
							height={600}
							alt='Screenshot of Rhetoric'
						/>
					</span> */}
					<video 
						className={styles.video}
						autoPlay
						loop 
						controls 
						muted
						poster='/assets/rhetoric-poster.png'
					>
						<source src='/assets/rhetoric-demo.webm' type='video/webm' />
						<source src='/assets/rhetoric-demo.mp4' type='video/mp4' />
					</video>
					<div className={styles.info}>
						<h3 className={styles.title}>Rhetoric</h3>
						<p className={styles.description}>
							A tool for comparing news coverage across the media landscape. Search for articles by topic, select from more than 50 media sources, and bookmark articles for later.
						</p>
						<ul className={styles.stack}>
							<li className={styles.tool}>NextJS</li>
							<li className={styles.tool}>SCSS Modules</li>
							<li className={styles.tool}>Newscatcher</li>
						</ul>
					</div>
				</li>
			</div>
	</section>
	)
}