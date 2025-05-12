const { error } = require("console");
const fs = require("fs");
const path = require("path");

// fs.readFile(path.resolve(__dirname, 'test.txt'), (err, data)=>{
//     if (err){
//         throw err;
//     }
//     console.log(data)
// })

// const stream  = fs.createReadStream(path.resolve(__dirname, 'test.txt'))

// stream.on('data', (chunk)=>{
//     console.log(chunk)
// })

// stream.on('end', ()=>console.log('The end of the file'))

// stream.on('close', ()=>console.log('Closed the file'))
// stream.on('open', ()=>console.log('Opening the file'))
// stream.on('error', (error)=>{console.log(error)})

const writableStream = fs.createWriteStream(
  path.resolve(__dirname, "test2.txt")
);

for (let i = 0; i < 20; i++) {
  writableStream.write(i + "\n");
}
writableStream.end();
