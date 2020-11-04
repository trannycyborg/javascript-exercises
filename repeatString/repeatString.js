const repeatString = function(str, num) {
    let repeatStr = []
    if (num < 0) {
        return 'ERROR';
    } else {
        for(let i = 0; i < num; i++) {
            repeatStr[i] = str;
        }
    }
    return repeatStr.join('');
}
console.log(repeatString('hey', 3));
module.exports = repeatString