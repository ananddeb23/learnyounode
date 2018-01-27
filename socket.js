const net = require('net');

// const strftime = require('strftime');
// const datetime = strftime('%Y-%m-%d %k:%M');


function zerofilled2(val) {
  if (val.length < 2) {
    return `0${val}`;
  }
  return val;
}
function getDateInFormat() {
  const date = new Date();
  const year = date.getFullYear();
  let month = (date.getMonth() + 1).toString();
  let day = (date.getDate()).toString();
  let hour = (date.getHours()).toString();
  let minutes = (date.getMinutes()).toString();
  month = zerofilled2(month);
  hour = zerofilled2(hour);
  day = zerofilled2(day);
  minutes = zerofilled2(minutes);
  const message = `${year}-${month}-${day} ${hour}:${minutes}`;
  return message;
}

const server = net.createServer((socket) => {
  const message = getDateInFormat();
  socket.end(`${message}\n`);
});
server.listen(process.argv[2]);
