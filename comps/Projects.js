import { useState, useEffect } from 'react'
import { setupObserver } from '../lib/observer'
import SectHead from './SectHead'
import { RiGithubFill, RiExternalLinkLine  } from 'react-icons/ri'
import sections from '../styles/Sections.module.scss'
import styles from '../styles/Projects.module.scss'
import effects from '../styles/Effects.module.scss'

export default function Projects({ sectRef }) {
	const [faded, setFaded] = useState(false)
	const fadeClass = faded ? effects.fadeUp : effects.preFadeUp

	useEffect(() => {
		setupObserver(sectRef.current, setFaded)
	}, [sectRef])

	return (
		<section ref={sectRef} className={`${styles.projectsSect} ${sections.main} ${fadeClass}`}>
			<SectHead num='02.' title='Projects' />
			<div className={styles.projects}>
				<li className={styles.project}>
					<video 
						className={styles.video}
						controls
						autoPlay
						loop 
						playsInline
						muted
						poster='/assets/rhetoric-poster.png'
					>
						<source src='/assets/rhetoric-demo.webm' type='video/webm' />
						<source src='/assets/rhetoric-demo.mp4' type='video/mp4' />
					</video>
					<div className={styles.info}>
						<div className={styles.titleLinks}>
							<h3 className={styles.title}>Rhetoric</h3>
							<div className={styles.links}>
								<a 
									className={`${styles.link} ${effects.link}`} 
									href='https://github.com/KeilerSwanson/Rhetoric' 
									target='_blank' 
									rel='noreferrer'
								>
									<RiGithubFill />
								</a>
								<a 
									className={`${styles.link} ${effects.link}`} 
									href='https://happy-sinoussi-d8a6c3.netlify.app/' 
									target='_blank' 
									rel='noreferrer'
								>
									<RiExternalLinkLine/>
								</a>
							</div>
						</div>
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