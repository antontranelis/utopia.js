import {
  Popup,
  setOptions
} from "../Libraries/myLeaflet.js"

let options = {
  maxHeight: 377,
  minWidth: 275,
  maxWidth: 275,
  keepInView: false,
  autoPanPaddingTopLeft: [0, 5]
}

let EventPopup = Popup.extend({
  initialize: function(event) {
    this.type = "viewEvent";
    this.id =event._['#'];
    setOptions(this, options);
    this.setContent(`
      <ul id='popup_dropdown' class='dropdown-content'>
        <li id="edit_event"><a><i class="material-icons prefix">edit</i></a></li>
        <li id="delete_event"><a><i class="material-icons prefix">delete</i></a></li>
      </ul>
      <div class="row">
        <div class="col s10">
          <p style="font-size: 180%; margin-bottom:0px; margin-top:8px;">${event.title}</p>
        </div>
        <div class="col s2">
          <a class="dropdown-trigger popup-dropdown-trigger" data-target='popup_dropdown'><i style="margin-top: 12px;" class="material-icons">more_vert</i></a>
        </div>
        <div style="display: flex; align-items: center; justify-content: space-between;" class="col s6">
          <div>
            <i style="color: #aaa; vertical-align:middle;" class="material-icons prefix">event</i>
            <span style="margin:0px; vertical-align:middle;">&nbsp;${new Date(event.start).toISOString().substring(0, 10)}</span>
          </div>
          <span style="margin-right: -5px;">-</span>
        </div>
        <div style="display: flex; align-items: center;" class="col s6">
          <div>
            <i style="color: #aaa; vertical-align:middle;" class="material-icons prefix">event</i>
            <span style="margin:0px; vertical-align:middle;">&nbsp;${new Date(event.end).toISOString().substring(0, 10)}</span>
          </div>
        </div>
        <div class="col s12">
          <p style="white-space: pre-line">${replaceURLs(event.text)}</p>
        </div>
      </div>
      `);
  }
})

let PlacePopup = Popup.extend({
  initialize: function(place) {
    this.id =place._['#'];
    this.type = "viewPlace"
    setOptions(this, options);
    this.setContent(`
      <ul id='popup_dropdown' class='dropdown-content'>
        <li id="edit_place"><a><i class="material-icons prefix">edit</i></a></li>
        <li id="delete_place"><a><i class="material-icons prefix">delete</i></a></li>
      </ul>
      <div class="row">
        <div class="col s10">
          <p style="font-size: 180%; margin-bottom:0px; margin-top:8px;">${place.title}</p>
        </div>
        <div class="col s2">
          <a class="dropdown-trigger popup-dropdown-trigger" data-target='popup_dropdown'><i style="margin-top: 12px;" class="material-icons">more_vert</i></a>
        </div>
        <div class="col s12">
          <p style="white-space: pre-line">${replaceURLs(place.text)}</p>
        </div>
      </div>
      `);
  }
})

let ProfilePopup = Popup.extend({
  initialize: function(feature) {
    setOptions(this, options);
    this.setContent(`<b>${feature.properties.name}</b><br>${feature.properties.text}`);
  }
})

let EditPlacePopup = Popup.extend({
  initialize: function(latlng) {
    this.type = "editPlace"
    setOptions(this, options)
    this.setLatLng(latlng)
    this.setContent(`
      <form id="form">
        <div class="row">
          <div class="col s12">
            <div class="input-field">
              <input id="id_title" name="title" type="text" class="">
              <label for="id_title">Title</label>
            </div>
          </div>
          <div class="col s12">
            <div class="input-field" style="margin:0">
              <textarea id="id_text" name="text" class="materialize-textarea"></textarea>
              <label for="id_text">#Hash, URL, Contact, Text, ...</label>
            </div>
          </div>
            <ul id="id_tags" class="reset-checkbox">
              <div class="col s6">
              </div>
            </ul>
          <div class="col s12">
            <input type="number" id="lng" name="lng" style="display: none;" step="any" value="${latlng.lng}">
            <input type="number" id="lat" name="lat" style="display: none;" step="any" value="${latlng.lat}">
            <input id="type" name="type" style="display: none;" step="any" value="place">
            <input id="place_id" name="place_id" style="display: none;" step="any">
            <br>
            <div style="display: flex;justify-content: center;">
              <button id="submitPlace" class="waves-effect waves-light btn brown" style="color:#fff" type="Submit">Save</button>
            </div>
          </div>
        </div>
      </form>
    `);
  }
})

let EditEventPopup = Popup.extend({
  initialize: function(latlng) {
    this.type = "editPlace"
    setOptions(this, options)
    this.setLatLng(latlng)
    this.setContent(`
      <form id="form">
        <div class="row">
          <div class="col s12">
            <div class="input-field">
              <input id="id_title" name="title" type="text" class="">
              <label for="id_title">Title</label>
            </div>
          </div>
          <div class="col s12">
            <div class="input-field" style="margin:0">
              <textarea id="id_text" name="text" class="materialize-textarea"></textarea>
              <label for="id_text">#Hash, URL, Contact, Text, ...</label>
            </div>
          </div>
          <div class="col s6">
            <div class="input-field" style="margin:0">
              <i style="color: #aaa; font-size:24" class="material-icons prefix">event</i>
              <input style="height: 2.7rm; width: calc(100% - 2.3rem); margin-left: 2.3rem;" id="id_date_start" name="start" type="datetime" class="datepicker" required>
            </div>
          </div>
          <div class="col s6">
            <div class="input-field" style="margin:0">
              <i style="color: #aaa; font-size:24" class="material-icons prefix">event</i>
              <input style="height: 2.7rm; width: calc(100% - 2.3rem); margin-left: 2.3rem;" id="id_date_end" name="end" type="datetime" class="datepicker" required>
            </div>
          </div>
            <ul id="id_tags" class="reset-checkbox">
              <div class="col s6">
              </div>
            </ul>
          <div class="col s12">
            <input type="number" id="lng" name="lng" style="display: none;" step="any" value="${latlng.lng}">
            <input type="number" id="lat" name="lat" style="display: none;" step="any" value="${latlng.lat}">
            <input id="type" name="type" style="display: none;" step="any" value="event">
            <input id="place_id" name="place_id" style="display: none;" step="any">
            <br>
            <div style="display: flex;justify-content: center;">
              <button id="submitPlace" class="waves-effect waves-light btn brown" style="color:#fff" type="Submit">Save</button>
            </div>
          </div>
        </div>
      </form>
    `);
  },
  initDatepicker: function() {
    var elems = document.querySelectorAll(".datepicker");
    var instances = M.Datepicker.init(elems, {container: "body", autoClose: true, format: 'yyyy-mm-dd'});
  }
})

function replaceURLs(message) {
  if(!message) return;

  var urlRegex = /(^| )(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,10}(:[0-9]{1,10})?(\/.*)?$/gm;
  message = message.replace(urlRegex, function (url) {
    var hyperlink = url.replace(' ','');
    if (!hyperlink.match('^https?:\/\/')) {
      hyperlink = 'http://' + hyperlink;
    }
    return '<a href="' + hyperlink + '" target="_blank" rel="noopener noreferrer">' + url + '</a>'
  });

  var mailRegex = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi;
  message = message.replace(mailRegex, function (mail) {
    return '<a href="mailto:' + mail + '">' + mail + '</a>'
  });

  return message;
}



export {
  EventPopup,
  PlacePopup,
  ProfilePopup,
  EditPlacePopup,
  EditEventPopup,
}
