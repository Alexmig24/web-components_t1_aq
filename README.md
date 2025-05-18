Componente Web ```<tarjeta-aq-perfil>``` y ```<formulario-aq>```

Este proyecto consiste en la creación y la integración de dos componentes personalizados mediante Web Components con Shadow DOM. Esta es la segunda parte de un proyecto individual cuyo objetivo es aprender a desarrollar interfaces personalizadas y reutilizables sin depender de frameworks externos.

## 🧩 Componentes Incluidos

### `<tarjeta-aq-perfil>`
Tarjeta visual que presenta información personal, incluyendo:
- Nombre
- Universidad
- Carrera
- Edad
- Imagen (URL)
- Tema de color (color de fondo)
- Posición de la imagen (izquierda o derecha)

Este componente utiliza slots para mostrar los datos dinámicamente.

### `<formulario-aq>`
Formulario interactivo que permite al usuario actualizar el contenido del componente `<tarjeta-aq>`. Incluye:
- Entrada para nombre
- Universidad
- Carrera
- Edad
- URL de la imagen
- Selector de color
- Selector de posición de imagen
- Botón para aplicar cambios

## ⚙️ Integración entre componentes

Cuando el usuario llena el formulario y presiona el botón **Actualizar Información**, el componente `formulario-aq` localiza la tarjeta con `id="perfil"` y actualiza sus atributos y contenido de los slots.

## 🚀 Cómo probar el proyecto

1. Clona el repositorio o descarga los archivos.
2. Abre `index.html` en tu navegador.
3. Llena el formulario y haz clic en "Actualizar Información".
4. Observa los cambios reflejados en tiempo real en la tarjeta.