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
    postal_code: '98106',
    posting_content: "Lorem ipsum dolor sit amet, est delectus platonem te, partiendo scribentur sit in. Ne est lucilius expetenda, impetus noluisse assentior vel in. Has an deleniti delectus reformidans, sed duis ludus voluptatibus at, ei duo consul dicunt pericula. Nam melius timeam dolorem id, ut tacimates constituto est. Ei eam delenit molestie qualisque, te est eirmod lobortis. \nUt vide fuisset vulputate sed, cetero fabulas referrentur sed ea. Ea dico dolore maiestatis vim, nec invenire perpetua torquatos ex, at nihil tantas intellegam vix. Nonumes definiebas reformidans sea ex, vel at case elit omittam. In est etiam definiebas, cu per exerci temporibus.",
    auto_year: 2005,
    auto_make_model: 'Skoda',
    language: 5, // English
    // photos: zucchini.jpg,
    show_window: true,
    show_dock: true,
    showDevTools: false
};


nightmare 
    .goto('https://accounts.craigslist.org/login/home')
    .wait(2000)
    // Login Page
    .insert('#inputEmailHandle', defaults.email)
    .insert('#inputPassword', defaults.password)
    .click('.login-page-btn')
    // Dashboard
    .wait('.new_posting_thing')
    .select('.new_posting_thing [name=areaabb]', 'sea')
    .click('.new_posting_thing input[type=submit]')
    // Posting type
    .wait('.picker input[name=id]')
    .click('.picker input[name=id][value=so]')
    .click('.picker .pickbutton')
    // Posting subject
    .wait(2000)
    .wait('.picker .pickbutton')
    .wait('.picker input[name=id][value="82"]')
    .click('.picker input[name=id][value="82"]')
    //hidden input: U2FsdGVkX18yMzU3NTIzNZmQxarlzJGxL4hAt2d4PrClVs-flKytM41Bh0d-Rfw-   
    // Posting location
    .wait(1000)
    .wait('.picker .pickbutton')
    .wait('.picker input[name=n][value="1"]')
    .click('.picker input[name=n][value="1"]')
    .click('.picker .pickbutton')
    //hidden input: U2FsdGVkX185MzgyOTM4Mj66W1mMwNsODTDpmXYQ7aZNqw751kKGTv-pxnvxtEmp3LIJJ8JiBNA
    // Posting details
    .wait(2000)
    .wait('.bigbutton')
    .click('#contact_phone_ok')
    .click('#contact_text_ok')
    .insert('#contact_phone', defaults.phone)
    .insert('#contact_name', defaults.contact_name)
    .insert('#PostingTitle', defaults.posting_title)
    .insert('#postal_code', defaults.postal_code)
    .insert('#PostingBody', defaults.posting_content)
    .wait(1500)
    .click('.bigbutton')
    // Position on the Map
    .wait(3000)
    .click('.bigbutton')

    // Image Upload
    .wait(2000)
    .wait('#classic')
    .click('#classic')
    .wait(2000)
    .wait('#modern')
    .upload('input[name=file]', defaults.photos)
    .click('.bigbutton')

    // Preview & Publish
    .wait(3000)
    .wait('button[type=submit]')
    .click('button[type=submit]')

    // Check email
    

    .catch(function (error) {
      console.log('error: ', error)
    }); 


app.listen(3000);