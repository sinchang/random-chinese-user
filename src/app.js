import randomEmail from 'random-email';
import randomName from './partial/randomName';
import randomCaddress from 'randomCaddress';
import randomMobileNumber from './partial/randomMobileNumber';

var nodes = document.querySelectorAll('.box .value');
var btn = document.getElementById('btn');

getRandomUser(nodes);

btn.addEventListener("click", function() {
  getRandomUser(nodes);
}, true);

function getRandomUser(nodes) {
  const randomUser = [
    randomName(),
    randomMobileNumber(),
    randomEmail({
      domain: 'gmail.com'
    }),
    new randomCaddress().result()[0],
  ]

  for (let i = 0, l = nodes.length; i < l; i++) {
    nodes[i].innerHTML = randomUser[i];
  }
}
