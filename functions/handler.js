"use strict";

module.exports.init = async (event) => {
  console.log(JSON.stringify(event));
  return true;
};
