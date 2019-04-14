# Googlemaps with markers, setup using the default starter for Gridsome

### 1. Install Gridsome CLI tool if you don't have

`npm install --global @gridsome/cli`

### 2. Add dependancies

go to the folder where you installed the project adn run yarn or npm install

`cd <my-project>`

then

`yarn`

or

`npm install`

Create a .env file in the root of your project with details of the data feed and your Googlemaps API key

```terminal
LOCATIONS_API_URL=<API-URL>
GRIDSOME_GOOGLEMAPS_API_KEY=<MAPS-KEY>
```

### 3.run the dev server

`gridsome develop` to start a local dev server at `http://localhost:8080`
