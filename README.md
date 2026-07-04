# Desafío 2 módulo 3: Condiciones en JavaScript 🛠️

Este repositorio contiene el desarrollo del **desafío 2 del Módulo 3** del bootcamp **Desarrollo Front-End**. El objetivo central de este proyecto fue dominar la implementación de estructuras condicionales (`if`, `else if`, `else`) en JavaScript para alterar dinámicamente el comportamiento y la interfaz de una aplicación web basándose en acciones o ingresos numéricos realizados por el usuario.

## 🔗 Revisa Aquí
https://ciga25.github.io/m3d2_condiciones/

## 🎯 Objetivos del Desafío
* **Lógica Condicional:** Aplicar bifurcaciones de código efectivas para evaluar estados lógicos y tomar decisiones en tiempo real.
* **Manipulación Dinámica de Estilos:** Modificar propiedades CSS complejas (como bordes y sombreados de neón) directamente mediante el árbol del DOM.
* **Captura y Conversión de Datos:** Recuperar datos desde elementos de entrada de tipo numérico (`input[type="number"]`) y menús desplegables (`select`), realizando el control de tipos correspondiente mediante `Number()`.
* **Concatenación y Feedback:** Construir mensajes personalizados dinámicos para guiar la experiencia de usuario según las reglas propuestas.

## 🛠️ Tecnologías y Herramientas
* **HTML5:** Estructuración de una página de una página principal y tres páginas de ejercicios independientes interconectadas mediante navegación semántica.
* **CSS3:** Diseño responsivo centrado con Flexbox, con paletas cromáticas contrastantes y efectos interactivos visuales avanzados de iluminación.
* **JavaScript:** Creación de manejadores de eventos y desarrollo de la lógica de control algorítmico condicional.

## 🌟 Estructura de Ejercicios Implementados

### 1. Interacción de Estilo Condicional (Imagen con Borde)
* **Archivo:** `pages/ejercicio1.html`
* **Lógica:** Al hacer clic sobre la imagen interactiva, una función verifica mediante un condicional si el elemento carece de borde. Si se cumple la condición, se inyecta dinámicamente un borde sólido rojo acompañado de un efecto de resplandor (*box-shadow*). Si el borde ya existe, se remueve para retornar al estado original.

### 2. Validación de Umbral Numérico (Tienda de Stickers)
* **Archivo:** `pages/ejercicio2.html`
* **Lógica:** El sistema recolecta los valores numéricos ingresados en tres entradas independientes correspondientes a distintas variantes de stickers. Mediante operaciones de adición aritmética, calcula el total y evalúa el resultado bajo las siguientes condiciones:
  * **Hasta 10 unidades:** Despliega el recuento exacto confirmando la selección.
  * **Más de 10 unidades:** Emite un aviso de error alertando que se ha superado el límite permitido.

### 3. Control de Acceso mediante Llaves de Combinación (Contraseña)
* **Archivo:** `pages/ejercicio3.html`
* **Lógica:** Interfaz que captura la combinación de caracteres numéricos seleccionados a través de tres componentes `<select>`. El algoritmo concatena las elecciones en un *string* único y valida el resultado contra dos llaves maestras predefinidas en el código:
  * Si la combinación es `911`, notifica: *"password 1 correcto"*.
  * Si la combinación es `714`, notifica: *"password 2 correcto"*.
  * Ante cualquier otra combinación alternativa, informa que la contraseña es errónea.

## 📂 Arquitectura de Archivos del Proyecto
```
.
├── index.html          # Portal central de acceso que actúa como menú para navegar hacia cada uno de los retos.
│
├── pages/              # Directorio que aloja las vistas individuales de ejecución (ejercicio1.html, ejercicio2.html, ejercicio3.html).
│
└── assets/
    ├── css/
    │   └── styles.css  # Hoja de estilos unificada con la distribución espacial y los estados estéticos de los componentes.
    └── js/ 
        └── main.js     # Núcleo lógico del proyecto que contiene las funciones condicionales (borde(), llevar(), contraseña()).
        
```
---
*Desafío académico desarrollado para la ejercitación de conciones en JavaScript en el bootcamp de Desarrollo Front-End - 2026.*