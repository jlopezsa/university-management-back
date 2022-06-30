const mongoose = require('mongoose');

const StudentsSchema = new mongoose.Schema({
  cedula: {
    type: String,
    unique: true,
  },
  name: {
    type: String,
    unique: false,
  },
  email: {
    type: String,
    unique: true,
  },
  phone: {
    type: Number,
  },
},
{
  timestamps: true,
  versionKey: false,
})

const Students = mongoose.model('Students', StudentsSchema);
module.exports = Students;
