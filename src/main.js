class Request {
  constructor({ baseUrl, headers }) {
    this.baseUrl = baseUrl;
    this.headers = headers;
  }

  get(url, config) {

  }

  post(url, config) {

  }
}

const request = new Request({
  baseUrl: 'http://localhost:3000'
});