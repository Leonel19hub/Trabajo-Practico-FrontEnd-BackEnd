# Usa una imagen base de Node.js
FROM node:16.19.0

# Establece el directorio de trabajo en /usr/src/app
WORKDIR /usr/src/app

# Copia los archivos de tu aplicación al directorio de trabajo
COPY . .

# Instala las dependencias
RUN npm install

# Expón el puerto en el que tu aplicación Express se ejecuta (ajusta según sea necesario)
EXPOSE 3000

# Comando para iniciar tu aplicación cuando se ejecute el contenedor
CMD ["node", "index.js"]
