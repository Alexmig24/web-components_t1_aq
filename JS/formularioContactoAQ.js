class formularioContactoAQ extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        form {
          display: flex;
          flex-direction: column;
          gap: 10px;
          padding: 20px;
          background: #f9f9f9;
          border-radius: 10px;
          box-shadow: 0 0 10px rgba(0,0,0,0.15);
          max-width: 400px;
          font-family: Arial, sans-serif;
        }

        label {
          font-weight: bold;
          color: #333;
        }

        input, textarea, select {
          padding: 8px;
          border: 1px solid #ccc;
          border-radius: 5px;
        }

        ::slotted(button) {
          padding: 10px;
          background-color: #007bff;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }

        ::slotted(button:hover) {
          background-color: #0056b3;
        }
      </style>

      <form id="formulario">
        <label for="nombre">Nombre:</label>
        <input type="text" id="nombre" required placeholder="Ej. Alexander Quizhpe" />

        <label for="universidad">Universidad:</label>
        <input type="text" id="universidad" placeholder="Ej. Universidad ESPE" />

        <label for="carrera">Carrera:</label>
        <input type="text" id="carrera" placeholder="Ej. Tecnologías de la Información" />

        <label for="edad">Edad:</label>
        <input type="text" id="edad" placeholder="Ej. 21 años" />

        <label for="imagen">URL Imagen:</label>
        <input type="text" id="imagen" placeholder="https://..." />

        <label for="tema">Color de fondo:</label>
        <input type="color" id="tema" value="#f0f0f0" />

        <label for="lado">Posición de imagen:</label>
        <select id="lado">
          <option value="izquierda">Izquierda</option>
          <option value="derecha" selected>Derecha</option>
        </select>

        <slot name="boton-enviar"></slot>
      </form>
    `;

    this.shadowRoot.querySelector('slot[name="boton-enviar"]').addEventListener('slotchange', () => {
      const boton = this.shadowRoot.querySelector('slot[name="boton-enviar"]').assignedElements()[0];
      if (boton) {
        boton.addEventListener('click', (e) => {
          e.preventDefault();
          this.actualizarTarjeta();
        });
      }
    });
  }

  actualizarTarjeta() {
    // Obtener los valore del formulario
    const nombre = this.shadowRoot.querySelector('#nombre').value.trim();
    const universidad = this.shadowRoot.querySelector('#universidad').value.trim();
    const carrera = this.shadowRoot.querySelector('#carrera').value.trim();
    const edad = this.shadowRoot.querySelector('#edad').value.trim();
    const imagen = this.shadowRoot.querySelector('#imagen').value.trim();
    const tema = this.shadowRoot.querySelector('#tema').value;
    const lado = this.shadowRoot.querySelector('#lado').value;

    // Asignacion de la tarjeta al formulario mediante el id
    const tarjeta = document.querySelector('#perfil');
    if (!tarjeta) return;

    // Actualizar atributos
    if (imagen) tarjeta.setAttribute('imagen', imagen);
    tarjeta.setAttribute('tema', tema);
    tarjeta.setAttribute('lado', lado);

    // Actualizar slots
    if (nombre) tarjeta.querySelector('[slot="nombre"]').textContent = nombre;
    if (universidad) tarjeta.querySelector('[slot="estudio"]').textContent = universidad;
    if (carrera) tarjeta.querySelector('[slot="carrera"]').textContent = carrera;
    if (edad) tarjeta.querySelector('[slot="edad"]').textContent = edad;
  }
}

customElements.define('formulario-aq', formularioContactoAQ);
