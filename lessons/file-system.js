const fs = require('fs');
const path = require('path');

// console.log('start')

// fs.mkdir(path.resolve(__dirname, 'dir'), (err) => {
//     if (err) {
//         console.log(err)
//         return;
//     }
//     console.log('Папка создана')
// })

// console.log('end')

// fs.rmdir(path.resolve(__dirname, 'dir'), (err) => {
//     if (err) {
//         throw err;
//     }
// })

// fs.appendFile(path.resolve(__dirname, 'text.txt'), '5 guefi 64 bin', (err) => {
//     if (err) {
//         throw err;
//     }
//     console.log('file was written')
// })

const writeFileAsync = async (path, data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(path, data, (err) => {
            if (err) {
                reject(err.message)
            }
            resolve();
        })
    })
}

const appendFileAsync = async (path, data) => {
    return new Promise((resolve, reject) => {
        fs.appendFile(path, data, (err) => {
            if (err) {
                reject(err.message)
            }
            resolve();
        })
    })
}

const readFileAsync = async (path) => {
    return new Promise((resolve, reject) => {
        fs.readFile(path, { encoding: 'utf-8' }, (err, data) => {
            if (err) {
                reject(err.message)
            }
            resolve(data);
        })
    })
}

const removeFileAsync = async (path) => {
    return new Promise((resolve, reject) => {
        fs.rm(path, (err) => {
            if (err) {
                reject(err.message)
            }
            resolve()
        })
    })
}

const myPath = path.resolve(__dirname, 'text.txt');
const text = process.env.TEXT || '';
writeFileAsync(myPath, text)
    .then(() => readFileAsync(myPath))
    .then(data => data.split(' ').length)
    .then(count => writeFileAsync(path.resolve(__dirname, 'count.txt'), `Кол-во слов ${count}`))
    .then(() => removeFileAsync(myPath))

// writeFileAsync(path.resolve(__dirname, 'text.txt'), 'guefi = boss')
//     .then(() => appendFileAsync(path.resolve(__dirname, 'text.txt'), ' {append part}'))
//     .then(() => readFileAsync(path.resolve(__dirname, 'text.txt')))
//     .then(data => console.log(data))
//     .then(() => removeFileAsync(path.resolve(__dirname, 'text.txt')))
//     .catch(err => console.log(err))


