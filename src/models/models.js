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
  title = "";
  text = "";
  start = "";
  end = "";
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



export { Place,Event }
