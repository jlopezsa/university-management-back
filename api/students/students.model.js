const mongoose = require('mongoose');

const StudentsSchema = new mongoose.Schema({
  cedula: {
    type: String,
    unique: true,
    required: [true, "Cedula is required"],
  },
  name: {
    type: String,
    unique: false,
  },
  email: {
    type: String,
    unique: false,
    required: [true, "Email is required"],
  },
  phone: {
    type: String,
  },
},
{
  timestamps: true,
  versionKey: false,
})

const Students = mongoose.model('Students', StudentsSchema);
module.exports = Students;
