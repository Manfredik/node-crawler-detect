const fs = require('fs'), path = require('path'), readline = require('readline'), stream = require('stream');
const assert = require('assert');

const crawlerDetect = require('../index');

function processFile(inputFile, lineCb, close) {
    const instream = fs.createReadStream(inputFile),
        outstream = new stream(),
        r = readline.createInterface(instream, outstream);
    r.on('line', lineCb);
    r.on('close', close);
}


processFile(path.resolve(__dirname, 'crawlers.txt'), (line) => {
    let detect = crawlerDetect.isCrawler(line);
    assert.equal(true, detect, line)
}, () => {console.log('test crawlers successful');})

processFile(path.resolve(__dirname, 'devices.txt'), (line) => {
    let detect = crawlerDetect.isCrawler(line);
    assert.equal(false, detect, line)
}, () => {console.log('test devices successful');})





