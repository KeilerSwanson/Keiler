import Error from '../comps/Error'

export default function Custom500() {
	
	return (
		<Error code='500' message="Sorry, it looks like there was a server side error." />
	)
}