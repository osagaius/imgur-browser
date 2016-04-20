import Fetch from 'whatwg-fetch';
var rootUrl = 'https://api.imgur.com/3/';
var apiKey = '4bb380e4df4fb2c';

class Api extends React.Component {
  get: function(url) {
    return fetch(rootUrl + url, {
      headers: {
        'Authorization' : 'Client-ID ' + apiKey
      }
    })
    .then(function(response) {
      return response.json();
    })
  }
};

export default Api;
