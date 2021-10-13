function isPalindrome(word) {

  for (let i = 0; word.length - i > i; i++) {
    if (word[i] !== word[word.length - 1 - i]) return false;
  }
  return true;
}
  


/* 
  Add your pseudocode here
  LOOP THRough half of the string
  compare it with first string and last string at i are same
  return if true or false
*/

/*
  Add written explanation of your solution here

  The solution here is to iterate tthrough the characters using a for loop.For each character at position i 
  from the end.If any of these does not equal , then the condition returns false by breaking out of the for loop .
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
