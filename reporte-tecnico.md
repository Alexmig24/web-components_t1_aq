Reporte Técnico — Componente Web <tarjeta-aq-perfil>

---

Autor: Quizhpe Cuzme Alexander Miguel
Tarea: Componente personalizado con Web Components
Fecha: Mayo 2025

---

## Objetivo

El objetivo del proyecto fue crear un componente personalizado (Web Component) llamado <tarjeta-aq-perfil> que represente una tarjeta de presentación personalizable. Este componente permite al usuario ingresar un título, tres párrafos descriptivos y una imagen, con opción de elegir si la imagen se posiciona a la izquierda o derecha del texto.

--- 

## Encapsulación mediante Shadow DOM

La encapsulación se logra a través del uso del Shadow DOM, que crea un árbol DOM independiente del documento principal. Esto se realiza mediante el siguiente código en el constructor del componente:

this.attachShadow({ mode: 'open' }); 

Al usar Shadow DOM, todos los estilos y estructura interna definidos dentro del componente están completamente aislados del resto de la página. Esto garantiza:
    ─ Que los estilos no se filtren hacia afuera ni entren desde el exterior.
    ─ Que la estructura interna no se vea afectada por cambios globales en el CSS del sitio.
    ─ Que el componente sea completamente reutilizable en distintos contextos sin conflicto de estilos.

---

## Diferencias entre slots con nombre y slots por defecto

Los slots son puntos de inserción que permiten que un componente reciba contenido externo. Existen dos tipos principales:

1. Slot por defecto
Es un slot sin nombre, y todo el contenido sin atributo slot será insertado automáticamente en él.

<slot></slot>

2. Slot con nombre
Es un slot con el atributo name. El contenido que se desea insertar debe tener el atributo slot con el mismo nombre:

<!-- En el componente -->
<slot name="nombre"></slot>

<!-- En el HTML externo -->
<h2 slot="nombre">Alexander Quizhpe</h2>

Ventajas del slot con nombre:

    ─ Se puede insertar contenido específico en posiciones definidas.
    ─ Mayor control sobre la disposición y estructura del contenido.

Desventajas del slot por defecto:

    ─ Menor control.
    ─ Solo se puede tener un slot por defecto por componente.

---

## Conclusión

El componente <tarjeta-aq-perfil> implementa de manera efectiva los principios de encapsulación, reutilización y personalización que ofrece la tecnología Web Components. Permite al usuario definir un contenido personalizado y adaptarlo a sus necesidades mediante atributos (tema, imagen, lado) y slots con nombre.