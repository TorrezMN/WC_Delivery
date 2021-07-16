

class Employee extends HTMLElement {
    constructor() {
        super();
        this.template = document.createElement('template');
        this.template.innerHTML = `
                    <head>
                	    <!-- Awesome Fonts -->
			            <link href='https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css' rel='stylesheet' integrity='sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN' crossorigin='anonymous'>
                    </head>
                    <style>
                    .employee{
                        width:20vw;
                        height: 30vh;
                        background: #e53935;
                        margin:3px;
                        display:flex;
                        flex-direction:column;
                        justify-content:center;
                        align-items:center;
                    }
                    .employee_botonera{
                        display:flex;
                        flex-direction:row;

                    }
                    </style>
                    <div class="employee">
                        <div class='employee_botonera'>
                            <p>X</p>
                            <p>X</p>
                            <p>X</p>
                        </div>
                        Empleado
                    </div>
                `;
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(this.template.content.cloneNode(true));
        this.config_config = {};
    }

    static get observedAttributes() {
        return [''];
    }

    connectedCallback() {

    }

    attributeChangedCallback(name, oldVal, newVal) {
    }
}


class HelloComponent extends HTMLElement {
    constructor() {
        super();
        this.template = document.createElement('template');
        this.template.innerHTML = `
                    <style>
                    .desk{
                        display:flex;
                        flex-direction:row;
                        flex-wrap:wrap;
                    }
                    </style>
                    <div class="desk"></div>
                `;
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(this.template.content.cloneNode(true));
        this.delivery_config = {
            'employees': [],
        }
        this.createEmployee();
    }

    static get observedAttributes() {
        return [''];
    }

    createEmployee() {
        for (let i of [...Array(10).keys()]) {
            this.delivery_config.employees.push(`<deliery-employee></deliery-employee>`)
        }
    }

    connectedCallback() {
        for (let i of this.delivery_config.employees) {
            this.shadowRoot.querySelector('.desk').innerHTML += i;
        }
    }

    attributeChangedCallback(name, oldVal, newVal) {
    }
}


// Creating new tags.
customElements.define('deliery-employee', Employee);
customElements.define('deliver-component', HelloComponent);

