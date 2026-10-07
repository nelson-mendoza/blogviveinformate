# Cómo escribir en Vive Infórmate 🖊️

Guía rápida para publicar sin tocar código. Todo lo que necesitas hacer es escribir un archivo de texto y subirlo.

---

## 1. Crear una nueva entrada

Crea un archivo nuevo dentro de la carpeta `content/posts/` con un nombre en minúsculas y guiones, por ejemplo:

```
content/posts/mi-nuevo-post.md
```

Al inicio del archivo copia estas líneas (se llaman *front matter*) y cámbialas:

```markdown
+++
title = "El título de tu post"
date = 2026-10-07T18:00:00-06:00
draft = true
tags = ["tag1", "tag2"]
summary = "Frase corta que aparece en la lista de entradas."
+++

Aquí empiezas a escribir libremente en Markdown.
```

**No necesitas saber más que eso.** Markdown básico:

| Quieres... | Escribes... |
|---|---|
| Título grande | `## Subtítulo` |
| Negritas | `**palabra**` |
| Cursivas | `*palabra*` |
| Lista | `- punto uno` |
| Enlace | `[texto](https://url.com)` |
| Imagen | `![descripción](/images/foto.png)` |

---

## 2. Publicar (el paso clave)

Mientras `draft = true`, el post **NO se ve en el blog** (útil para escribir sin prisa).

Para publicarlo, solo cambia esa línea a:

```
draft = false
```

Guarda, sube el cambio a GitHub y listo: Hugo lo publica automáticamente.

---

## 3. Vista previa en tu computadora (opcional)

Si tienes Hugo instalado, desde la carpeta del proyecto:

```bash
hugo server
```

Abre `http://localhost:1313` y verás el blog igual que en internet, con recarga automática mientras escribes. Para ver también los borradores usa:

```bash
hugo server -D
```

---

## 4. Carpeta de imágenes

Para poner imágenes en un post, súbelas a `assets/images/` y refenciálas así:

```markdown
![foto](/images/mi-foto.jpg)
```

*(Nota: si aún no existe esa carpeta, créala; cualquier editor de archivos permite crear carpetas.)*

---

## Resumen en 3 pasos

1. Copia un post viejo (`content/posts/el-inicio.md`) y pégalo como archivo nuevo en la misma carpeta → ya tienes la plantilla.
2. Escribe tu contenido, deja `draft = true` mientras tanto.
3. Cuando esté listo: `draft = false` → subir (commit + push) → publicado. ✅

No hay nada más que codificar. Solo escribir.
