Componente Web ```<tarjeta-aq-perfil>```, ```<formulario-aq>``` y ```<modal-info-aq>```

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
Formulario interactivo que permite al usuario actualizar el contenido del componente `<tarjeta-aq-perfil>`. Incluye:
- Entrada para nombre
- Universidad
- Carrera
- Edad
- URL de la imagen
- Selector de color
- Selector de posición de imagen
- Botón para aplicar cambios

### `<ModalInfoAQ>`

Es un componente web avanzado reutilizable basado en **Web Components**, que implementa especificaciones modernas como:

- `<template>` para estructuras reutilizables.
- Shadow DOM para encapsulamiento.
- Uso de `<slot>` con contenido de respaldo (fallback).
- Modularización con `export`/`import` usando ES Modules.
- Emisión de eventos personalizados (`modal-abierto`, `modal-cerrado`).


## 📦 Estructura del proyecto

📁 JS/
│ ├── main.js → Permite la Modularización
│ ├── modalInfoAQ.js → Componente modal personalizado
│ ├── trajetaAQ.js → Componente card personalizado
│ └── formularioContactoAQ.js → Componente externo que interactúa con el modal
📁 docs/
│ ├── capturas/
│ │ ├── modal-abierto.png
│ │ ├── modal-cerrado.png
│ │ ├── formulario-card.png
│ │ └── card-cambiada.png
│ └── reporte-tecnico.md
index.html
README.md

## ⚙️ Integración entre componentes

Cuando el usuario llena el formulario y presiona el botón **Actualizar Información**, el componente `formulario-aq` localiza la tarjeta con `id="perfil"` y actualiza sus atributos y contenido de los slots.

## 🚀 Cómo probar el proyecto

1. Clona el repositorio o descarga los archivos.
2. Abre `index.html` en tu navegador.
3. Llena el formulario y haz clic en "Actualizar Información".
4. Observa los cambios reflejados en tiempo real en la tarjeta.

## 📝Nota: 
Para mas informacion leer el documento reporte-tecnico en la carpeta ```docs```