

class HelloComponent extends HTMLElement {
    constructor() {
        super();
        this.template = document.createElement('template');
        this.template.innerHTML = `
                    <style>
                    </style>
                    <div class="desk"></div>
                `;
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(this.template.content.cloneNode(true));
    }

    static get observedAttributes() {
        return [''];
    }

    connectedCallback() {
        
    }

    attributeChangedCallback(name, oldVal, newVal) {
    }
}
customElements.define('deliver-component', HelloComponent);

