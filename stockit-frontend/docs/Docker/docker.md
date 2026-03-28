# Docker
## Dockerfile 
```dockerfile
FROM node:18-alpine
```
define the base image on top of which our app will run
```dockerfile
WORKDIR /app
```
define the workdir; which is the working directory of the docker container at any given time
```dockerfile
COPY package*.json ./
```
copy our package.json from our local system to the docker image.
```dockerfile
RUN npm install
```
run npm install inside the docker image to install all the dependencies
```dockerfile
RUN npm i -g serve
```
install serve. helps serve static site, single page app or just static file
```dockerfile
COPY . .
```
copy the rest of the files into the docker image
```dockerfile
RUN npm run build
```
ran npm run build to create production build of our app
```dockerfile
EXPOSE 3000
```
declares on which port the app "should" run and not must run.
this is only a label/documentation on the docker image, don't really open the ports
```dockerfile
CMD ["serve", "-s","dist"]
```
the last command ``serve -s dist`` runs only when the container spins up, not in image creation

### dev
``` dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5173

CMD [ "npm", "run", "dev" ]
```

### prod
```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN npm i -g serve

COPY . .

RUN npm run build

EXPOSE 3000

CMD [ "serve", "-s", "dist" ]
```

## Docker Build Command
```terminaloutput
// Command is being run from project root directory
docker build -f docker/dev/Dockerfile -t "stockit-frontend:v1.0" .
```
File Directory: 
1. WHERE is the Dockerfile?      → -f flag
2. WHERE is the source code? (current context)    → the context (the . at the end)

Project Structure example:
```
stockit-frontend/          👈 project root
├── docker/
│   ├── dev/
│   │   └── Dockerfile     👈 dockerfile lives here
│   └── prod/
│       └── Dockerfile
├── src/
├── package.json           👈 source code lives here
└── vite.config.ts
```

## other commands
``` terminaloutput
docker images
```
return all images from local system
``` terminaloutput
docker run -p 3000:3000 sample-project:v1.0
```
run a docker container from the image 
3000:3000 is port mapping hostport:containerport 
```terminaloutput
docker ps
```
check list of all running containers
```terminaloutput
docker stop <ID>
```
stop running container
```terminaloutput
docker rm <ID>
```
delete container
```terminaloutput
docker rmi <imageID>
```
delete image
