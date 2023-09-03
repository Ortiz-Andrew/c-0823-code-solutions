/* exported isVowel */
function isVowel(char) {
  char = char.toLowerCase();
  if (
    char === 'a' ||
    char === 'e' ||
    char === 'i' ||
    char === 'o' ||
    char === 'u'
  ) {
    return true;
  } else {
    return false;
  }
}
const charVowel = isVowel({ name: 'Andrew', name2: 'David', name3: 'Chris' });
console.log(isVowel(charVowel));
