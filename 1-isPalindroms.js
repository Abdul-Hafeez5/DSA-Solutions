// Check whether a number is palindrome or not

// A palindrome is a number that reads the same backward or forward. as 121 or 1991

const isPalindrome = (x) => {
  return x < 0 ? false : x === +x.toString().split("").reverse().join("");
};

// here + operator is used to convert string to number, if it is convertable else it returns NAN
// 10 => "10" =>["1", "0"] => ["0", "1"] => "01"

const result = isPalindrome(-11);
console.log(result);
