'use strict';

module.exports = function create() {
  return function parseParams(context, next) {
    const params = context.request.swagger.params;
    Object.keys(params).forEach(paramKey => {
      context.request.params[paramKey] = params[paramKey].raw;
    });
    next();
  };
};
