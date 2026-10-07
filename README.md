# Vive Infórmate 🌱

Blog personal sobre **salud mental, tecnología y ciberseguridad**, escrito desde México en español sencillo.

> "Vive" porque hay días en que seguir es lo heroico.
> "Infórmate" porque la información es la herramienta más barata contra la soledad y el miedo.

## Stack

- [Hugo](https://gohugo.io/) + tema Blowfish
- Publicado con GitHub Pages

## Cómo editar localmente

```bash
cd viveinformate
hugo server -D        # vista previa en http://localhost:1313
hugo                  # generar sitio estático
```

### Crear un post nuevo

```bash
hugo new content posts/mi-titulo.md
```

Edita el archivo, pon `draft = false` cuando esté listo, y súbelo:

```bash
git add . && git commit -m "nuevo post: mi-titulo" && git push
```

## ⚠️ Privacidad

Este repositorio es **público**. Nunca subas notas personales, borradores íntimos ni credenciales.
Ignorados por defecto: `public/`, `resources/_gen/`. Si alguna vez se subió algo sensible por error, hay que limpiar la historia de Git (`git filter-repo`).
