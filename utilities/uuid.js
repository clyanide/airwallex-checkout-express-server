const { v1: uuidv1, v4: uuidv4 } = require("uuid");

exports.generateUuidV4 = () => {
  return uuidv4();
};

exports.generateUuidV1 = () => {
  return uuidv1();
};
