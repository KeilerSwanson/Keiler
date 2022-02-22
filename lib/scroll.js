// I'm only directly manipulating the DOM because there's no straightforward way to
// add a ref to the body tag in NextJS and I'm not updating any state
function disableBodyScroll() {
	if (document.getElementsByTagName('body'[0])) {
		document.getElementsByTagName('body')[0].style.overflowY = 'hidden'
	}
}

function enableBodyScroll() {
	if (document.getElementsByTagName('body'[0])) {
		document.getElementsByTagName('body')[0].style.overflowY = 'visible'
	}
}

export { disableBodyScroll, enableBodyScroll }