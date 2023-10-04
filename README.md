# QuoteGenerator

## Configuring projects

In order to correctly start the project, create `.env` files based on `.env.example` at the root of each app.

Either use your personal tokens or use those provided privately.

## Running projects

To correctly run the project...

First start the API :

```
yarn nx start:back
```

Then start the front-end :

```
yarn nx start:front
```

Or start both with :

```
yarn nx start
```

### Docker

Also, if you want ro start the production projects within Docker...

First build the containers :

```
yarn build:docker
```

Then, start them :

```
docker-compose up
```

Or do both with :

```
yarn start:docker
```
