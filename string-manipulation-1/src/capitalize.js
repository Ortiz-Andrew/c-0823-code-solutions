/* exported capitalize */
function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}
const capWordResult = capitalize({
  game: 'tekken',
  game2: 'escspe from tarkov',
  game3: 'valorant',
});
console.log(capWordResult);
