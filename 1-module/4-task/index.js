function checkSpam(str) {
  // ваш код...
  str = str.toUpperCase();
  let str1 = "1xBet";
  let str2 = "XXX";
  // if(str.includes(str1.toUpperCase()) || str.includes(str2.toUpperCase())){
  //   return(true);
  // }else{
  //   return(false);
  // }
  return(str.includes(str1.toUpperCase()) || str.includes(str2.toUpperCase()))
}
