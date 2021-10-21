import {
  Popup,
  setOptions
} from "../Libraries/myLeaflet.js"

let options = {
  maxHeight: 377,
  minWidth: 275,
  maxWidth:275,
  keepInView: false,
  autoPanPaddingTopLeft: [0,5]
}

let EventPopup = Popup.extend({

  initialize: function(feature) {
      setOptions(this, options);
      this.setContent(`<b>${feature.properties.name}</b><br>${feature.properties.text}`);

  }
})

let PlacePopup = Popup.extend({

  initialize: function(feature) {
      setOptions(this, options);
      this.setContent(`<b>${feature.properties.name}</b><br>${feature.properties.text}`);
  }
})

let ProfilePopup = Popup.extend({

  initialize: function(feature) {
      setOptions(this, options);
      this.setContent(`<b>${feature.properties.name}</b><br>${feature.properties.text}`);
  }
})



    export {
      EventPopup,
      PlacePopup,
      ProfilePopup
    }
