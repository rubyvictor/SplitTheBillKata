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
  let roundedAvg = parseFloat(avg.toFixed(2));
  console.log(sum, length);
  console.log(roundedAvg);

  for (let key in x) {
    let value = parseFloat(x[key].toFixed(2));
    let difference = value - roundedAvg
    x[key] = parseFloat(difference.toFixed(2));
  }
  return x;
}
