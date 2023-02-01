function getMinMax(str) {
  // ваш код...
  let arrNumbers = ((str.split(' ')).filter(item => !isNaN(item))).map(item => Number(item));
  
  return { min: Math.min(...arrNumbers),
    max: Math.max(...arrNumbers)};
}
