# API BÁSICA EN NODEJS

Para desplegar hay que tener una versión actualizada de nodejs (a partir de la 13) con npm instalado (la mayoría lo traen si no lo has desactivado).

Una vez clonado el repositorio, en la raíz se introduce "npm i" o "npm install" para restaurar la carpeta "node_modules" con todas las dependencias necesarias. También sería ideal tener TypeScript instalado de manera global.

Necesitamos una instalación de Mongo community cómo SGBD.

Copia el archivo ".env.example" e introduce tus datos, luego renombraló para que figure solo cómo ".env", este fichero contiene nuestras variables de entornos y no deberia ser trackeado por git (se encuentra en el .gitignore).

En el archivo "package.json" en la sección "scripts" se encuentran varios que serán de utilidad, uno para iniciar el servidor en producción, otro para iniciar el servidor en modo desarrollo (con nodemon) y una tercera para compilar el TypeScript en JavaScript.

Por defecto se iniciará en el puerto 3000, si este puerto ya estase ocupado o fuera a estarlo, cambia la configuración en el archivo ".env" y levanta el servicio de nuevo.

