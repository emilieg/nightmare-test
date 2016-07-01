var express = require('express');
var app = express();
var Nightmare = require('nightmare');
var nightmare = Nightmare({ show: true });

require('nightmare-upload')(Nightmare);

app.get('/', function(req, res) {
  res.send('welcome!');
});

var defaults = {
    email: 'emiliegerberharris@gmail.com',
    password: 'summer2016',
    phone: '16047111111',
    contact_name: 'John Doe',
    posting_title: 'Skoda Fabia 2005 Yellow like NEW (LOW Price)!',
    posting_price: 5000,
    postal_code: 'V6A',
    posting_content: "Lorem ipsum dolor sit amet, est delectus platonem te, partiendo scribentur sit in. Ne est lucilius expetenda, impetus noluisse assentior vel in. Has an deleniti delectus reformidans, sed duis ludus voluptatibus at, ei duo consul dicunt pericula. Nam melius timeam dolorem id, ut tacimates constituto est. Ei eam delenit molestie qualisque, te est eirmod lobortis. \nUt vide fuisset vulputate sed, cetero fabulas referrentur sed ea. Ea dico dolore maiestatis vim, nec invenire perpetua torquatos ex, at nihil tantas intellegam vix. Nonumes definiebas reformidans sea ex, vel at case elit omittam. In est etiam definiebas, cu per exerci temporibus.",
    auto_year: 2005,
    auto_make_model: 'Skoda',
    language: 5, // English
    photos: [],
    show_window: true,
    show_dock: true,
    showDevTools: false
};

// nightmare
//   .goto('http://yahoo.com')
//   .type('form[action*="/search"] [name=p]', 'github nightmare')
//   .click('form[action*="/search"] [type=submit]')
//   .wait('#main')
//   .evaluate(function () {
//     return document.querySelector('#main .searchCenterMiddle li a').href
//   })
//   .end()
//   .then(function (result) {
//     console.log(result)
//   })
//   .catch(function (error) {
//     console.error('Search failed:', error);
//   });

nightmare 
    .goto('https://accounts.craigslist.org/login/home')
    // .then(function (result) {
    //   console.log(result)
    // })
    // .end()
    .catch(function (error) {
      console.log('error: ', error)
    }); 


app.listen(3000);