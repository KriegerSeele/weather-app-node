const argv = require('yargs').options({
    address: {
        alias: 'd',
        description: 'City address obtain weather',
        demand:true
    }
}).argv;

//console.log(argv.address);

//const encodedUrl = encodeURI(argv.address);

//console.log(encodedUrl);

module.exports = {
    argv
}
