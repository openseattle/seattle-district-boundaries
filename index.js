var fs = require('fs');
var jsdom = require('jsdom').jsdom;
var toGeoJSON = require('togeojson');

var kmlFiles = fs.readdirSync('kml');

kmlFiles.forEach(function (name, i) {
  var kml = jsdom(fs.readFileSync('kml/' + name, 'utf8'));
  var json = toGeoJSON.kml(kml);
  var filename = name.substring(0, name.length - 4) + '.json';
  fs.writeFileSync('json/' + filename, JSON.stringify(json));
});
