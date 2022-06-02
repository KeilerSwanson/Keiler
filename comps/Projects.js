import Image from 'next/image'
import { useState, useEffect, memo } from 'react'
import { setupObserver } from '../lib/observer'
import SectHead from './SectHead'
import { RiGithubFill, RiExternalLinkLine  } from 'react-icons/ri'
import sections from '../styles/Sections.module.scss'
import styles from '../styles/Projects.module.scss'
import effects from '../styles/Effects.module.scss'

function Projects({ sectRef }) {
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
					<figure className={styles.videoWrap}>
						<video 
							className={styles.video}
							autoPlay
							loop 
							muted
							poster='/assets/rhetoric-min.jpeg'
							alt="Video demo of Keiler's Rhetoric app"
						>
							<source src='/assets/rhetoric-demo.mp4' type='video/mp4' />
							<source src='/assets/rhetoric-demo.webm' type='video/webm' />
						</video>
					</figure>
					<div className={styles.info}>
						<div className={styles.titleLinks}>
							<h3 className={styles.title}>Rhetoric</h3>
							<div className={styles.links}>
								<a 
									className={`${styles.link} ${effects.link}`} 
									href='https://github.com/KeilerSwanson/Rhetoric' 
									target='_blank' 
									rel='noreferrer'
									aria-label='Github'
								>
									<RiGithubFill />
								</a>
								<a 
									className={`${styles.link} ${effects.link}`} 
									href='https://happy-sinoussi-d8a6c3.netlify.app/' 
									target='_blank' 
									rel='noreferrer'
									aria-label='Live app'
								>
									<RiExternalLinkLine/>
								</a>
							</div>
						</div>
						<p className={styles.description}>
						A single-page web app for comparing news coverage across the media landscape. Search for articles by topic, select from more than 50 media sources, and bookmark articles for later. 
						</p>
						<ul className={styles.stack}>
							<li className={styles.tool}>Next.js</li>
							<li className={styles.tool}>SCSS</li>
							<li className={styles.tool}>Newscatcher</li>
							<li className={styles.tool}>Netlify</li>
						</ul>
					</div>
				</li>
				<li className={styles.project}>
					<figure className={styles.videoWrap}>
						<video 
							className={styles.video}
							autoPlay
							loop 
							muted
							poster='/assets/swanson-furniture.jpeg'
							alt="Video demo of the Swanson Furniture website"
						>
							<source src='/assets/swanson-furniture-demo.mp4' type='video/mp4' />
							<source src='/assets/swanson-furniture-demo.webm' type='video/webm' />
						</video>
					</figure>
					<div className={styles.info}>
						<div className={styles.titleLinks}>
							<h3 className={styles.title}>Swanson Furniture</h3>
							<div className={styles.links}>
								<a 
									className={`${styles.link} ${effects.link}`} 
									href='https://github.com/KeilerSwanson/swanson-furniture' 
									target='_blank' 
									rel='noreferrer'
									aria-label='Github'
								>
									<RiGithubFill />
								</a>
								<a 
									className={`${styles.link} ${effects.link}`} 
									href='https://swansonfurniture.com' 
									target='_blank' 
									rel='noreferrer'
									aria-label='Live app'
								>
									<RiExternalLinkLine/>
								</a>
							</div>
						</div>
						<p className={styles.description}>
							A multi-page, static website and content management system for a custom furniture business.
						</p>
						<ul className={styles.stack}>
							<li className={styles.tool}>Next.js</li>
							<li className={styles.tool}>SCSS</li>
							<li className={styles.tool}>Sanity CMS</li>
							<li className={styles.tool}>Netlify</li>
						</ul>
					</div>
				</li>
			</div>
		</section>
	)
}

export default memo(Projects)