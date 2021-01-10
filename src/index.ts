import { HidingHeaderWebcomponent } from './webcomponent'

if (!customElements.get('hiding-header')) {
	customElements.define('hiding-header', HidingHeaderWebcomponent)
}

declare global {
	interface HTMLElementTagNameMap {
		'hiding-header': HidingHeaderWebcomponent
	}
}
