module.exports = function check(str, bracketsConfig) {
  
  const config1 = [['(', ')']];
  const config2 = [['(', ')'], ['[', ']']];
  const config3 = [['(', ')'], ['[', ']'], ['{', '}']];
  const config4 = [['|', '|']];
  const config5 = [['(', ')'], ['|', '|']];
  const config6 = [['1', '2'], ['3', '4'], ['5', '6'], ['7', '7'], ['8', '8']];
  const config7 = [['(', ')'], ['[', ']'], ['{', '}'], ['|', '|']];

  let arr = [];
    let map = new Map(bracketsConfig);

    for (let i = 0; i < str.length; i++) {
        if (arr.length === 0) {
            arr.push(str[i]);
            continue;
        } 
        if (map.get(arr[arr.length - 1]) === str[i]) {
            arr.pop(arr.length - 1);
        } else arr.push(str[i]);
    }

    return (arr.length === 0) ? true: false;
}
