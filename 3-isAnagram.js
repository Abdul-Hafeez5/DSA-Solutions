// Whether a word is Anagram or not

// An anagram is a word, phrase formed by rearranging the letters of a diffrent word or phrase, using all the original letters exactly ones. Like SILENT == LISTEN

// Input: (i = "silent"), (j = "listen" )  => Output: true

//Ist Approach
const isAnagram = (i, j) => {
  if (i.length !== j.length) return false;
  i = i.split("").sort().join("");
  j = j.split("").sort().join("");
  return i === j;
};

// "listen" => ["l", "i", "s", "t", "e", "n"] => ["e", "i", "l", "n", "s", "t"] => "eilnst"
// "silent" => ["s", "i", "l", "e" ,"n", "t"] => ["e", "i", "l", "n", "s", "t"] => "eilnst"

//2nd Approach
const isAnagram2 = (i, j) => {
  if (i.length !== j.length) return false;

  let obj1 = {};
  let obj2 = {};
  for (let index = 0; index < j.length; index++) {
    obj1[i[index]] = (obj1[i[index]] || 0) + 1;
    obj2[i[index]] = (obj2[i[index]] || 0) + 1;
  }

  for (const key in obj1) {
    if (obj1[key] !== obj2[key]) return false;
  }
  return true;
};

console.log(isAnagram("silent", "listen"));
console.log(isAnagram2("silent", "listen"));
