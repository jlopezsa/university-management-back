const mongoose = require('mongoose');

const ProgramSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: [true, "Name is required"],
  },
  description: {
    type: String,
    unique: false,
  },
},
{
  timestamps: true,
  versionKey: false,
})

const Program = mongoose.model('Program', ProgramSchema);
module.exports = Program;
