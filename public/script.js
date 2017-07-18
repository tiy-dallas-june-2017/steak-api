(function () {
  var theList = document.querySelector('.steak-list');

  var promise = $.ajax({
    url:'http://localhost:5008/api/steak'
  });

promise.done(function(data) {
  console.log('data is back', data);

  for (var i = 0; i <data.levels.length; i++) {
    var typeOf = data.levels[i];
    console.log('the name', typeOf);

    var li = document.createElement('li');
    li.textContent = typeOf.name;

    theList.appendChild(li);

    var descriptionP = document.createElement('p');
    descriptionP.textContent =typeOf.description;

    li.appendChild(descriptionP);

    var img = document.createElement('img');
    img.src = typeOf.imageUrl;
    li.appendChild(img);
  }
});

})();
