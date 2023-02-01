function camelize(str) {
  // ваш код...
  let arrNew = str.split('-');

  let res = arrNew.map(function(item, index) {

    if(item && index > 0){
      return(item[0].toUpperCase() + item.slice(1));
    }
    else{
      return(item);
    }

  });
  return(res.join(''));
}
