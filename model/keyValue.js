let mongoose = require('mongoose');


let keyValueSchema = new mongoose.Schema({
  value: {
    type: String
  },
  key: {
    type: String
  },
  _id: false
});

// let obj = {
//   value: {
//     type: String
//   },
//   key: {
//     type: String
//   }
// };

let Datas = new mongoose.Schema({
  datas: [keyValueSchema]
});

module.exports = mongoose.model('keyValue', Datas);