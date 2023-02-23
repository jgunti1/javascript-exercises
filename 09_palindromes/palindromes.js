const palindromes = function (palindrome) {
    palindrome = palindrome.toLowerCase();
    palindrome = palindrome.replace(/[^a-z]/g,"");
    newPalindrome = '';
    for (let i = palindrome.length - 1; i>=0;i-- ){
        newPalindrome += palindrome[i];
    }
    return palindrome == newPalindrome ? true : false ;
};

// Do not edit below this line
module.exports = palindromes;
