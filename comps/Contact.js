import { useState, useEffect } from 'react'
import { setupObserver } from '../lib/observer'
import SectHead from './SectHead'
import Button from './Button'
import sections from '../styles/Sections.module.scss'
import effects from '../styles/Effects.module.scss'
import styles from '../styles/Contact.module.scss'

export default function Contact({ sectRef }) {
	const [faded, setFaded] = useState(false)
	const fadeClass = faded ? effects.fadeUp : effects.preFadeUp

	useEffect(() => {
		setupObserver(sectRef.current, setFaded)
	}, [sectRef])

	return (
		<div 
			ref={sectRef}
			className={`${sections.main} ${styles.contact} ${fadeClass}`}
		>
			<SectHead
				num='03.'
				title='Contact'
			/>
			<form 
				className={styles.form}
				data-netlify-recaptcha="true"
				netlify-honeypot="bot-field" 
				data-netlify='true' 
				name='contact' 
				id='form'	
			>
				<input 
					type="hidden" 
					name="form-name" 
					value="contact"
				/>
				<label htmlFor='name'>Name</label>
				<input 
					name='name' 
					type='text' 
					placeholder='Name' 
					className={styles.name}
					required={true}
					id='name'
				/>
				<label htmlFor='email'>Email</label>
				<input 
					name='email' 
					type='email' 
					placeholder='Email' 
					className={styles.email}
					required={true}
					id='email'
				/>
				<label htmlFor='phone'>Phone</label>
				<input
					name='phone'
					type='tel'
					placeholder='Phone'
					className={styles.phone}
					required={false}
					id='phone'
				/>
				<label htmlFor='message'>Message</label>
				<textarea 
					name='message' 
					placeholder='Message' 
					className={styles.message}
					required={true}
					id='message'
				/>
				<div data-netlify-recaptcha="true"></div>
				<Button 
					text='Get In Touch'
					// handler={submitForm}
					// loading={loading}
				/>
				{/* <h4 className={successClass}>Your message was sent successfully!</h4>
				<h4 className={errorClass}>Woops, there was an error.</h4> */}
			</form>
		</div>
	)
}