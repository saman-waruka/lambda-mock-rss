"use strict";
var fs = require("fs");

module.exports.hello = async (event) => {
  const file = await fs.readFileSync("mock-rss.xml", "utf8");
  console.log({ file });
  console.log({ event });
  return {
    statusCode: 200,
    body: file,
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
module.exports.rss2 = async (event) => {
  const file = await fs.readFileSync("mock-rss-2.xml", "utf8");
  console.log({ file });
  console.log({ event });

  return {
    statusCode: 200,
    body: file,
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};

module.exports.rss3 = async (event) => {
  const file = await fs.readFileSync("mock-rss-3.xml", "utf8");
  console.log({ file });
  console.log({ event });

  return {
    statusCode: 200,
    body: file,
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
module.exports.rss4 = async (event) => {
  const file = await fs.readFileSync("mock-rss-4.xml", "utf8");
  console.log({ file });
  console.log({ event });

  return {
    statusCode: 200,
    body: file,
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
module.exports.rss5 = async (event) => {
  const file = await fs.readFileSync("mock-rss-5.xml", "utf8");
  console.log({ file });
  console.log({ event });

  return {
    statusCode: 200,
    body: file,
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
