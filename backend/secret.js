const secrets = {
  // dbUri: "mongodb://jelo:a9bc839993@ds151382.mlab.com:51382/jelotest"
  // dbUri: "mongodb://dbUser:*devcode@clusterew1-uogmd.mongodb.net/test?retryWrites=true&w=majority"
  dbUri: "mongodb+srv://dbUser:*devcode@clusterew1-uogmd.mongodb.net/test"
};

const getSecret = key => secrets[key];

module.exports = getSecret;
