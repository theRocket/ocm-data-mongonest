
## Open Charge Map Data Cleaning Workflow as a Microservice

A project for the Data Science grad program at UIUC, CS 513 Data Cleaning for Spring 2020 semester.

#### - [download Final Report PDF (1.7 Mb)](./FinalAssessmentReport.pdf)

See also my main project portfolio page: https://therocket.github.io/

### Obtain latest data file from [OCM Project](https://github.com/openchargemap/ocm-data)
The poi.json file is too large to include in this repo, so it has been added to the .gitignore. It belongs in the docker-entrypoint-initdb.d directory so that it can be loaded with seed.js file.

### Microservice Architecture based on 3 Containers as named by Docker Compose:
* ocmdata_nest: [Nest](https://github.com/nestjs/nest) framework (TypeScript) - port 3400
* ocmdata_mongodb: Mongo container initialized with JSON templates and Nest user - port 27017
* ocmdata_mongoadmin: Mongo-Express for web-based mongo admin interface and its own user - port 8081
* ocmdata_netty: the network name for all above services

## Initialize Containers (including Nest app)

See [Adding Docker with multi-stage build](https://blog.logrocket.com/containerized-development-nestjs-docker/)

```bash
$ docker-compose --project-name ocmdata up --build --renew-anon-volumes --detach
(or)
$ docker-compose -p ocmdata up --build -V -d

$ docker-compose -p ocmdata down
```
Once you rename the project directory to the app you want to build, you can drop the project flag for 'ocmdata' in the example above. It just names the network to be consistent with the container names from docker-compose.yml.

## Running the Nest app locally (not in a container)

First, comment out the Nest service in docker-compose.yml file and restart other services, or just issue this command to the Docker host (with container name):
```bash
docker stop ocmdata_nest
```
Then:
```bash
# download node_modules (directory in .gitignore)
$ yarn install

# watch mode (TypeScript, main.ts)
$ yarn start:local

# build mode (JavaScript, main.js)
$ yarn build
$ yarn start:dev
```
Now the ocmdata app is running on localhost:3000 instead of the 3400 port mapped by Docker networking.
