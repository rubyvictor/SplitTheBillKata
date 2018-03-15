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
  let avg = parseFloat(sum).toFixed(2) / parseFloat(length).toFixed(2);
  console.log("sum:"+sum, "length:"+length);
  console.log("avg="+avg);

  for (let key in x) {
    x[key] = x[key] - avg;
  }
  return x;
}
