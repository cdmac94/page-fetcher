var fs = require('fs');
const request = require('request');

const args = process.argv.slice(2);

const Url = args[0];
const filePath = args[1];

// const { size } = fs.statSync(Url)
 
// console.log({ size });

// function found through stack overflow - statSync 
// const getFilesizeInBytes = (filename) => {
//   var stats = fs.statSync(filename);
//   var fileSizeInBytes = stats.size;
//   return fileSizeInBytes;
// }

// console.log(getFilesizeInBytes(Url));



const downloadFile = (filename) => {
  
  let bytes = 0;
  request(filename, (error, response, body) => {
    for (let x = 0; x < response.length; x++) {
      bytes += 1;
    }
    for (let x = 0; x < body.length; x++) {
      bytes += 1;
    }
    if (error === null) {
      continue
    } 
    fs.writeFileSync(filePath, body)
  })
  console.log (`Downloaded and saved ${bytes} to ${filePath}`)
};

downloadFile(Url);