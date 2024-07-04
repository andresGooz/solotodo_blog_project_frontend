Prueba ingreso desarrollador Full-Stack SoloTodo
Introducción

El siguiente ejercicio espera probar las capacidades de los postulantes al cargo de desarrollador full stack en las tecnologías usadas dentro de SoloTodo.

El contenido del ejercicio mismo no tiene ninguna relación con las actividades comerciales de SoloTodo, y sus respuestas sólo se van a ocupar para evaluar las capacidades de las herramientas utilizadas. En particular no se va a ocupar el contenido de ninguna de las respuestas recibidas dentro de la plataforma de SoloTodo.

El ejercicio mismo consiste en la implementación de una API usando Python y Django, y en el consumo de dicha API por una aplicación implementada en React.

El resultado del ejercicio se puede enviar como dos links a repositorios de GitHub vía el chat de Get On Board o bien como links a dos archivos comprimidos que contengan cada una de las aplicaciones.

El ejercicio no tiene un límite de tiempo o fecha de entrega, pero la postulación quedará cerrada cuando se encuentre un candidato óptimo para el cargo.

Cada proyecto va a tener partes opcionales por incorporar ciertas tecnologías o herramientas que le van a dar puntos extra a la solución entregada.

Parte 2: Implementación del cliente de la API
La segunda parte del ejercicio es implementar una aplicación de frontend usando React que consuma la API definida anteriormente, proporcionando una interfaz para que un usuario pueda crear o ver publicaciones del blog.

Configuración
Crear un nuevo proyecto de React. Para esto pueden ocupar Vite, Next.JS, o la herramienta que prefieran
En el caso de que la herramienta que utilicen no incluya una solución para implementar rutas, configurar React-Router para disponer de ellas.
Rutas
Configurar las siguientes rutas: React-Router
/: Redireccionar a /posts
/posts: Listar los títulos de los posts, donde cada uno es un link a su vista de detalles.
/posts/:id: Mostrar todos los detalles del post con el ID dado. Si el ID no existe retornar un error 404 o una página que indique que el post no existe.
/posts/create: Mostrar un formulario que permita crear un nuevo post con los siguientes campos:
Título (title)
Contenido (content)
Autor (Author)
	Una vez creado el post en la base de datos, se debe redirigir a la vista de detalles de ese post. El formulario debe tener validación básica de que todos los campos existen.
Para correr el proyecto final se van a ejecutar los siguientes comandos dentro del directorio del proyecto

Se van a instalar las dependencias del proyecto ejecutando “npm install”. El proyecto debe incluir un archivo package-lock.json y package.json que determinen las versiones exactas de los paquetes a instalar
Se va a correr la aplicación (“npm run dev”)

Notas

Se puede asumir que la API va a estar disponible en “http://localhost:8000”
Por favor ocupar npm solamente, no yarn u otros manejadores de paquetes

Puntos extra

Implementar la aplicación utilizando TypeScript en vez de JavaScript
Implementar los componentes visuales usando una biblioteca de componentes (MaterialUI, Shadcn, Mantine, etc) en vez de los incluidos con el navegador
Implementar Server-side rendering en la vista de lista y detalle de los posts (esto es, que el contenido del sitio esté incluido en el HTML enviado desde el servidor)
