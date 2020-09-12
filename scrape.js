const request = require('request');
const cheerio = require('cheerio');

const stockStatus = {
  IN_STOCK: 'In stock',
  BACKORDER: 'Backorders accepted',
  OUT_OF_STOCK: 'Temporarily out of stock',
  SOLD_OUT: 'Sold out',
  COMING_SOON: 'Coming Soon',
}

const sets = new Map();

sets.set('bespinDuel', 'https://www.lego.com/en-us/product/bespin-duel-75294');
sets.set('501st', 'https://www.lego.com/en-us/product/501st-legion-clone-troopers-75280');


request(sets.get('bespinDuel'), (error, response, html) => {
  if (!error && response.statusCode == 200) {
    const $ = cheerio.load(html);

    const availablity = $('.ProductOverviewstyles__Container-sc-1a1az6h-0');

    const productAvailablity = availablity.find('.ProductOverviewstyles__AvailabilityStatus-sc-1a1az6h-10').text();

  }
});

request(sets.get('501st'), (error, response, html) => {
  if (!error && response.statusCode == 200) {
    const $ = cheerio.load(html);

    const availablity = $('.ProductOverviewstyles__Container-sc-1a1az6h-0');

    const productAvailablity = availablity.find('.ProductOverviewstyles__AvailabilityStatus-sc-1a1az6h-10').text();



  }
});
