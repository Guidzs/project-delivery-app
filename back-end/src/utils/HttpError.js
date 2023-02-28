 class HttpException extends Error {
  constructor(status, message) {
      super(message);
      this.status = status;
  }
}
// ola você
module.exports = HttpException;
