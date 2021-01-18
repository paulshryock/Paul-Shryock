/**
 * Fire stylesheet onload handlers if the CSP has blocked inline scripts.
 *
 * @since unreleased
 */
export function fireHandlers () {
	const links = document.querySelectorAll(
		'[media="print"][data-onload="this.media=\'all\'"]'
	)
	if (!links) return

	for (let i = 0; i < links.length; i++) {
		const link = links[i]
		link.setAttribute('media', 'all')
		link.removeAttribute('data-onload')
	}
}