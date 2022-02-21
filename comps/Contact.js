import { useState, useEffect, useRef } from 'react'
import { setupObserver } from '../lib/observer'
import SectHead from './SectHead'
import Button from './Button'
import sections from '../styles/Sections.module.scss'
import effects from '../styles/Effects.module.scss'
import styles from '../styles/Contact.module.scss'

export default function Contact({ sectRef }) {
	const refs = {
		form: useRef(),
		name: useRef(),
		email: useRef(),
		phone: useRef(),
		message: useRef()
	}
	const [faded, setFaded] = useState(false)
	const [loading, setLoading] = useState(false)
	const fadeClass = faded ? effects.fadeUp : effects.preFadeUp
	const [response, setResponse] = useState(null)
	const responseClass = response ? styles.responseShow : styles.response

	useEffect(() => {
		setupObserver(sectRef.current, setFaded)
	}, [sectRef])

	function validateForm(...inputs) {
		const errors = 0

		inputs.forEach(input => {
			if (input.value === '') {
				errors += 1
				input.style.border = 'solid 1px var(--b1)'
			} else {
				input.style.border = 'solid 1px transparent'
			}
		})

		return (errors === 0) ? true : false
	}

	async function submitForm(e) {
		e.preventDefault()
		if (!validateForm(refs.name.current, refs.email.current, refs.message.current)) return

		setLoading(true)
		try {
			const formData = new FormData(refs.form.current)
			const resp = await fetch('/', {
				method: 'POST',
				headers: { "Content-Type": "application/x-www-form-urlencoded" },
				body: new URLSearchParams(formData).toString()
			})
			setResponse(resp.status)
		} catch (err) {
			alert(`Sorry, it looks like there was an error: '${err}'. Please refresh the page and try again.`)
		}
		setLoading(false)
		refs.form.current.reset()
	}

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
				ref={refs.form}
				className={styles.form}
				netlify-honeypot="bot-field" 
				data-netlify='true' 
				name='contact' 
			>
				<input 
					type="hidden" 
					name="form-name" 
					value="contact"
				/>
				<label htmlFor='name'>Name</label>
				<input 
					ref={refs.name}
					name='name' 
					type='text' 
					placeholder='Name' 
					className={styles.name}
					required={true}
				/>
				<label htmlFor='email'>Email</label>
				<input 
					ref={refs.email}
					name='email' 
					type='email' 
					placeholder='Email' 
					className={styles.email}
					required={true}
				/>
				<label htmlFor='phone'>Phone</label>
				<input
					ref={refs.phone}
					name='phone'
					type='tel'
					placeholder='Phone'
					className={styles.phone}
					required={false}
				/>
				<label htmlFor='message'>Message</label>
				<textarea 
					ref={refs.message}
					name='message' 
					placeholder='Message' 
					className={styles.message}
					required={true}
				/>
				<Button 
					text={loading ? 'Sending...' : 'Get In Touch'}
					handler={submitForm}
					loading={loading}
				/>
				<span 
					className={responseClass}
				>
					{(response === 200) ? "Message sent successfully!" : "Sorry, it looks like there was an error. Please refresh the page and try again."}
				</span>
			</form>
		</div>
	)
}