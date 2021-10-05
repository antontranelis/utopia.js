import {
  Control,
  Map,
  Marker,
  TileLayer
} from "./myLeaflet.js"


let PlaceMarker = Marker.extend({

});

export {
  Control,
  Map,
  TileLayer,
  PlaceMarker
}



document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.fixed-action-btn');
  M.FloatingActionButton.init(elems, {hoverEnabled: false});
  var el = document.querySelectorAll(".dropdown-trigger");
  M.Dropdown.init(el,{coverTrigger:false, hover: false});
	setMapHeight();
});

window.addEventListener('resize', function () {setMapHeight();})
window.addEventListener('touchmove', function () {setMapHeight();})

function setMapHeight() {
	var window_height = window.innerHeight;
	var header_height = document.getElementById("navbar").clientHeight;
	document.getElementById("leafletmap").style.height=window_height-header_height+"px";
}
