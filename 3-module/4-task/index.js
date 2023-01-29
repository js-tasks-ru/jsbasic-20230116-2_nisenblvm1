function showSalary(users, age) {
  // ваш код...
  let arrRes = [];
  users.forEach((item) => {
    if(item.age <= age){arrRes.push(item.name + ',' + " " + item.balance + '\n')}
  })
  let newStr = (arrRes.join(''));
  return(newStr.slice(0, -1));
}
