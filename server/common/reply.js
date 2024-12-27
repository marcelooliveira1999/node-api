class Reply {
  #response = null;

  constructor(response) {
    this.statusCode = 200;
    this.#response = response;
  }

  status(code) {
    this.statusCode = code;

    return this;
  }

  send(message) {
    this.#response.statusCode = this.statusCode;
    this.#response.setHeader('content-type', 'text/plain');
    this.#response.end(message);
  }

  json(data) {
    this.#response.setHeader('content-type', 'application/json');
    this.#response.statusCode = this.statusCode;
    this.#response.end(JSON.stringify(data));
  }
}

module.exports = Reply;
