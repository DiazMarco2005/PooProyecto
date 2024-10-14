# Maker Hours

![logo.png](https://github.com/DiazMarco2005/PooProyecto/blob/main/DesignProcess/banding/logotxt.png)

Este proyecto es una plataforma de control de horas beca, desarrollada utilizando **Spring Boot** para el backend, **React Native Expo** para el frontend y **MariaDB** como base de datos.

## Estructura del Proyecto

- **shc-client**: contiene la aplicación frontend hecha con React Native Expo.
- **shc-server**: contiene la API backend hecha con Spring Boot.
- **shc-db**: contiene la configuración de la base de datos MariaDB.

## Requisitos Previos

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)
- [Node.js](https://nodejs.org/)
- [Java JDK](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html) (versión 11 o superior)
- [Maven](https://maven.apache.org/) para construir el proyecto Spring Boot

## Instalación

### 1. Clonar el repositorio
Clona este repositorio en tu máquina local.

```bash
git clone https://github.com/DiazMarco2005/PooProyecto.git
cd PooProyecto
```

### 2. Construir el proyecto

Navega a la carpeta `shc-server` para compilar el backend con Maven.

```bash
cd shc-server
mvn clean install
```

### 3. Ejecutar con Docker Compose

En la raíz del proyecto, ejecuta `docker-compose` para levantar todos los servicios (cliente, servidor y base de datos).

```bash
docker-compose up --build
```

Esto expondrá los servicios en los siguientes puertos:

- **Frontend** (React Native Expo): `http://localhost:5173`
- **Backend** (Spring Boot): `http://localhost:8080`
- **Base de Datos** (MariaDB): `localhost:3306`

## Uso

### Frontend

1. Navega a la carpeta `shc-client` y ejecuta el comando para iniciar la app en el modo web:

```bash
cd shc-client
npx expo start --web --port 5173
```

#### Diseños

Consulta el [diseño](https://www.figma.com/design/KfhdDIbVsgEq5CshWKiQGE/Poo-Design?node-id=0-1&t=tpAWg9Y4jsWk1zBB-1) en Figma.

### Backend

El servidor Spring Boot manejará las peticiones de autenticación y otras funcionalidades del sistema. Puedes probar los endpoints directamente utilizando una herramienta como [Postman](https://www.postman.com/)

### Base de Datos

La base de datos MariaDB se inicializa automáticamente con los datos configurados. Para acceder a ella, puedes utilizar un cliente MySQL como [MySQL Workbench](https://www.mysql.com/products/workbench/) o ejecutar comandos SQL desde el terminal:

```bash
mysql -h 127.0.0.1 -P 3306 -u root -p
```

## Endpoints API

Consulta la [documentación](https://github.com/DiazMarco2005/PooProyecto/blob/main/shc-server/src/main/java/com/shc/shc_server/controller/reference.md) del API.

## Licencia

Este proyecto está licenciado bajo la **GPL-2.0 license**. Consulta el archivo [LICENSE](https://github.com/DiazMarco2005/PooProyecto/blob/main/LICENSE) para más detalles.