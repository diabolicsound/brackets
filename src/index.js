module.exports = function check(str, bracketsConfig) {
    let brackstr = '';
    for (let i = 0; i <= str.length + 2; i++) {
        for (let j = 0; j < bracketsConfig.length; j++) {
            brackstr = (bracketsConfig[j][0] + bracketsConfig[j][1]);
            while (str.includes(brackstr)) {
            str = str.replace(brackstr, '');
            }
    }
}
   return str.length == 0 ? true : false;
}
