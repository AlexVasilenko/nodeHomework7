'use strict';

module.exports = function create() {
  return function validate(context, callback) {
    const request = context.request;
    const response = context.response;
    const validateResult = request.swagger.operation.validateRequest(context.request);
    if (validateResult.errors.length) {
      return response.statusCode(400).json(validateResult.errors);
    }
    callback();
  };
};
