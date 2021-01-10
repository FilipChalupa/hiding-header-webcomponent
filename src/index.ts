import { hidingHeader } from 'hiding-header'
import { css, html, LitElement } from 'lit-element'

class HidingHeader extends LitElement {
	static styles = css`
		:host {
			display: block;
			position: relative;
			--hidingHeader-height: auto;
			--hidingHeader-bounds-height: auto;
			--hidingHeader-animation-offset: 0px;
			z-index: 10;
			height: var(--hidingHeader-bounds-height);
			margin-bottom: calc(
				var(--hidingHeader-height) - var(--hidingHeader-bounds-height)
			);
			pointer-events: none;
		}

		.hidingHeader-in {
			position: relative;
			position: sticky;
			top: 0;
			pointer-events: auto;
			transition: transform 0.2s;
			transform: translateY(var(--hidingHeader-animation-offset));
		}
	`

	connectedCallback() {
		super.connectedCallback()

		hidingHeader(this)
	}

	disconnectedCallback() {
		super.disconnectedCallback()

		// @TODO: destroy instance of hiding-header library
	}

	render() {
		return html`
			<div class="hidingHeader-in">
				<slot></slot>
			</div>
		`
	}
}
if (!customElements.get('hiding-header')) {
	customElements.define('hiding-header', HidingHeader)
}

declare global {
	interface HTMLElementTagNameMap {
		'hiding-header': HidingHeader
	}
}
