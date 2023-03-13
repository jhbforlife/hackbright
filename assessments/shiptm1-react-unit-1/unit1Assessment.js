////////////////////////////////////////////
// Unit 1 Assessment Coding Challenges /////
////////////////////////////////////////////

////////////////////////////////////////////

// Problem 1: 
// Is the given word an anagram of a palindrome?

// Description:
// A palindrome is a word that reads the same forward and backwards
// (eg, "racecar", "tacocat"). An anagram is a rescrambling of a word
// (eg for "racecar", you could rescramble this as "arceace").

// Determine if the given word is a re-scrambling of a palindrome.
// The word will only contain lowercase letters, a-z.

// Example test cases:

//     >>> isAnagramOfPalindrome("a")
//     True

//     >>> isAnagramOfPalindrome("ab")
//     False

//     >>> isAnagramOfPalindrome("aab")
//     True

//     >>> isAnagramOfPalindrome("arceace")
//     True

//     >>> isAnagramOfPalindrome("arceaceb")
//     False


function isAnagramOfPalindrome(word) {
    // Is the given word an anagram of a palindrome?

    // YOUR CODE HERE
    let oddSingles = 0;
    for (let i = 0; i <= (word.length); i++) {
        const split = word.split('');
        const filter = (split.filter(c => c == word[i])).length;
        if (word.length % 2 == 0) {
            if (filter % 2 != 0) {
                return false;
            }
        } else if (oddSingles < 2) {
            if (filter % 2 != 0) {
                oddSingles++;
            }
        } else {
            return false;
        }
    }
    return true;
}

////////////////////////////////////////////

////////////////////////////////////////////

// Problem 2: 
// Decode a string.

// Description:
// A valid "secret code" is a sequence of numbers and letter, always starting with a number
// and ending with letter(s).

// Each number tells you how many characters to skip before finding a good letter.
// After each good letter should come the next "skip" number.

// For example, the string "hey" could be encoded by "0h1ae2bcy". This means
// "skip 0, find the 'h', skip 1, find the 'e', skip 2, find the 'y'".

// A single letter should work:

//     >>> decode("0h")
//     'h'

//     >>> decode("2abh")
//     'h'

// Longer patterns should also work:

//     >>> decode("0h1ae2bcy")
//     'hey'


function decode(secretString) {
    // Decode a string.

    // YOUR CODE HERE
    let word = '';
    for (const char in secretString) {
        if (Number.parseInt(secretString[char]) || secretString[char] == 0) {
            word += (secretString[Number(secretString[char]) + (Number(char) + 1)]);
        }
    }
    return word;
}
////////////////////////////////////////////

////////////////////////////////////////////

// Finished? Try calling your functions and 
// passing different arguments to test them!

console.log(isAnagramOfPalindrome("arceace")); // true
console.log(isAnagramOfPalindrome("etss")); // false
console.log(isAnagramOfPalindrome("bbo")); // true
console.log(isAnagramOfPalindrome("onno")); // true
console.log(isAnagramOfPalindrome("ingulsar")); // false
console.log(decode("0h1ae2bcy")); // hey
console.log(decode("2fee3rtkv0e7tyswecur2xzy")); // every
console.log(decode("0j3cpos6ksTmpqx")); // jsx
