# Muestra sintética de revisión de bug JavaScript/Node

> Esta muestra no pertenece a un cliente ni a un repositorio externo. Sus nombres, código y datos se crearon para mostrar el formato de entrega.

## Entrada saneada

- Repositorio: ejemplo local sintético.
- Node: 24.19.0.
- Observado: la función `slugify()` dejaba guiones iniciales o finales con entradas que contenían puntuación o espacios.
- Esperado: un slug sin guiones exteriores, preservando minúsculas y eliminación de acentos.

## Diagnóstico

La expresión regular que sustituye grupos de separadores por `-` resolvía la parte central, pero no eliminaba el separador generado en los extremos. No se necesitan dependencias, acceso a cuentas ni datos personales.

## Parche propuesto

Añadir una normalización final sobre extremos:

```js
.replace(/^-+|-+$/g, '')
```

El archivo anterior está en `before/slugify.mjs`; la versión corregida, en `after/slugify.mjs`.

## Comprobación

`node verify.mjs` reproduce tres fallos en la versión inicial y valida cuatro casos en la versión corregida, además del `TypeError` esperado para una entrada no textual.

## Límites

La muestra ilustra un caso aislado de una función local. No representa revisión de infraestructura, acceso a producción, credenciales ni garantía de compatibilidad con servicios externos.
