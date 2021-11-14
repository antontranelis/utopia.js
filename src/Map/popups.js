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
  initialize: function(item) {
    this.type = "view";
    this.item = item;
    setOptions(this, options);
    this.setContent(`
      <ul id='popup_dropdown' class='dropdown-content'>
        <li id="editButton"><a><i class="material-icons prefix">edit</i></a></li>
        <li id="deleteButton"><a><i class="material-icons prefix">delete</i></a></li>
      </ul>
      <div class="row">
        <div class="col s10">
          <p style="font-size: 180%; margin-bottom:0px; margin-top:8px;">${item.title}</p>
        </div>
        <div class="col s2">
          <a class="dropdown-trigger popup-dropdown-trigger" data-target='popup_dropdown'><i style="margin-top: 12px;" class="material-icons">more_vert</i></a>
        </div>
        <div style="display: flex; align-items: center; justify-content: space-between;" class="col s6">
          <div>
            <i style="color: #aaa; vertical-align:middle;" class="material-icons prefix">event</i>
            <span style="margin:0px; vertical-align:middle;">&nbsp;${new Date(item.start).toISOString().substring(0, 10)}</span>
          </div>
          <span style="margin-right: -5px;">-</span>
        </div>
        <div style="display: flex; align-items: center;" class="col s6">
          <div>
            <i style="color: #aaa; vertical-align:middle;" class="material-icons prefix">event</i>
            <span style="margin:0px; vertical-align:middle;">&nbsp;${new Date(item.end).toISOString().substring(0, 10)}</span>
          </div>
        </div>
        <div class="col s12">
          <p style="white-space: pre-line">${replaceURLs(item.text)}</p>
        </div>
      </div>
      `);
  }
})

let PlacePopup = Popup.extend({
  initialize: function(item) {
    this.item = item;
    this.type = "view"
    setOptions(this, options);
    this.setContent(`
      <ul id='popup_dropdown' class='dropdown-content'>
        <li id="editButton"><a><i class="material-icons prefix">edit</i></a></li>
        <li id="deleteButton"><a><i class="material-icons prefix">delete</i></a></li>
      </ul>
      <div class="row">
        <div class="col s10">
          <p style="font-size: 180%; margin-bottom:0px; margin-top:8px;">${item.title}</p>
        </div>
        <div class="col s2">
          <a class="dropdown-trigger popup-dropdown-trigger" data-target='popup_dropdown'><i style="margin-top: 12px;" class="material-icons">more_vert</i></a>
        </div>
        <div class="col s12">
          <div style="white-space: pre-line !important;">${item.text}</div>
        </div>
      </div>
      `);
  }
})

let HomePopup = Popup.extend({
  initialize: function(item) {
    this.item = item;
    this.type = "view"
    setOptions(this, options);
    this.setContent(`
      <ul id='popup_dropdown' class='dropdown-content'>
        <li id="editButton"><a><i class="material-icons prefix">edit</i></a></li>
        <li id="deleteButton"><a><i class="material-icons prefix">delete</i></a></li>
      </ul>
      <div class="row">
        <div class="col s10">
          <p style="font-size: 180%; margin-bottom:0px; margin-top:8px;">${item.title}</p>
        </div>
        <div class="col s2">
          <a class="dropdown-trigger popup-dropdown-trigger" data-target='popup_dropdown'><i style="margin-top: 12px;" class="material-icons">more_vert</i></a>
        </div>
        <div class="col s12">
          <div style="white-space: pre-line !important;">${item.text}</div>
        </div>
      </div>
      `);
  }
})

let OfferPopup = Popup.extend({
  initialize: function(item) {
    this.item = item;
    this.type = "view"
    setOptions(this, options);
    this.setContent(`
      <ul id='popup_dropdown' class='dropdown-content'>
        <li id="editButton"><a><i class="material-icons prefix">edit</i></a></li>
        <li id="deleteButton"><a><i class="material-icons prefix">delete</i></a></li>
      </ul>
      <div class="row">
        <div class="col s10">
          <p style="font-size: 180%; margin-bottom:0px; margin-top:8px;">${item.title}</p>
        </div>
        <div class="col s2">
          <a class="dropdown-trigger popup-dropdown-trigger" data-target='popup_dropdown'><i style="margin-top: 12px;" class="material-icons">more_vert</i></a>
        </div>
        <div class="col s12">
          <div style="white-space: pre-line !important;">${item.text}</div>
        </div>
      </div>
      `);
  }
})

