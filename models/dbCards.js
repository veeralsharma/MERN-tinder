const mongoose = require("mongoose");

const DataBody = {
  
};

const DataSchema = mongoose.Schema(DataBody);

const Data = mongoose.model("Data", DataSchema);

module.exports = Data;
