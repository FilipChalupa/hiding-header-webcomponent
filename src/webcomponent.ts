import { hidingHeader } from 'hiding-header'

const template = document.createElement('template')
template.innerHTML = `
	<style>
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

		@media (prefers-reduced-motion) {
			.hidingHeader-in {
				transition-duration: 1ms;
				transition-timing-function: step-end;
			}
		}
	</style>
	<div class="hidingHeader-in">
		<slot></slot>
	</div>
`

export class HidingHeaderWebcomponent extends HTMLElement {
	connectedCallback() {
		this.attachShadow({ mode: 'open' })
		this.shadowRoot.appendChild(template.content.cloneNode(true))

		// @TODO: load options from html attributes
		hidingHeader(this, { snap: false })
	}

	disconnectedCallback() {
		// @TODO: destroy instance of hiding-header library
	}
}
