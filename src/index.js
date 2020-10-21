module.exports = function check(str, bracketsConfig) {
    let brackets = [];
    let result = str;

    for (let i = 0; i < bracketsConfig.length; i++) {
        brackets[i] = bracketsConfig[i].join('');
    }
    let count = brackets.length - 1;
    while (count >= 0) {
        if (result.includes(brackets[count])) {
            result = result.replace(brackets[count], '');
            count = brackets.length;
        } else {
            count--;
        }
    }

    return result === '';
}
