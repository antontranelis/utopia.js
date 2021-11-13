class Place {
  constructor(lat, lng, title, text) {
    this.lat = lat;
    this.lng = lng;
    this.title = title;
    this.text = text;
  }
}

class Event {
  constructor(lat, lng, title, text, start, end) {
    this.lat = lat;
    this.lng = lng;
    this.title = title;
    this.text = text;
    this.start = start;
    this.end = end;
  }
}



export { Place,Event }
