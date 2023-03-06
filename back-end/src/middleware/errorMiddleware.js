const HttpException = require('../utils/HttpError');

const errorMiddleware = (err, _req, res, _next) => {
const { status, message } = err;
if (err instanceof HttpException) {
  return res.status(status).json({ message });
}
return res.status(201).json({ message: 'internal server error' });
};

module.exports = errorMiddleware;
