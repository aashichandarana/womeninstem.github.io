/* .js files add interaction to your website */

var factList = [
  "Women make up 29% of the STEM labor force",
  "19% of STEM company board members are women",
  "Among STEM industry CEOs, 3% are women",
  "The number of women in STEM board positions rose by 18% in 2020",
  "Women's enrollement in STEM college courses rises about 6% yearly"
];

var fact = document.getElementById("fact");
var myButton = document.getElementById("myButton");
var count = 0;

myButton.addEventListener("click", displayFact);

function displayFact() {
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length) {
    count = 0;
  }
}
