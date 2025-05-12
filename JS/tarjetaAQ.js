class tarjetaAQ extends HTMLElement {
  static get observedAttributes() {
    return ['tema', 'imagen', 'lado'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.render();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this.render(); // Volver a renderizar si cualquier atributo cambia
  }

  render() {
    const tema = this.getAttribute('tema') || '#ffffff';
    const imagen = this.getAttribute('imagen') || '';
    const lado = this.getAttribute('lado') || 'izquierda';

    const imagenHTML = `<img class="imagen" src="${imagen}" alt="Imagen de perfil">`;
    const textoHTML = `
      <div>
        <div class="titulo"><slot name="nombre"></slot></div>
        <div class="descripcion"><slot name="estudio"></slot></div>
        <div class="descripcion"><slot name="carrera"></slot></div>
        <div class="descripcion"><slot name="edad"></slot></div>
      </div>`;

    this.shadowRoot.innerHTML = `
      <style>
        .card {
          display: flex;
          flex-direction: row;
          align-items: center;
          border-radius: 10px;
          box-shadow: 0 0 10px rgba(0,0,0,0.2);
          padding: 1em;
          background-color: ${tema};
          font-family: Arial, sans-serif;
          max-width: 700px;
          margin: 20px auto;
        }

        .imagen {
          width: 200px;
          height: 200px;
          border-radius: 10px;
          object-fit: cover;
          margin: 0 20px;
        }

        .titulo {
          font-weight: bold;
          font-size: 20px;
          margin-bottom: 5px;
          color: #333;
        }

        .descripcion {
          color: #666;
          margin-bottom: 2px;
        }
      </style>
      <div class="card">
        ${lado === 'derecha' ? textoHTML + imagenHTML : imagenHTML + textoHTML}
      </div>
    `;
  }
}

customElements.define('tarjeta-aq-perfil', tarjetaAQ);