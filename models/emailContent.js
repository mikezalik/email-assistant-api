const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EmailContentSchema = new Schema({
  subjectLine: {
    type: String,
    required: true,
  },
  emailContent: {
    type: String,
    required: true,
  },
  linkToInformation: {
    type: String,
    require: false,
  },
  version: {
    type: Number,
    require: false,
  },
});

module.exports = emailContent = mongoose.model(
  "emailContent",
  EmailContentSchema
);
