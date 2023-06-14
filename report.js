const newman = require('newman');
 
newman.run({
    collection: require('./collection/collection.json'), // pointing to local JSON file
    // To run from collection link of postman below command
    //collection:'https://api.postman.com/collections/2106644-2bc320d1-f0f9-4c9b-94d6-260c74dcc263?access_key=PMAT-01H2WH8PA7YPHR9447WGYS4NX1',
    // environment:require('./collection/env.json'), // pointing to local environment file
    reporters: 'htmlextra',
    iterationCount: 1,
    reporter: {
        htmlextra: {
            export: './Reports/report.html', // If not specified, the file will be written to `newman/` in the current working directory.
        }
    }
}, function (err) {
    if (err) { throw err; }
    console.log('collection run complete!');
});