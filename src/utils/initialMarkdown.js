export const INITIAL_MARKDOWN = {
  id: 0,
  title: "bienvenida_md",
  content: `
# Introducción a Markdown

Markdown es un **lenguaje de marcado ligero** que permite dar formato a texto de manera sencilla y legible. Esta app te permite escribir en formato markdown y exportar fácilmente a otros formatos (PDF, HTML o TXT). Todos tus documentos se guardan localmente.

---

## ¿Qué es Markdown?

Markdown permite escribir texto plano y convertirlo fácilmente en **HTML** u otros formatos. Su principal ventaja es la **simplicidad** y la **legibilidad**.

### Características principales

- Fácil de aprender
- Legible sin procesar
- Compatible con muchas plataformas
- Ideal para documentación

---

## Encabezados (H1 a H6)

Los encabezados se crean usando el símbolo \`#\`:

\`\`\`text
# H1
## H2
### H3
#### H4
##### H5
###### H6
\`\`\`
---

## Énfasis en el texto

Puedes resaltar texto usando:

* Negrita: **texto**

* Cursiva: *texto*

* Negrita y cursiva: ***texto***

Ejemplo:

> Markdown permite escribir texto en negrita, cursiva o ambos fácilmente.

---

## Listas

### Listas no ordenadas

- Elemento uno

- Elemento dos

	- Subelemento

	- Otro subelemento

### Listas ordenadas

1. Primer paso

2. Segundo paso

3. Tercer paso

---

## Enlaces

Los enlaces se escriben así:

[Leer a Marx](https://www.marxists.org)


Ejemplo:
[Visitar Markdown Guide](https://www.markdownguide.org/)

---

## Imágenes

La sintaxis es similar a los enlaces, pero con !:

![Foto de un genio](/images/karl-marx.jpg)

---

## Bloques de código

### Código en línea

Usa comillas invertidas:  \`código\`

### Bloques de código
\`\`\`python
def saludo(nombre):
    return f"Hola, {nombre}!"
\`\`\`

---

## Citas

Las citas se escriben usando >:

> Markdown es una forma simple y efectiva de dar formato al texto.

---

## Tablas

Las tablas se crean usando | y -:

| Sintaxis | Descripción |
|----------|-------------|
|#	   | Encabezados |
|*	   |Cursiva      |
|**	   |Negrita      |
|>	   |Citas        |

`,
  creationDate: null,
};
