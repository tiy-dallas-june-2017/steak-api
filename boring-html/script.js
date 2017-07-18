fetch('https://steak-api.herokuapp.com/api/steak')
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log('teh data', data);

    let html = '';
    for (let i = 0; i < data.levels.length; i++) {

      html += `<li>${data.levels[i].name}
        <img src="${data.levels[i].imageUrl}" />
      </li>`

    }

    let list = document.querySelector('#steak-list');
    list.innerHTML = html;

  });
