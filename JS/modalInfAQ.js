export class ModalInfo extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    this.shadowRoot.querySelector('#cerrar').addEventListener('click', () => {
      this.close();
    });
  }

  open() {
    this.shadowRoot.querySelector('#modal').style.display = 'flex';
    this.dispatchEvent(new CustomEvent('modal-abierto', {
      detail: { mensaje: 'Modal fue abierto' },
      bubbles: true,
      composed: true
    }));
  }

  close() {
    this.shadowRoot.querySelector('#modal').style.display = 'none';
    this.dispatchEvent(new CustomEvent('modal-cerrado', {
      detail: { mensaje: 'Modal fue cerrado' },
      bubbles: true,
      composed: true
    }));
  }
}

const template = document.createElement('template');
template.innerHTML = `
  <style>
    :host {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }

    .modal {
        display: none;
        position: fixed;
        top: 0; left: 0;
        width: 100%; height: 100%;
        background: rgba(0,0,0,0.6);
        justify-content: center;
        align-items: center;
        z-index: 9999;
        animation: fadeIn 0.3s ease-out;
    }

    .modal-content {
        background: #fff;
        border-radius: 12px;
        padding: 30px 25px;
        min-width: 320px;
        max-width: 500px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
        position: relative;
        animation: scaleIn 0.3s ease-out;
    }

    .close {
        position: absolute;
        top: 10px; right: 15px;
        font-size: 20px;
        color: #888;
        cursor: pointer;
        transition: color 0.2s ease;
    }

    .close:hover {
        color: #333;
    }

    ::slotted(h2) {
        margin-top: 0;
        color: #28a745;
        font-size: 1.5em;
        text-align: center;
    }

    ::slotted(p) {
        text-align: justify;
        color: #444;
    }

    ::slotted(button) {
        background-color: #007bff;
        color: white;
        border: none;
        padding: 10px 18px;
        border-radius: 6px;
        cursor: pointer;
        font-weight: bold;
        display: block;
        margin: 20px auto 0;
        transition: background 0.3s ease;
    }

    ::slotted(button:hover) {
        background-color: #0056b3;
    }

    @keyframes fadeIn {
        from { background: rgba(0,0,0,0); }
        to { background: rgba(0,0,0,0.6); }
    }

    @keyframes scaleIn {
        from { transform: scale(0.9); opacity: 0; }
        to { transform: scale(1); opacity: 1; }
    }
    </style>

  <div class="modal" id="modal">
    <div class="modal-content">
      <span class="close" id="cerrar">&times;</span>
      <slot name="titulo"><h2>Sin título</h2></slot>
      <slot name="contenido"><p>Contenido de respaldo.</p></slot>
      <slot name="acciones"></slot>
    </div>
  </div>
`;


customElements.define('modal-info-aq', ModalInfo);
