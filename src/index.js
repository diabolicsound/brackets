module.exports = function check(str, bracketsConfig) {
    let arr = str.split('');
if ((bracketsConfig[2] !== undefined) && (arr[0] == arr[arr.length - 2]) && (bracketsConfig[0][1] == arr[arr.length - 1] )) {
    return false;
}

   else if ((arr[0] == bracketsConfig[0][0]) && (arr[arr.length - 1] == bracketsConfig[0][1])) {
      return true;
  }
  else if ((bracketsConfig[1] !== undefined && arr[0] == bracketsConfig[1][0]) && (arr[arr.length - 1] == bracketsConfig[1][1]) && (arr[3] == bracketsConfig[1][1])) {
    return true;
  }
else if ((bracketsConfig[2] !== undefined && (bracketsConfig[2] == undefined)  && arr[0] == bracketsConfig[2][0]) && (arr[arr.length - 1] == bracketsConfig[2][1])) {
    return true;
}
else if ((bracketsConfig[1] !== undefined) && bracketsConfig[2] == undefined) {
   let conc = bracketsConfig[1].concat(bracketsConfig[0]);
    if (str == conc.join('')) {
return true;
    }
    else {
       return false;
    }
}

    else {
      return false;
  } 
}
