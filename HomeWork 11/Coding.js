let promise = new Promise(function(resolve, reject) {
    resolve("done");
  });
   
  promise
  .then(alert)
  .catch(function (err) {
     console.log(err);
     throw err;
  });