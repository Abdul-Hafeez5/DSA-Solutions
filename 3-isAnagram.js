// Whether a word is Anagram or not

// An anagram is a word, phrase formed by rearranging the letters of a diffrent word or phrase, using all the original letters exactly ones. Like SILENT == LISTEN

// Input: (i = "silent"), (j = "listen" )  => Output: true

const isAnagram = (i, j) => {
  if (i.length !== j.length) return false;
  i = i.split("").sort().join("");
  j = j.split("").sort().join("");
  return i === j;
};

// "listen" => ["l", "i", "s", "t", "e", "n"] => ["e", "i", "l", "n", "s", "t"] => "eilnst"
// "silent" => ["s", "i", "l", "e" ,"n", "t"] => ["e", "i", "l", "n", "s", "t"] => "eilnst"

console.log(isAnagram("silent", "listen"));
