function cntVowels(str) {
  let count = 0;
  let vowel = "aeiou";

  for (let i = 0; i < str.length; i++) {
    if (vowel.includes(str[i].toLowerCase())) {
      count++;
    }
  }
  return count;
}


console.log(cntVowels("programming")); // 3
