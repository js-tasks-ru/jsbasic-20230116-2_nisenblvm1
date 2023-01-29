function getMinMax(str) {
  // ваш код...
  let arrNumbers = ((str.split(' ')).filter(item => !isNaN(item))).map(item => Number(item));
  let result = {};
  result.min = Math.min(...arrNumbers);
  result.max = Math.max(...arrNumbers);
  return(result)
}
