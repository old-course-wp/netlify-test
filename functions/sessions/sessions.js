const { create } = require('./methods');
const { db } = require('../../libs/middleware');

const sessionsHandler = async (event) => {
  if (event.httpMethod === 'POST') {
    return create(event);
  }

  return {
    statusCode: 400,
  };
};

exports.handler = db(sessionsHandler);
