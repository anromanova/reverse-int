module.exports = function reverse(n) {
    
let reverseNew = n.toString().split('').reverse().join('');
if (reverseNew < 0) {
    return -reverseNew
}
return reverseNew
}
