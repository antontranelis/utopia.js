import {
  Popup
} from "./myLeaflet.js"

var EventPopup = Popup.extend()
    .setLatLng(latlng)
    .setContent('<p>This is an event</p>')
    .openOn(map);


    export {
      EventPopup,
    }
