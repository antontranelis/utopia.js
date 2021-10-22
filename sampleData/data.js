let places = {
    "type": "FeatureCollection",
    "features": [{
        "type": "Feature",
        "properties": {
            "name": "Hortus",
            "text": "Gartenprojekt startet dieses Frühjahr"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [10.266479, 52.591193]
        },
        "id": "4e9207db-3c79-4586-b21d-871c6d82917e"
    }]
}

let events = {
    "type": "FeatureCollection",
    "features": [{
        "type": "Feature",
        "properties": {
            "name": "Treffen",
            "text": "Kommenden Sammstag Lagerfeuer und Talking Circle",
            "start": "",
            "end": ""
        },
        "geometry": {
            "type": "Point",
            "coordinates": [7.614416, 51.588577]
        },
        "id": "3eb9d2c7-2962-4ae1-ae6c-55ef13bfe72c"
    }]
}

let profiles = {
    "type": "FeatureCollection",
    "features": [{
        "type": "Feature",
        "properties": {
            "name": "Anton",
            "text": "ich bin 34 Jahre und wohne in Bad Salzschlirf bei Fulda. Bin seit letztem Jahr aus Kolumbien zurück, wo ich drei Jahre in einer Gemeinschaft mitten in der Natur gelebt habe. Die Prinzipien des Zusammenlebens waren an #Rainbow Gatherings angelehnt. Die Zeit dort war sehr inspirierend. Letzten Sommer in meine Heimat zurückgekehrt und glaube, dass auch hier ein Leben in diesem Bewusstsein und Verbindung mit der Natur machbar ist.",
            "color": "#000",
            "avatar": "bees_2CNIRgb.png"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [9.550082, 53.564049]
        },
        "id": "674eb172-8bcc-4331-b388-dcdfbb1733e9"
    }]
}
let resources = {}
let tasks = {}
let hashtags = {}

export {places, events, profiles};
