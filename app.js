let url = "http://numbersapi.com";
let favoriteNumber = 8;

$.getJSON(`${url}/${favoriteNumber}?json`)
.then(data => {console.log(data);
  });

let favoriteNumbers = [6, 4, 2];
$.getJSON(`${url}/${favoriteNumbers}?json`)
.then(data => {console.log(data);
    let factsContainer = $('#number-facts');
      for (let number in data) {
        let fact = data[number];
        factsContainer.append(`<p>${number}: ${fact}</p>`);
      }
    });

Promise.all(
    Array.from({ length: 4 }, () => {
        return $.getJSON(`${url}/${favoriteNumber}?json`);
    })
).then(facts => {
    facts.forEach(data => $("body").append(`<p>${data.text}</p>`));
});