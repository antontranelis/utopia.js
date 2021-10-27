import { UtopiaMap } from "./Map/map.js"
import * as GUN from "../node_modules/gun/gun.js";
import { config } from "../config/appConfig.js"
// import * as M from "../node_modules/@materializecss/materialize/dist/js/materialize.min.js"

// eslint-disable-next-line no-unused-vars
const L = window.L

const map = new UtopiaMap('leafletmap').setView(config.position, config.zoom);

var gun = Gun('http://localhost:8765/gun');
var places = gun.get('54235555555555555555555555555555555344444');
var events = gun.get('542355555555555555555554345345555555344444');

places.map().once(item => map.addPlace(item.lat, item.lng, item.text));
events.map().once(item => map.addEvent(item.lat, item.lng, item.text));

// Event Listeners

document.addEventListener('DOMContentLoaded', (event) => {
  var elems = document.querySelectorAll('.fixed-action-btn');
  M.FloatingActionButton.init(elems, {
    hoverEnabled: false
  });
  var el = document.querySelectorAll(".dropdown-trigger");
  M.Dropdown.init(el, {
    coverTrigger: false,
    hover: false
  });
  setMapHeight();
});

window.addEventListener('resize', (event) => setMapHeight())
window.addEventListener('touchmove', (event) =>  setMapHeight())

function setMapHeight() {
  var window_height = window.innerHeight;
  var header_height = document.getElementById("navbar").clientHeight;
  document.getElementById("leafletmap").style.height = window_height - header_height + "px";
}
