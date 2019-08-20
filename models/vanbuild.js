const mongoose = require('mongoose')

const vanbuildSchema = mongoose.Schema({
  userId: {type: String, required: true},
  name: String,
  make: String,
  model: String,
  year: Number,
  color: String,
  flooring: [{
    material: [String],
    installed: Boolean
  }],
  insulation: [{
    material: [String],
    installed: Boolean
  }],
  walls: [{
    material: [String],
    installed: Boolean
  }],
  electrical: [{
    battery: [{
      housebattery: Boolean,
      brand: String,
      size: Number,
      installed: Boolean
    }],
    inverter: [{
      inverter: Boolean,
      brand: String,
      size: Number,
      installed: Boolean
    }],
    solar: [{
      solar: Boolean,
      panels: [{
        brand: String,
        watts: Number,
        installed: Boolean
      }],
      controller: [{
        brand: String,
        type: String,
        installed: Boolean
      }],
    alternator: [{
      alternator: Boolean,
      brand: String,
      type: String,
      installed: Boolean
    }],
    shore: [{
      shore: Boolean,
      installed: Boolean
    }],
  }],
  plumbing: [{
    plumbing: Boolean,
    pump: [{
      type: String,
      brand: String,
      description: String,
      installed: Boolean
    }],
    hotwater: [{
      heater: Boolean,
      brand: String,
      type: String,
      installed: Boolean
    }],
    freshwater: [{
      freshwater: Boolean,
      tanksize: Number,
      installed: Boolean
    }],
    greywater: [{
      greywater: Boolean,
      tanksize: Number,
      installed: Boolean
    }],
    blackwater: [{
      blackwater: Boolean,
      tanksize: Number,
      installed: Boolean
    }],
    toilet: [{
      toilet: Boolean,
      type: String,
      brand: String,
      installed: Boolean
    }]
  }],
  heat: [{
    heater: Boolean,
    type: String,
    brand: String,
    model: String,
    installed: Boolean
  }],
  cool: [{
    ac: [{
      ac: Boolean,
      brand: String,
      model: String,
      installed: Boolean
    }],
    fan: [{
      fan: Boolean,
      brand: String,
      model: String,
      installed: Boolean
    }]
  }],
  refrigerator: [{
    refrigerator: Boolean,
    brand: String,
    model: String,
    installed: Boolean
  }],
  lights: [{
    lights: Boolean,
    number: Number,
    installed: Boolean
  }],
  notes: String,
  images: [String]
})

module.exports = mongoose.model('Vanbuild', vanbuildSchema)
