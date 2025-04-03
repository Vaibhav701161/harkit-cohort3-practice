/*
3. Convert a Callback-Based File Reader to a Promise-Based Function
💡 Scenario: You are working on a backend application that reads configuration files. The existing code uses Node.js fs.readFile(), which works with callbacks.

Convert this function into a Promise-based function using Promisification.

Implement error handling (file not found, permission issues).

🔧 Write a function readFilePromise(filepath) using Promises.
*/

const fs = require('fs');

function readFilePromise(filepath) {
    return new Promise((resolve, reject) => {
        fs.readFile(filepath, 'utf8', (err, data) => {
            if (err) {
                if (err.code === 'ENOENT') {
                    reject(new Error(`File not found: ${filepath}`));
                } else if (err.code === 'EACCES') {
                    reject(new Error(`Permission denied: ${filepath}`));
                } else {
                    reject(new Error(`Error reading file: ${err.message}`));
                }
            } else {
                resolve(data);
            }
        });
    });
}

