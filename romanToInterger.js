// Given a roman numeral, convert it to an integer.Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

var romanToInt = function(s) {
    let r = 0;
    let k = '';
    let L = {'IV': 4, 'IX': 9, 'XL': 40, 'XC': 90, 'CD': 400, 'CM': 900, 'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000}
    
    
    for(let i = s.length - 1; i >= 0; i--) {
        k = s[i- 1] + s[i];

        r += L[k] ? (i--, L[k]) : L[s[i]];  
    }
    
    return r;
};