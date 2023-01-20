function ucFirst(str) {
  // ваш код...
  if(str) {
    let arr = str.split('');
    arr[0] = arr[0].toUpperCase();
    return (arr.join(''));
  }
  else {return('')}

}
