// no testing done as arguments are passed in console
function dosum() {
  const values = process.argv.slice(2);
  // values = Number(values);
  // console.log(values);
  let tot = 0;
  values.forEach((ele) => { tot += parseInt(ele); });

  return tot;
}

console.log(dosum());
