// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const axios = require('axios')

module.exports = function (api) {
  api.loadSource(async store => {
    const { data } = await axios.get(process.env.LOCATIONS_API_URL)

    const contentType = store.addContentType({
      typeName: 'Locations',
    })
    
    for (const item of data) {
      contentType.addNode({
        id: item.id,
        fields: {
          name: item.name,
          capital: item.capital,
          latitude: item.latitude,
          longitude: item.longitude
        }        
      })
    }
  })
}