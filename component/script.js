

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
                        width:14vw;
                        height: 10vw;
                        background: #e53935;
                        margin:10px;
                        display:flex;
                        flex-direction:column;
                        justify-content:center;
                        align-items:center;
                        border-radius:20px;
                    }
                    .employee_botonera{
                        display:flex;
                        flex-direction:row;
                        
                    }
                    .employee_botonera>i{
                        font-size:1.5rem;
                        padding:5px;
                    }
                    .tooltip {
                        padding:5px;
                        position: relative;
                        display: inline-block;
                        border-bottom: 1px dotted black;
                      }
                      
                      .tooltip .tooltiptext {
                        visibility: hidden;
                        width: 120px;
                        background-color: black;
                        color: #fff;
                        text-align: center;
                        border-radius: 6px;
                        padding: 5px 0;
                        
                        /* Position the tooltip */
                        position: absolute;
                        z-index: 1;
                        bottom: 100%;
                        left: 50%;
                        margin-left: -60px;
                      }
                      
                      .tooltip:hover .tooltiptext {
                        visibility: visible;
                      }
                    </style>
                    <div class="employee">
                    <div class='employee_botonera'>
                    <div class="tooltip">
                    <i class="fa fa-plus"></i>       
                    <span class="tooltiptext">Asignar Tarea</span>
                    </div>
                    <div class="tooltip">
                    <i class='fa fa-list-alt'></i>
                    <span class="tooltiptext">Ver Tareas</span>
                    </div>
                    <div class="tooltip">
                    <i class="fa fa-trash"></i>
                    <span class="tooltiptext">Eliminar</span>
                    </div>
                    </div>
                           <i class="fa fa-user"></i>

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
        console.log('CHANGED !',name);
    }
}


class Desk extends HTMLElement {
    constructor() {
        super();


        this.delivery_config = {
            'employees': [],
        }
        this.template = document.createElement('template');
        this.template.innerHTML = `
                        <head>
                        <!-- Awesome Fonts -->
                            <link href='https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css' rel='stylesheet' integrity='sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN' crossorigin='anonymous'>
                        </head>
                    <style>
                    .desk{
                        display:flex;
                        flex-direction:row;
                    }
                    .desk_content{
                        display:flex;
                        flex-direction:row;
                        flex-wrap:wrap;
                        background:#FBC02D;
                        
                    }
                    .desk_botonera{
                        background:#795548;
                        padding: 20px;
                        display:flex;
                        flex-direction:column;
                        justify-contente:center;
                        align-items:center;
                    }
                    .botonera_button{
                        display:flex;
                        flex-direction:column;
                        justify-contente:center;
                        align-items:center;
                        color:#FFFFFF;
                        background:orange;
                        width:40px;
                        height:30px;
                        border-radius:15%;
                        padding-top:50%;
                        margin-top:5px;
                        cursor:pointer;
                    }
                    </style>
                    <div class="desk">
                        <div class="desk_botonera">
                            <span class="botonera_button employee_count ">
                                <p>${this.delivery_config.employees.length}</p>
                            </span>
                            <span class="botonera_button add_employee">
                                <i class="fa fa-user-plus"></i>
                            </span>
                            <span class="botonera_button">
                                <i class="fa fa-list-alt"></i>
                            </span>
                        </div>
                        <div class="desk_content">
                        </div>
                        
                    </div>

                `;
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(this.template.content.cloneNode(true));
       
        this.createEmployee();
        
    }

    static get observedAttributes() {
        return ['employees'];
        
    }

    createEmployee() {
        for (let i of [...Array(this.delivery_config.employees.length).keys()]) {
            this.delivery_config.employees.push(`<deliery-employee></deliery-employee>`)
            
        }
    }
    
    draw_employees() {
        this.shadowRoot.querySelector('.desk_content').innerHTML = '';
        for (let i of this.delivery_config.employees) {
            this.shadowRoot.querySelector('.desk_content').innerHTML += i;
        }

    }
    
    connectedCallback() {
        this.draw_employees();
        this.shadowRoot.querySelector('.add_employee').addEventListener('click', (ev) => {
            this.delivery_config.employees.push(`<deliery-employee></deliery-employee>`);
            this.setAttribute('employees', this.delivery_config.employees.length);
                      
            
            
            
        })
    }
    
    attributeChangedCallback(name, oldVal, newVal) {
        if(newVal!=oldVal){
            this.draw_employees();
            this.shadowRoot.querySelector('.employee_count').innerHTML = '';
            this.shadowRoot.querySelector('.employee_count').innerHTML = this.delivery_config.employees.length;
        }
    }
}


// Creating new tags.
customElements.define('deliery-employee', Employee);
customElements.define('deliver-component', Desk);

