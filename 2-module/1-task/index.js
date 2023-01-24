function sumSalary(salaries) {
  // ваш код...
  let count = 0;
  for (let key in salaries){
    if(isFinite(salaries[key]) && (typeof(salaries[key]) !== 'Boolean')){
      count += salaries[key];
    }
  }
  return(count)
}
