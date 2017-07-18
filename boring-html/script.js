fetch('https://steak-api.herokuapp.com/api/steak')
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log('teh data', data);
  });
