const base64 = require('base-64');

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("\x1b[35m%s\x1b[0m", `
           _           _    _ 
 _ __ ___ (_)_____   _| | _(_)
| '_ \` _ \\| |_  / | | | |/ / |
| | | | | | |/ /| |_| |   <| |
|_| |_| |_|_/___|\\__,_|_|\\_\\_| 

`);

rl.question(' [INPUT] USER ID : ', (userid) => {
  const encodedStr = base64.encode(userid);
  console.log(`\n [LOGS] TOKEN FIRST PART : ${encodedStr}`);
  console.log('\nPress any key to exit.');
  rl.close();
});
