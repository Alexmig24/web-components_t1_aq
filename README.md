# Componente Web: `<tarjeta-aq-perfil>`

Este componente web personalizado (`Web Component`) permite mostrar una tarjeta de perfil que incluye una imagen, un título y tres párrafos descriptivos. Es totalmente reutilizable, estilizado con CSS encapsulado mediante Shadow DOM, y permite personalización por atributos.

---

## Objetivo

Crear un componente de tarjeta de presentación con diseño flexible, que permita mostrar información personal (como nombre, formación, carrera y edad), acompañado de una imagen alineada a la izquierda o derecha, según se prefiera.

---

## Uso 

```html
<tarjeta-aq-perfil 
  tema="#f5f5f5" 
  imagen="https://via.placeholder.com/200" 
  lado="izquierda"
>
  <h2 slot="nombre">Alexander Quizhpe</h2>
  <p slot="estudio">Universidad de las Fuerzas Armadas ESPE</p>
  <p slot="carrera">Tecnologías de la Información</p>
  <p slot="edad">Edad: 21 años</p>
</tarjeta-aq-perfil>
```

---

## Atributos Soportados

tema	Cambia el color de fondo de la tarjeta. Ejemplo: #f0f0f0
imagen	URL de la imagen a mostrar en la tarjeta.
lado	Posición de la imagen: ya sea "izquierda" (por defecto) o "derecha"

---

## Slots

nombre	Nombre o título principal.
estudio	Información académica (universidad).
carrera	Carrera o campo profesional.
edad	Edad o información adicional.