
exports.up = function(knex, Promise) {
  return knex.schema.createTable('vanbuild', (table) => {
    table.increments();
    table.text('name');
    table.text('make');
    table.text('model');
    table.integer('year');
    table.text('color');
    table.text('flooring_material');
    table.boolean('flooring_installed').defaultTo(false);
    table.text('insulation_material');
    table.boolean('insulation_installed').defaultTo(false);
    table.text('wall_material');
    table.boolean('wall_installed').defaultTo(false);
    table.boolean('battery_house').defaultTo(false);
    table.text('battery_brand');
    table.integer('battery_size');
    table.boolean('battery_installed').defaultTo(false);
    table.boolean('inverter').defaultTo(false);
    table.text('inverter_brand');
    table.integer('inverter_size');
    table.boolean('inverter_installed').defaultTo(false);
    table.boolean('solar_power').defaultTo(false);
    table.text('solar_panel_brand');
    table.integer('solar_panel_watts');
    table.boolean('solar_installed').defaultTo(false);
    table.text('solar_controller_brand');
    table.text('solar_controller_type');
    table.boolean('solar_controller_installed').defaultTo(false);
    table.boolean('alternator_power').defaultTo(false);
    table.text('alternator_power_brand');
    table.text('alternator_power_type');
    table.boolean('alternator_power_installed').defaultTo(false);
    table.boolean('shore_power').defaultTo(false);
    table.boolean('shore_power_installed').defaultTo(false);
    table.boolean('plumbing').defaultTo(false);
    table.text('water_pump_type');
    table.text('water_pump_brand');
    table.text('water_pump_description');
    table.boolean('water_pump_installed').defaultTo(false);
    table.boolean('water_heater').defaultTo(false);
    table.text('water_heater_brand');
    table.text('water_heater_type');
    table.boolean('water_heater_installed').defaultTo(false);
    table.boolean('fresh_water_tank').defaultTo(false);
    table.integer('fresh_water_tank_capacity');
    table.boolean('fresh_water_tank_installed').defaultTo(false);
    table.boolean('grey_water_tank').defaultTo(false);
    table.integer('grey_water_tank_capacity');
    table.boolean('grey_water_tank_installed').defaultTo(false);
    table.boolean('black_water_tank').defaultTo(false);
    table.integer('black_water_tank_capacity');
    table.boolean('black_water_tank_installed').defaultTo(false);
    table.boolean('toilet').defaultTo(false);
    table.text('toilet_type');
    table.text('toilet_brand');
    table.boolean('toilet_installed').defaultTo(false);
    table.boolean('heater').defaultTo(false);
    table.text('heater_type');
    table.text('heater_brand');
    table.text('heater_model');
    table.boolean('heater_installed').defaultTo(false);
    table.boolean('ac').defaultTo(false);
    table.text('ac_brand');
    table.text('ac_model');
    table.boolean('ac_installed').defaultTo(false);
    table.boolean('fan').defaultTo(false);
    table.text('fan_brand');
    table.text('fan_model');
    table.boolean('fan_installed').defaultTo(false);
    table.boolean('fridge').defaultTo(false);
    table.text('fridge_brand');
    table.text('fridge_model');
    table.boolean('fridge_installed').defaultTo(false);
    table.boolean('lights').defaultTo(false);
    table.integer('lights_number');
    table.boolean('lights_installed').defaultTo(false);
    table.text('notes');
    table.string('img_url');
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('vanbuild');
};
