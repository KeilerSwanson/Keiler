// import Image from 'next/image'
import SectHead from './SectHead'
// import { FaGithub, FaArrowUp, FaExternalLinkAlt } from 'react-icons/fa'
import { RiGithubFill, RiExternalLinkLine  } from 'react-icons/ri'
import sections from '../styles/Sections.module.scss'
import styles from '../styles/Projects.module.scss'
import effects from '../styles/Effects.module.scss'

export default function Projects({ sectRef }) {
	return (
		<section 
			ref={sectRef}
			className={`${styles.projects} ${sections.main}`}
		>
			<SectHead
				num='02.'
				title='Projects'
			/>
			<div className={styles.content}>
				<li className={styles.project}>
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
						<span className={styles.titleLinks}>
							<h3 className={styles.title}>Rhetoric</h3>
							<span className={styles.links}>
								<a className={`${styles.link} ${effects.link}`} href='https://github.com/KeilerSwanson/Rhetoric' target='_blank' rel='noreferrer'>
									<RiGithubFill />
								</a>
								<a className={`${styles.link} ${effects.link}`} href='https://happy-sinoussi-d8a6c3.netlify.app/' target='_blank' rel='noreferrer'>
									<RiExternalLinkLine/>
								</a>
							</span>
						</span>
						<p className={styles.description}>
							A tool for comparing news coverage across the media landscape. Search for articles by topic, select from more than 50 media sources, and bookmark articles for later.
						</p>
						<ul className={styles.stack}>
							<li className={styles.tool}>NextJS</li>
							<li className={styles.tool}>SCSS Modules</li>
							<li className={styles.tool}>Newscatcher</li>
						</ul>
						{/* <span className={styles.links}>
							<a className={`${styles.link} ${effects.link}`} href='https://github.com/KeilerSwanson/Rhetoric' target='_blank' rel='noreferrer'>
								<RiGithubFill />
							</a>
							<a className={`${styles.link} ${effects.link}`} href='https://happy-sinoussi-d8a6c3.netlify.app/' target='_blank' rel='noreferrer'>
								<RiExternalLinkLine/>
							</a>
						</span> */}
					</div>
				</li>
			</div>
	</section>
	)
}