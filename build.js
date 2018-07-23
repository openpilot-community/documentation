// DEPENDENCIES
const Airtable = require('airtable');
const read = require('read-file');
const inflection = require( 'inflection' );
const mkdirp = require("mkdirp");
const rimraf = require('rimraf')
const fs = require("fs");
const Handlebars = require("handlebars");
const helpers = require('handlebars-helpers')({
  handlebars: Handlebars
});
const airtable = new Airtable({apiKey: process.env.AIRTABLE_KEY}).base('appOHXPnlXEfqnWLd');
const _ = require("lodash");
const tocTemplate = Handlebars.compile(read.sync("./TABLE_OF_CONTENTS.handlebars", 'utf8'));
const makeTemplate = Handlebars.compile(read.sync("./.templates/vehicle-make.handlebars", 'utf8'));
const modelTemplate = Handlebars.compile(read.sync("./.templates/vehicle-model.handlebars", 'utf8'));
const vehicleTemplate = Handlebars.compile(read.sync("./.templates/vehicle.handlebars", 'utf8'));
const vehiclesTemplate = Handlebars.compile(read.sync("./.templates/vehicles.handlebars", 'utf8'));

// DATA TABLES
const makesTable = airtable('Vehicle Makes');
const modelsTable = airtable('Vehicle Models');
const vehiclesTable = airtable('Vehicles');

const makeSlug = function(str) {
  return inflection.dasherize(str).replace('(','').replace(')','').toLowerCase();
}

const clean = function() {
  // rimraf.sync('./vehicles/');
}

// FETCH METHODS
const getModels = function() {
  return modelsTable.select({
    view: "All Models"
  }).all().then((models) => {
    let vehicObject = {};

    models.forEach((model) => {
      let fields = model._rawJson.fields;
      fields.slug = makeSlug(fields.Name);
      vehicObject[model.id] = fields;
      // return fields;
    })

    return vehicObject;
  }).catch((err) => {
    console.log(err);
  });
}

const getMakes = function() {
  return makesTable.select({
    view: "All Compatible"
  }).all().then((makes) => {
    console.log(makes);
    return makes.map((make) => {
      let fields = make._rawJson.fields;
      fields.slug = makeSlug(fields.Name);
      
      return fields;
    });
  }).catch((err) => {
    console.log(err);
  });
}

const getVehicles = function() {
  return vehiclesTable.select({
    view: "All Vehicles Ungrouped"
  }).all().then((vehicles) => {
    let vehicObject = {};

    vehicles.forEach((vehicle) => {
      let fields = vehicle._rawJson.fields;
      // console.log(fields);
      fields.slug = makeSlug(fields.FullName);
      if (fields.PRRepoNames && fields.PRRepoNames.length) {
        fields.prLinks = fields.PRRepoNames.map((prName) => {
          return `- [${prName}](https://github.com/${prName})`;
        }).join("\n");
      }
      vehicObject[vehicle.id] = fields;
      // return fields;
    })

    return vehicObject;
  }).catch((err) => {
    console.log(err);
  });
}

// RENDER METHODS
const renderTocTemplate = (makes) => {
  var output = tocTemplate(makes);
  fs.writeFileSync(`./TABLE_OF_CONTENTS.md`,output);
}

const renderVehiclesTemplate = (makes) => {
  var output = vehiclesTemplate(makes);
  fs.writeFileSync(`./vehicles/README.md`,output);
}

const renderModelTemplate = (model) => {
  var output = modelTemplate(model);
  mkdirp.sync(`./vehicles/${model.make.slug}/${model.slug}/`);
  fs.writeFileSync(`./vehicles/${model.make.slug}/${model.slug}.md`,output);
}

const renderVehicleTemplate = (vehicle) => {
  var output = vehicleTemplate(vehicle);
  mkdirp.sync(`./vehicles/${vehicle.make.slug}/${vehicle.model.slug}`);
  fs.writeFileSync(`./vehicles/${vehicle.make.slug}/${vehicle.model.slug}/${vehicle.slug}.md`,output);
}

const renderMakeTemplate = (make) => {
  var output = makeTemplate(make);
  mkdirp.sync(`./vehicles/${make.slug}/`);
  fs.writeFileSync(`./vehicles/${make.slug}/README.md`,output);
}

const renderTemplates = (data) => {
  const makes = data.makes;
  const vehicles = data.vehicles;
  const models = data.models;

  //CLEAN FIRST
  clean();

  makes.forEach((make) => {
    make.Models = make.Models.map((modelId) => {
      var model = models[modelId];
      model.make = make;
      model.Vehicles = model.Vehicles.map((vehicleId) => {
        var vehicle = vehicles[vehicleId];
        vehicle.model = model;
        return vehicle;
      });
      return model;
    });
    make.Models = _.orderBy(make.Models,['Name'], ['asc']);

    make.Vehicles = make.Vehicles.map((vehicleId) => {
      var vehicle = vehicles[vehicleId];
      vehicle.make = make;
      return vehicle;
    });
    
    make.Vehicles = _.orderBy(make.Vehicles,['Model','Year'], ['asc','asc']);

    

    renderMakeTemplate(make);

    make.Models.forEach((model) => {
      renderModelTemplate(model);
    });

    make.Vehicles.forEach((vehicle) => {
      renderVehicleTemplate(vehicle);
    });
  });

  renderVehiclesTemplate({
    makes
  });

  renderTocTemplate({
    makes
  });
}

// CONCAT ALL THE DATA
Promise.all([getMakes(),getVehicles(), getModels()]).then((responses) => {
  return {
    makes: responses[0],
    vehicles: responses[1],
    models: responses[2]
  };
}).catch((e) => {
  console.log(e);
}).then(renderTemplates);