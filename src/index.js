module.exports = function check(str, bracketsConfig) {
    let count =0;
    do {
        count= str.length;
        for (let i = 0; i < bracketsConfig.length; i++) {
           str =  str.replace(bracketsConfig[i].join(""), "");
        }
    } while (str.length < count);
    return str.length == 0;
}

