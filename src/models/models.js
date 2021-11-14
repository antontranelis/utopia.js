class Place {
  constructor(lat, lng, title, text) {
    this.type = "place";
    this.lat = lat;
    this.lng = lng;
    this.title = title;
    this.text = text;
  }
}

class Event {
  constructor(lat, lng, title, text, start, end) {
    this.type = "event"
    this.lat = lat;
    this.lng = lng;
    this.title = title;
    this.text = text;
    this.start = start;
    this.end = end;
  }
}


class Home {
  constructor(lat, lng, title, text, contact) {
    this.type = "home";
    this.lat = lat;
    this.lng = lng;
    this.title = title;
    this.text = text;
    this.contact = contact;
  }
}

class Offer {
  constructor(lat, lng, title, text, contact) {
    this.type = "offer";
    this.lat = lat;
    this.lng = lng;
    this.title = title;
    this.text = text;
    this.contact = contact;
  }
}

class Need {
  constructor(lat, lng, title, text, contact) {
    this.type = "need";
    this.lat = lat;
    this.lng = lng;
    this.title = title;
    this.text = text;
    this.contact = contact;
  }

}



export {
  Place,
  Event,
  Offer,
  Need,
  Home
}
