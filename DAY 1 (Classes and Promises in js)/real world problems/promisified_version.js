/*Create a Promisified Version of setTimeout
💡 Scenario: You need to create a utility function wait(ms) that returns a Promise, which resolves after ms milliseconds.

🔧 Write a function wait(ms) that uses Promises. */

const wait = (ms) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Waited for ${ms} milliseconds`);
        }, ms);
    });
}
// Example usage:
wait(2000).then((message) => {
    console.log(message); // "Waited for 2000 milliseconds"
});
// You can also use async/await syntax
const run = async () => {
    const message = await wait(3000);
    console.log(message); // "Waited for 3000 milliseconds"
}
run();
// This function creates a Promise that resolves after a specified number of milliseconds.
// The setTimeout function is used to delay the resolution of the Promise.
// The wait function can be used to create delays in your code, making it useful for various scenarios like animations, API rate limiting, etc.

