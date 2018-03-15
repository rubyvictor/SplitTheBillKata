function splitTheBill(x) {
  let sum = 0;
  for (let key in x) {
    sum += x[key];
  }

  let length = 0;
  for (let key in x) {
    if (x.hasOwnProperty(key)) {
      length++;
    }
  }
  let avg = sum / length;
  console.log(sum, length);
  console.log(avg);

  for (let key in x) {
    x[key] = x[key] - avg;
  }
  return x;
}
