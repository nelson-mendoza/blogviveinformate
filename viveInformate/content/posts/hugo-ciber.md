+++
title = "Hugo y yo: aprender ciberseguridad construyendo un blog"
date = 2026-10-05T10:00:00-06:00
draft = false
tags = ["ciberseguridad", "hugo", "tecnología"]
summary = "Lo que me enseñó montar este blog: permisos, Git, y por qué nada en internet es gratis ni invisible."
+++

## Aprendí más de seguridad con este blog que en varios cursos

Cuando decidí hacer este sitio con Hugo pensé: "es solo un blog". Terminé aprendiendo cosas que tienen todo que ver con **ciberseguridad real**.

### 1. Nada es privado solo porque nadie lo está mirando

Subí unos archivos a GitHub creyendo que eran "mis notas personales". Eran públicos. Todo el mundo. Ahí entendí el primer principio de la seguridad de la información: **por defecto, lo que subes a internet existe para siempre y para todos**.

Borrar el archivo después no borra el commit. La historia queda. Igual que en la vida.

### 2. Los permisos son la primera línea de defensa

En Linux, un simple `ls -la` te muestra quién puede leer, escribir o ejecutar cada cosa. Un blog mal configurado puede exponer llaves SSH, tokens, contraseñas. Antes de compartir cualquier repo:

```bash
grep -rEi "password|token|secret|api_key" .
```

Ese comando te salva de vergüenzas.

### 3. Git es una máquina del tiempo (y eso asusta)

Cada cambio queda registrado. Si sabes usarlo, es tu amigo: puedes volver, comparar, recuperar. Si no, puedes publicar tu diario íntimo sin querer. Aprende estos tres antes que nada:

- `git status` → dónde estoy parado
- `git log --oneline` → qué ha pasado
- `git rm --cached` → quitar algo del índice sin borrarlo

### En resumen

Montar un blog fue mi primer laboratorio de seguridad. Barato, real y con errores incluidos. Si estudias ciberseguridad y no sabes por dónde empezar: haz esto. Rompe algo, arréglalo, y anota qué aprendiste.
