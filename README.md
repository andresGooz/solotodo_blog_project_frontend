# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


Parte 2: Implementación del cliente de la API
La segunda parte del ejercicio es implementar una aplicación de frontend usando React que consuma la API definida anteriormente, proporcionando una interfaz para que un usuario pueda crear o ver publicaciones del blog.

Configuración
Crear un nuevo proyecto de React. Para esto pueden ocupar Vite, Next.JS, o la herramienta que prefieran
En el caso de que la herramienta que utilicen no incluya una solución para implementar rutas, configurar React-Router para disponer de ellas.
Rutas
Configurar las siguientes rutas:
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
