# 🚢 Red Route - Entelgy — Prototipo Dashboard Web

**Red Route - Entelgy** es un prototipo funcional e interactivo (Web + Mobile) para la gestión de solicitudes, autorizaciones, repositorios, monitoreo y reportes.

Demo: https://angel-2904.github.io/Prototipos-web/

## Entregables

- `index.html` — Prototipo responsive con menú hamburguesa y modales.
- `styles.css` — Estilos dark + light (Tech Gray) y responsive completo.
- `script.js` — Lógica: navegación, modales, repo, comentarios, modo tema y persistencia.
- `README.md` — Este archivo.
- `assets/` — Carpeta para capturas e íconos (anexar capturas aquí para PDF).

## Cómo usar localmente

1. Guarda los archivos en la misma carpeta (`index.html`, `styles.css`, `script.js`, `README.md`).
2. Abre `index.html` en tu navegador (o sirve con Live Server / GitHub Pages).
3. Para ver la versión mobile: abre DevTools (F12) y activa el icono de dispositivo (Ctrl+Shift+M) o usa cualquier extensión de simulador mobile.

## Notas importantes

- El modo oscuro es el predeterminado; el usuario puede alternar al modo claro (Tech Gray) con el botón sol/luna (arriba a la derecha). La preferencia se guarda en `localStorage`.
- Todos los apartados incluyen formularios de comentarios que se guardan localmente (key: `redroute_comments_v1`) o pueden enviarse a Formspree si configuras `FORMSPREE_ENDPOINT` en `script.js`.
- El proyecto está listo para subir a GitHub Pages.

## Recomendaciones para la entrega (PDF y Video)

- Captura cada pantalla (Dashboard, Solicitudes, Autorizaciones, Repositorio, Histórico, Monitoreo, Reportes, Administración).
- Añade descripciones y la retroalimentación de pruebas de usabilidad bajo cada captura.
- Graba un video de ~5 minutos mostrando los flujos principales en desktop y mobile (usa DevTools para mobile).

---

Desarrollado por: Equipo SISO — Red Route - Entelgy
