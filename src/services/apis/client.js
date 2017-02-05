const resolveJson = response => response.json()
  .then(obj => {
    response.json = obj;
    return response;
  });

const checkStatus = response => {
  if (!response.ok) throw Error(response.json);
  return response.json;
};

const HttpClient = {
  request(method, url, options={}) {
    if (options.body !== undefined && typeof options.body !== 'string') {
      options.body = JSON.stringify(options.body);
    }

    return fetch(url, {
      method,
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers
      }
    })
    .then(resolveJson)
    .then(checkStatus);
  },

  get(url) {
    return this.request('GET', url);
  },

  post(url, body) {
    return this.request('POST', url, { body });
  }
}

export default HttpClient;
