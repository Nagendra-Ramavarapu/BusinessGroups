exports.getErrorMessage = function(err, req, res) {
  var message = "";
  if (err.code) {
    switch (err.code) {
      case 11000:
      case 11001:
        message = getUniqueErrorMessage(err);
        break;
      default:
        message =
          "Something went wrong. We have logged this issue and will correct";
    }
  } else {
    for (var errName in err.errors) {
      if (err.errors[errName].message) message = err.errors[errName].message;
    }
  }
  //log the error to Mongo
  ErrorLog.create(err, req, res);
  return message;
};

var getUniqueErrorMessage = function(err) {
  var output;

  try {
    var fieldName = err.err.substring(
      err.err.lastIndexOf(".$") + 2,
      err.err.lastIndexOf("_1")
    );
    output =
      fieldName.charAt(0).toUpperCase() +
      fieldName.slice(1) +
      " already exists";
  } catch (ex) {
    output = "Unique field already exists";
  }
  return output;
};
