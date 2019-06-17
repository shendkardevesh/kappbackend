let KeyValue = require('../model/keyValue');

module.exports.save = function(data) {
  return new Promise(function(resolve, reject) {
    let toBeSave = {
      datas: data
    };
    let saveData = new KeyValue(toBeSave);
    saveData.save()
      .then(result => {
        return resolve(result);
      })
      .catch(err => {
        return reject(err);
      })
  });
}