let NeedPopup = Popup.extend({
  initialize: function(item) {
    this.item = item;
    this.type = "view"
    setOptions(this, options);
    this.setContent(`
      <ul id='popup_dropdown' class='dropdown-content'>
        <li id="editButton"><a><i class="material-icons prefix">edit</i></a></li>
        <li id="deleteButton"><a><i class="material-icons prefix">delete</i></a></li>
      </ul>
      <div class="row">
        <div class="col s10">
          <p style="font-size: 180%; margin-bottom:0px; margin-top:8px;">${item.title}</p>
        </div>
        <div class="col s2">
          <a class="dropdown-trigger popup-dropdown-trigger" data-target='popup_dropdown'><i style="margin-top: 12px;" class="material-icons">more_vert</i></a>
        </div>
        <div class="col s12">
          <div style="white-space: pre-line !important;">${item.text}</div>
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
  initialize: function(item) {
    this.type = "edit"
    this.item = item
    setOptions(this, options)
    this.setLatLng([item.lat,item.lng])
    this.setContent(`
      <form id="placeform">
        <div class="row">
          <div class="col s12">
            <div class="input-field">
              <input id="id_title" name="title" type="text" class="" value="${item.title||""}">
              <label for="id_title">Title</label>
            </div>
          </div>
          <div class="col s12">
            <div class="input-field" style="margin:0">
              <textarea id="id_text" name="text" class="materialize-textarea">${item.text||""}</textarea>
              <label for="id_text">#Hash, URL, Contact, Text, ...</label>
            </div>
          </div>
            <ul id="id_tags" class="reset-checkbox">
              <div class="col s6">
              </div>
            </ul>
          <div class="col s12">
            <input type="number" id="lng" name="lng" style="display: none;" step="any" value="${item.lng}">
            <input type="number" id="lat" name="lat" style="display: none;" step="any" value="${item.lat}">
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

let EditHomePopup = Popup.extend({
  initialize: function(item) {
    this.type = "edit"
    this.item = item
    setOptions(this, options)
    this.setLatLng([item.lat,item.lng])
    this.setContent(`
      <form id="homeform">
        <div class="row">
          <div class="col s12">
            <div class="input-field">
              <input id="id_title" name="title" type="text" class="" value="${item.title||""}">
              <label for="id_title">Title</label>
            </div>
          </div>
          <div class="col s12">
            <div class="input-field" style="margin:0">
              <textarea id="id_text" name="text" class="materialize-textarea">${item.text||""}</textarea>
              <label for="id_text">#Hash, URL, Contact, Text, ...</label>
            </div>
          </div>
            <ul id="id_tags" class="reset-checkbox">
              <div class="col s6">
              </div>
            </ul>
          <div class="col s12">
            <input type="number" id="lng" name="lng" style="display: none;" step="any" value="${item.lng}">
            <input type="number" id="lat" name="lat" style="display: none;" step="any" value="${item.lat}">
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

let EditOfferPopup = Popup.extend({
  initialize: function(item) {
    this.type = "edit"
    this.item = item
    setOptions(this, options)
    this.setLatLng([item.lat,item.lng])
    this.setContent(`
      <form id="offerform">
        <div class="row">
          <div class="col s12">
            <div class="input-field">
              <input id="id_title" name="title" type="text" class="" value="${item.title||""}">
              <label for="id_title">Title</label>
            </div>
          </div>
          <div class="col s12">
            <div class="input-field" style="margin:0">
              <textarea id="id_text" name="text" class="materialize-textarea">${item.text||""}</textarea>
              <label for="id_text">#Hash, URL, Contact, Text, ...</label>
            </div>
          </div>
            <ul id="id_tags" class="reset-checkbox">
              <div class="col s6">
              </div>
            </ul>
          <div class="col s12">
            <input type="number" id="lng" name="lng" style="display: none;" step="any" value="${item.lng}">
            <input type="number" id="lat" name="lat" style="display: none;" step="any" value="${item.lat}">
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

let EditNeedPopup = Popup.extend({
  initialize: function(item) {
    this.type = "edit"
    this.item = item
    setOptions(this, options)
    this.setLatLng([item.lat,item.lng])
    this.setContent(`
      <form id="needform">
        <div class="row">
          <div class="col s12">
            <div class="input-field">
              <input id="id_title" name="title" type="text" class="" value="${item.title||""}">
              <label for="id_title">Title</label>
            </div>
          </div>
          <div class="col s12">
            <div class="input-field" style="margin:0">
              <textarea id="id_text" name="text" class="materialize-textarea">${item.text||""}</textarea>
              <label for="id_text">#Hash, URL, Contact, Text, ...</label>
            </div>
          </div>
            <ul id="id_tags" class="reset-checkbox">
              <div class="col s6">
              </div>
            </ul>
          <div class="col s12">
            <input type="number" id="lng" name="lng" style="display: none;" step="any" value="${item.lng}">
            <input type="number" id="lat" name="lat" style="display: none;" step="any" value="${item.lat}">
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
  initialize: function(item) {
    this.type = "edit"
    this.item = item
    setOptions(this, options)
    this.setLatLng([item.lat,item.lng])
    this.setContent(`
      <form id="eventform">
        <div class="row">
          <div class="col s12">
            <div class="input-field">
              <input id="id_title" name="title" type="text" class="" value="${item.title||""}">
              <label for="id_title">Title</label>
            </div>
          </div>
          <div class="col s12">
            <div class="input-field" style="margin:0">
              <textarea id="id_text" name="text" class="materialize-textarea">${item.text||""}</textarea>
              <label for="id_text">#Hash, URL, Contact, Text, ...</label>
            </div>
          </div>
          <div class="col s6">
            <div class="input-field" style="margin:0">
              <i style="color: #aaa; font-size:24" class="material-icons prefix">event</i>
              <input style="height: 2.7rm; width: calc(100% - 2.3rem); margin-left: 2.3rem;" id="id_date_start" name="start" type="datetime" class="datepicker" value="${item.start||""}" required>
            </div>
          </div>
          <div class="col s6">
            <div class="input-field" style="margin:0">
              <i style="color: #aaa; font-size:24" class="material-icons prefix">event</i>
              <input style="height: 2.7rm; width: calc(100% - 2.3rem); margin-left: 2.3rem;" id="id_date_end" name="end" type="datetime" class="datepicker" value="${item.end||""}"required>
            </div>
          </div>
            <ul id="id_tags" class="reset-checkbox">
              <div class="col s6">
              </div>
            </ul>
          <div class="col s12">
            <input type="number" id="lng" name="lng" style="display: none;" step="any" value="${item.lng}">
            <input type="number" id="lat" name="lat" style="display: none;" step="any" value="${item.lat}">
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
  HomePopup,
  OfferPopup,
  NeedPopup,
  EditPlacePopup,
  EditEventPopup,
  EditHomePopup,
  EditOfferPopup,
  EditNeedPopup,
}
