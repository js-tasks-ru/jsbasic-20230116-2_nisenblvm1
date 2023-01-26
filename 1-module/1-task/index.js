function factorial(n) {
  // ваш код...
  let count = 1;
  let result = count;
  while(count <= n){
    result = result * count;
    count += 1;
  }
  return result
}

