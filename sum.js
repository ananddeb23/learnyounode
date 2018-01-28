// no testing done as arguments are passed in console
function dosum() {
  const values = process.argv.slice(2);
  // values = Number(values);
  // console.log(values);
  let tot = 0;
  values.forEach((ele) => { tot += Number(ele); });

  console.log(tot);
}
function dosumdummy(...args) {
  const values = args.slice();
  // values = Number(values);
  // console.log(values);
  let tot = 0;
  values.forEach((ele) => { tot += Number(ele); });

  console.log(tot);
}

dosum();
module.exports.dosumdummy = dosumdummy;
