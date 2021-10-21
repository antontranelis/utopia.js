import {
  UtopiaMap
} from "./Map/map.js"

import { config } from "../config/appConfig.js"

// import * as M from "../node_modules/@materializecss/materialize/dist/js/materialize.min.js"
// import "thePlugin"
// import "theOtherPlugin"

// eslint-disable-next-line no-unused-vars
const L = window.L
//const thePlugin = L.thePlugin()
//const theOtherPlugin = new L.Control.theOtherPlugin(options)

const map = new UtopiaMap('leafletmap').setView(config.position, config.zoom);
//theOtherPlugin.addTo(map)


map.populateMap();



console.log("app.js working");
