const options = {
	root: null,
	rootMargin: '0px',
	threshold: .5
}

function setupObserver(ref, setState) {
	const observer = new IntersectionObserver((entries) => {
		if (entries[0].isIntersecting) {
			setState(true)
			observer.disconnect()
		}
	}, options)

	observer.observe(ref)
}

export { setupObserver }